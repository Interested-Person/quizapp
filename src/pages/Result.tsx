//import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { question } from "@/types/types";
import tick from "@/assets/tick.svg"
import cross from "@/assets/cross.svg"
import { Button } from "@/components/ui/button";
const Result = () => {
    const location = useLocation()
    const { questions } = location.state
    const navigate = useNavigate()
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
        <div className="bg-amber-50 p-4 h-[calc(100vh-4rem)]">
            <p className="text-2xl">So... here's how you did.</p>
            <br />
            <div>
                {questions.map((question_ob: question, index: number) => (
                    question_ob.response_num == question_ob.answer_num ? (<div className="flex">Question  {question_ob.question_num}    is correct
                        <img
                            className="w-4 mx-[1.36rem] animate-bounce"
                            style={{ animationDelay: `${index * 50}ms` }}
                            src={tick} /></div>)
                        : (<div className="flex">Question   {question_ob.question_num}   is incorrect
                            <img key={index}
                                className="w-4 mx-2 animate-bounce"
                                style={{ animationDelay: `${index * 50}ms` }}
                                src={cross} /></div>)
                ))}
            </div>
            <br />
            <p className="text-2xl text-bold">You scored {c} out of {questions.length}</p>
            <Button onClick={() => { navigate(-1) }}>Go back</Button>

        </div>
    )
}


export default Result