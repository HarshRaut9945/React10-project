import React from 'react'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'

const Quiz = () => {
  return (
    <>
      
   <div className="container mt-4">
      <Timer/>
      <ProgressBar/>
      <QuestionCard/>
        
       
    </div>



    </>
  )
}

export default Quiz
