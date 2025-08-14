import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const[numberallowed,setnumberallowed]=useState(false);
  const[charAllowes,setcharAllowed]=useState(false);
  const[password,setpassword]=useState("");

  //useref hook
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
let pass=""
let str=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numberallowed) str+="0,1,2,3,4,5,6,7,8,9"
if(charAllowes)  str+="!@#$%^&*=[] {}~`"

for(let i=1;i<length;i++){
 let char=Math.floor(Math.random()*str.length +1);
 pass+=str.charAt(char);
}
setpassword(pass)

  },[length,numberallowed,charAllowes,setpassword])

  const coppyPasswordClickboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
   passwordGenerator()
  },[length,numberallowed,charAllowes,passwordGenerator])

  return (
    <>
   <div className='passwordgenerator'>

     <input type="text" value={password} placeholder='password' readOnly 
     ref={passwordRef}
     />
      <button onClick={coppyPasswordClickboard}>Copy</button>
   </div>
   <br />
   <div className="range">

    <div className="range-length">
      <input type="range" min={6} max={100} value={length} 
         onChange={(e)=>{setlength(e.target.value)}}
      />
      <label>Length:{length}</label>
    </div>
    <div className="range-number">
      <input type="checkbox" defaultChecked={numberallowed} id="numberallowed" 
         onChange={()=>{
          setnumberallowed((prev)=>!prev);
         }}
      />
      <label htmlFor="numberInput">Number</label>
    </div>

    <div className="range-character">
      <input type="checkbox" defaultChecked={charAllowes} id="characterInput" 
         onChange={()=>{
          setcharAllowed((prev)=>!prev);
         }}
      />
      <label htmlFor="numberInput">Character</label>
    </div>

   </div>
  
    </>
  )
}

export default App
