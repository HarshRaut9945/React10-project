import { useState, useEffect } from 'react';
import './App.css';
import { URL } from './constant';
import Answer from './components/Answer';

function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load chat from localStorage on mount
  useEffect(() => {
    const storedChat = localStorage.getItem('chatData');
    if (storedChat) {
      setResult(JSON.parse(storedChat));
    }
  }, []);

  // Save chat to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatData', JSON.stringify(result));
  }, [result]);

  const payload = (text) => ({
    contents: [
      {
        parts: [{ text }]
      }
    ]
  });

  const askQuestion = async () => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    setLoading(true);

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload(trimmedQuestion))
      });

      const data = await response.json();
      let dataString = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

      const answerLines = dataString
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line !== '')
        .map(line => line.replace(/^\*+|\*+$/g, '').replace(/\*\*/g, ''));

      setResult(prev => [
        ...prev,
        { type: 'q', text: trimmedQuestion },
        { type: 'a', text: answerLines }
      ]);

      setQuestion('');
    } catch (error) {
      console.error('Error:', error);
      setResult(prev => [
        ...prev,
        { type: 'q', text: trimmedQuestion },
        { type: 'a', text: ['Something went wrong. Please try again.'] }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem('chatData'); // Clear localStorage
    setResult([]);                       // Clear state
  };

  const history = result
    .filter(item => item.type === 'q')
    .map(item => item.text);

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      {/* Sidebar */}
      <div className="col-span-1 bg-zinc-800 p-4 overflow-y-auto text-left">
        <h2 className="text-white text-lg font-bold mb-2">History</h2>

        <button
          onClick={clearHistory}
          className="mb-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Clear History
        </button>

        <ul className="space-y-2">
          {history.map((q, i) => (
            <li
              key={i}
              className="cursor-pointer bg-zinc-700 text-zinc-200 px-3 py-2 rounded hover:bg-zinc-600 transition"
              onClick={() => {
                const index = result.findIndex(item => item.text === q);
                const element = document.getElementById(`q-${index}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {q.length > 50 ? q.slice(0, 47) + '...' : q}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="col-span-4 p-10 flex flex-col justify-between">
        {/* Result Box */}
        <div className="container h-full overflow-y-auto text-left pr-4">
          <div className="text-white text-lg whitespace-pre-wrap">
            {loading ? (
              <p className="text-zinc-300 text-lg">Loading...</p>
            ) : (
              <ul>
                {result.map((item, index) => {
                  if (item.type === 'q') {
                    return (
                      <li key={`q-${index}`} id={`q-${index}`} className="flex justify-end my-2">
                        <p className="bg-zinc-700 text-zinc-300 px-4 py-2 rounded-md border border-zinc-500 max-w-[70%] text-right">
                          {item.text}
                        </p>
                      </li>
                    );
                  } else if (item.type === 'a') {
                    return item.text.map((ansItem, ansIndex) => (
                      <li key={`a-${index}-${ansIndex}`} className="flex justify-start my-2">
                        <div className="bg-zinc-900 text-white px-4 py-2 rounded-md max-w-[70%] text-left">
                          <Answer ans={ansItem} index={ansIndex} total={item.text.length} />
                        </div>
                      </li>
                    ));
                  }
                  return null;
                })}
              </ul>
            )}
          </div>
        </div>

        {/* Input Field */}
        <div className="bg-zinc-800 w-1/2 p-1 pr-2 text-white rounded-2xl border border-zinc-400 flex h-16 shadow-lg mx-auto">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-full p-3 outline-none bg-transparent text-white"
            placeholder="Ask me anything"
            onKeyDown={(e) => e.key === 'Enter' && askQuestion()}
          />
          <button
            onClick={askQuestion}
            className="bg-blue-600 hover:bg-blue-700 px-5 text-white rounded-r-xl font-semibold"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
