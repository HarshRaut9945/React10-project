import { createContext ,useReducer } from "react";
import questions from '../data/question.json' 

export const Quizcontext=createContext();

const intialState={
    username:"",
    questions
}

function quizReducer(state,action){
  switch(action.type){
    case "SET_NAME":
        return{
            ...state,
            username:action.payload

        }
        default:
            return state;
  }
}

export default function Quizprovider({childrean}){

    const [state,dispatch]=useReducer(quizReducer,initialState)
   return(
   <Quizcontext.Provider value={{state,dispatch}}>
            {childrean}
   </Quizcontext.Provider>
   )
}
