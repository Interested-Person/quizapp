import React from "react"
import {
    Carousel,
    CarouselContent,
    //CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
//import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import QuestionCard from "./QuestionCard"
import { useNavigate } from "react-router-dom"
import type { question } from "@/types/types";



let questions: question[] = [
    {
        question_num: 1,
        answer_num: 1,
        answer: ["Debsneho", "Einstein", "Newton", "Hitler"],
        question: "Who has the highest IQ?",

    },
    {
        question_num: 2,
        answer_num: 3,
        answer: ["Black", "Red", "Blue", "White"],
        question: "What's the best colour?"
    },
    {
        question_num: 3,
        answer_num: 4,
        answer: ["I am wrong", "1 is wrong", "2 is correct", "None of the Above"],
        question: "Which is correct?"
    }
]


const QuestionBlock = () => {
    const navigate = useNavigate()
    const handleAnswerChange = (num: number, answer_num: number) => {
        questions[num - 1].response_num = answer_num
        console.log(questions)

    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/result', { state: { questions } })

    }
    return (
        <div>
            <Carousel className="w-full max-w-xs">
                <span className="mx-4 text-gray-900 opacity-50 text-sm md:hidden ">
                    Please swipe for next question
                </span>
                <CarouselContent>
                    {questions.map((question_obj) => (
                        <QuestionCard onAnswerChange={handleAnswerChange} num={question_obj.question_num} question={question_obj.question} answer={question_obj.answer} />
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:block"/>
                <CarouselNext  className="hidden md:block"/>
            </Carousel>
            <form action="">
                <Button className="mx-2" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </form>
        </div>
    )
}

export default QuestionBlock