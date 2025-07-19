import React, { useEffect, useState } from "react"
import {
    Carousel,
    CarouselContent,
    //CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import QuestionCard from "./QuestionCard"
import { useNavigate } from "react-router-dom"
import type { question } from "@/types/types";
//import { get } from "http"


//This will store the questions with the response property
//the response property determines whether the question was answered or not
// let unansweredQuestionss: question[] = [
//     {
//         question_num: 1,
//         answer_num: 1,
//         answer: ["Debsneho", "Einstein", "Newton", "Hitler"],
//         question: "Who has the highest IQ?",

//     },
//     {
//         question_num: 2,
//         answer_num: 3,
//         answer: ["Black", "Red", "Blue", "White"],
//         question: "What's the best colour?"
//     },
//     {
//         question_num: 3,
//         answer_num: 4,
//         answer: ["I am wrong", "1 is wrong", "2 is correct", "None of the Above"],
//         question: "Which is correct?"
//     }
// ]


const QuestionBlock = () => {
    const navigate = useNavigate()
    //set this when app loads
    //we  have used this as a state instead of raw array
    const [questions, setQuestion] = useState<question[]>([])
    const [unansweredQuestionss, setUnansweredQuestions] = useState<question[]>([])
    //this state stores if all q are answered which can be used to hide button submit
    const [isAllQuestionAnswered, setAllQuestionsAnswered] = useState<boolean>(false);
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch(`/questions`)
                const data = await res.json()
                setQuestion(data)
                setUnansweredQuestions(data)
            } catch (err) {
                console.log(err)
            }
        }
        getQuestions();
    }, [])

    const handleAnswerChange = (num: number, answer_num: number) => {
        //get thhe prevous array 
        //compare if its the one answerer
        //update response
        setQuestion((prev) =>
            prev.map((q) =>
                q.question_num === num ? { ...q, response_num: answer_num } : q
            )
        );
        console.log(questions)
    }
    //listen to any questions being answered and react the changes to is Answered
    useEffect(() => {
        setAllQuestionsAnswered(questions.every(question => question.response_num));
        //effect is executed when questions change
    }, [questions])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        //dont allow user to submit if he didnt answer
        if (!isAllQuestionAnswered) return;
        navigate('/result', { state: { questions } })
        setQuestion(unansweredQuestionss.map(q => ({ ...q })));

    }
    return (
        <div>
            <Carousel className="w-full max-w-xs">
                <span className="mx-4 text-gray-900 opacity-50 text-sm md:hidden ">
                    Please swipe for next question
                </span>
                <CarouselContent>
                    {questions.map((question_obj, i) => (
                        <QuestionCard key={i} onAnswerChange={handleAnswerChange} num={question_obj.question_num} question={question_obj.question} answer={question_obj.answer} />
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:block" />
                <CarouselNext className="hidden md:block" />
            </Carousel>
            <form action="">
                {/* conditional rendering */}
                <Button className={`mx-2 opacity-${isAllQuestionAnswered ? "100" : "30"}`} onClick={(e) => handleSubmit(e)}>Submit</Button>
            </form>
        </div>
    )
}

export default QuestionBlock

