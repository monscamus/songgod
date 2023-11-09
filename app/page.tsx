'use client'

import React from 'react';
import db from "./db.json";

interface IQuestion {
  questionIndex: number,
  text: string,
  answer: string,
  show: boolean
}

export default function Home() {
  const [questions, setQuestions] = React.useState(Array<IQuestion>)

  function makeQuestion(source: any, index: number) : IQuestion {
    const format = Math.floor(Math.random() * 3)
    if(format===0)  return {
      questionIndex: index,
      text: `Question ${index + 1}, ${source?.Artist} had a hit in ${source?.Release} with which song?`,
      answer: source.Title ,
      show: false
    };
    else if(format===1)  return {
      questionIndex: index,
      text: `Question ${index + 1}, ${source?.Title} was a hit in ${source?.Release} for who?`,
      answer: source?.Artist ,
      show: false
    };

    else if(format===2)  return {
      questionIndex: index,
      text: `Question ${index + 1}, Which year did ${source?.Title} by ${source.Artist} hit the charts?`,
      answer: source?.Release,
      show: false
    };
    return {
      questionIndex: index,
      text: `Question ${index + 1}, ${source?.Title} ${source?.Artist} ${source?.Release}`,
      answer: source.Title ,
      show: false
    };
  }

  const create = () => {
    const count: number = db.length;
    const quiz = new Array<IQuestion>();
    for(let i=0; i<10; i++) {
      const index = Math.floor(Math.random() *  db.length)
      quiz.push(makeQuestion(db[index], i))
    }
    console.log(quiz)
    setQuestions(quiz);
  }



  return (
    <div className="flex flex-col content-center justify-center p-6">
        <span className="font-mono text-2xl sm:text-5xl md:text-7xl">
          Song God
        </span>

      <div className="flex flex-col content-center justify-center items-center pt-8">
        <h1 className="font-mono italic text-3xl pb-4">Make a Round</h1>


        <div className="md:max-w-screen-md">
          <p className="p-4">
            Song God makes the most fiendish music quizes based on song information from the years 1970 up to 1999.
            <button className="border-2 rounded-md border-solid px-2 ml-4" onClick={create}>Create</button>
          </p>

          
          <div>
            {questions.map((q, index) => <div key={index} className='p-0'>
                <div  className='p-0'>{q?.text}</div>
                {q.show ? <div className='p-0 text-red-400'>{q.answer}</div> : <button className="border-2 rounded-md border-solid px-2" onClick={()=>{setQuestions(questions.map(uq => q.questionIndex === uq.questionIndex ? {...uq, show: true } : uq ))}} >Show</button>}
              </div>)}
          </div>
        
        </div>
      </div>
    </div>
  );
}
