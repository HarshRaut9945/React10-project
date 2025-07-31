import { useState } from 'react'
import './App.css'
import {URL} from './constant';

function App() {
  const [question, setQuestion] = useState('');
  const

 const payload={
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }

  const askQuestion = async() => {
    let response=await fetch(URL,{
      method:"POST",
      body:JSON.stringify(payload)
    });
    response= await response.json();
    console.log(response.candidates[0].content.
parts[0].taxt);
    
  };

  return (
    <>
      <div className='grid grid-cols-5 h-screen text-center'>
        
        {/* Sidebar */}
        <div className='col-span-1 bg-zinc-800'></div>

        {/* Main Content */}
        <div className='col-span-4 p-10 flex flex-col justify-center items-center'>
          
          {/* Empty space above if needed */}
          <div className="container h-110 mb-10">
            {/* You can use this for heading or extra content later */}
          </div>

          {/* Input Field */}
          <div className='bg-zinc-800 w-1/2 p-1 pr-2 text-white rounded-2xl border border-zinc-400 flex h-16 shadow-lg'>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className='w-full h-full p-3 outline-none bg-transparent text-white'
              placeholder='Ask me anything'
            />
            <button
              onClick={askQuestion}
              className='bg-blue-600 hover:bg-blue-700 px-5 text-white rounded-r-xl font-semibold'
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
