// components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ result, setResult, askQuestion }) => {
  const clearHistory = () => {
    localStorage.removeItem('chatData');
    setResult([]);
  };

  const history = result
    .filter(item => item.type === 'q')
    .map(item => item.text);

  return (
    <div className="col-span-1 bg-zinc-800 p-4 overflow-y-auto text-left">
      <h2 className="text-white text-2xl font-extrabold mb-4">📜 Chat History</h2>
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
            onClick={() => askQuestion(q)}
          >
            {q.length > 50 ? q.slice(0, 47) + '...' : q}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
