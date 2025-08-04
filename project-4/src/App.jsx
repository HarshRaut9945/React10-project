// App.jsx
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { URL } from './constant';
import Answer from './components/Answer';
import Sidebar from './components/Sidebar';
import ChatBody from './components/ChatBody';

function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollToAns = useRef(null);

  useEffect(() => {
    const storedChat = localStorage.getItem('chatData');
    if (storedChat) {
      setResult(JSON.parse(storedChat));
    }
  }, []);

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

  const askQuestion = async (customText) => {
    const trimmedQuestion = (customText || question).trim();
    if (!trimmedQuestion) return;

    setLoading(true);
    setQuestion(customText ? question : '');

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

      setTimeout(() => {
        scrollToAns.current?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
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

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <Sidebar result={result} setResult={setResult} askQuestion={askQuestion} />
      <ChatBody
        result={result}
        loading={loading}
        question={question}
        setQuestion={setQuestion}
        askQuestion={askQuestion}
        scrollToAns={scrollToAns}
      />
    </div>
  );
}

export default App;