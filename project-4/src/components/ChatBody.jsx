// components/ChatBody.jsx
import React from 'react';
import Answer from './Answer';

const ChatBody = ({ result, loading, question, setQuestion, askQuestion, scrollToAns }) => {
  return (
    <div className="col-span-4 p-10 flex flex-col justify-between">
      <div className="container h-full overflow-y-auto text-left pr-4">
        <div className="text-white text-lg whitespace-pre-wrap">
          <h1 className="text-4xl font-bold mb-4 text-white">💬 Your Assistant</h1>
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
                      <div
                        ref={index === result.length - 1 && ansIndex === item.text.length - 1 ? scrollToAns : null}
                        className="bg-zinc-900 text-white px-4 py-2 rounded-md max-w-[70%] text-left"
                      >
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

      {/* Input */}
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
          onClick={() => askQuestion()}
          className="bg-blue-600 hover:bg-blue-700 px-5 text-white rounded-r-xl font-semibold"
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default ChatBody;