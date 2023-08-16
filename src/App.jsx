import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";

function App() {
  const[questionNumber , setQuestionNumber]=useState(1);
  const[stop,setStop]=useState(false);
  const[earned,setEarned]=useState("Rs.0");

const data=[
   {  
    id:1,
    question:"what is kalyani favourite color?",
    answer:[
      
      {
        text:"pink",
        correct:false,
      },
      {
        text:"black",
        correct:true,
      },
      {
        text:"white",
        correct:false,
      },
      {
        text:"red",
        correct:false,
      },
     ],
    
  },
  {  
    id:2,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
   
  {
    id:3,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:4,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:5,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:6,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:7,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:8,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:9,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  },
  {  
    id:10,
    question:"who is apurva  fav dish?",
    answer:[
      
      {
        text:"noodle",
        correct:false,
      },
      {
        text:"french fries",
        correct:true,
      },
      {
        text:"white sauce pasta",
        correct:false,
      },
      {
        text:"pizza",
        correct:false,
      },
     ],
    
  }





]
  
    
     
    





  

  



const moneyPyramid=useMemo(() =>
[
  {id:1 , amount:"Rs 1000"},
  {id:2 , amount:"Rs 2000"},
  {id:3 , amount:"Rs 3000"},
  {id:4 , amount:"Rs 4000"},
  {id:5 , amount:"Rs 5000"},
  {id:6 , amount:"Rs 6000"},
  {id:7 , amount:"Rs 7000"},
  {id:8 , amount:"Rs 8000"},
  {id:9 , amount:"Rs 9000"},
  {id:10 , amount:"Rs 1000"}

].reverse(),
[]
);

useEffect(() =>{
  questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
},[questionNumber,moneyPyramid]);

  return (
  
      <div className="App">
      <div className="main">
        {stop ? (<h1  className="endText">YOU EARNED:{earned}</h1>) : (
         <> 
      <div className="top">
        <div className="timer">30</div>
     </div>
      <div className="bottom"><Trivia
       data={data} 
      setStop={setStop} 
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}/>
      
      </div>
      </>
        )}
      </div>



      <div className="pyramid">
        <ul className ="moneylist">
          {moneyPyramid.map((m)=>(
          // eslint-disable-next-line react/jsx-key
          <li className ={questionNumber === m.id ?"moneyListItem active" : "moneyListItem "}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
         </ul>
      </div>
</div>

    
  )
}

export default App
