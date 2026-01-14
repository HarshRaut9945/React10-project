
import  {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [name,setName]=useState("") 
    const {dispatch}=useContext()

    const startquiz=()=>{
        if(!name.trim()) return alert("please enter your name")
            dispatch({type:"SET_NAME",payload:name})
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="text-center p-5 rounded shadow-lg" style={{ maxWidth: "500px", backgroundColor: "#f8f9fa" }}>
                    <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem", color: "#0d6efd" }}>
                        🚀 React Quiz Challenge
                    </h1>
                    <p className="text-muted mb-4">Test your knowledge and see how you score!</p>
                    <input 
                        placeholder="Enter your name" 
                        className="form-control form-control-lg mb-4 border-2"
                        type="text" 
                        autoComplete="off"
                        style={{ borderColor: "#0d6efd" }}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <button

                     className="btn btn-primary btn-lg w-100 fw-bold">
                        Start Quiz
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
