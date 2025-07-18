import React from "react";
import { useLocation } from "react-router-dom";
import type { question } from "@/types/types";

const Result = () => {
    const location = useLocation()
    const { questions } = location.state
    console.log(questions)
    let c = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].response_num == questions[i].answer_num) {
            {
                c += 1;
            }
        }
    }
    return (
        <div>
            <h1 className=" text-4xl font-bold underline fade-in">Result</h1>
            <p className="text-2xl">So... here's how you did.</p>
            <br />
            <div>
                {questions.map((question_ob: question) => (
                    question_ob.response_num == question_ob.answer_num ? (<div>Question  {question_ob.question_num}    is correct</div>) : (<div>Question   {question_ob.question_num}   is incorrect</div>)
                ))}
            </div>
            <br />
            <p className="text-2xl text-bold">You scored {c} out of {questions.length}</p>
        </div>
    )
}


export default Result