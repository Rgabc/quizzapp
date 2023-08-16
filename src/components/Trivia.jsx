/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"



 export default function Trivia({
    data,
    setStop,
    questionNumber,
    setQuestionNumber}){
      const[question , setQuestion]=useState(null);
      const[selectAnswer ,setSelectAnswer]=useState(null);
      const[className , setClassName]=useState("answer")
      useEffect(()=>{
                  setQuestion(data[questionNumber-1]);

      },[data,questionNumber]);

     const delay = (duration , callback)=> {
           setTimeout(()=>{
               callback();
           },duration)
           


     }


      const handleClick = (a) => {
        setSelectAnswer(a)
        setClassName("answer active")
        delay(3000,()=>   setClassName(a.correct ? "answer correct ":"answer wrong"))
        
        delay(6000,()=>{
            if (a.correct) {
                setQuestionNumber((prev)=> prev + 1)
                setSelectAnswer(null);
            }else {
                setStop(true);
            }


        }   )
       };

      


    return(
        <div className="Trivia">
            <div className="questions">{question?.question}</div>
            <div className="answers">
                {question?.answer.map((a)=>(
                
                      <div className={selectAnswer === a ? className:"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
                ))}
                
            </div>
        </div>
    )
 }
 