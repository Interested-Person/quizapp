import React from "react";
import {
    //Carousel,
    //CarouselContent,
    CarouselItem,
    //CarouselNext,
    //CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


type QuestionCardProps = {
    num: number,
    question: string,
    answer: string[],
    onAnswerChange: (num: number, answer_num: number) => void

}
const QuestionCard = ({ num, question, answer, onAnswerChange }: QuestionCardProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: number = parseInt(e.target.value)
        console.log(e.target.value)
        onAnswerChange(num, value)
    }
    return (
        <>
            <CarouselItem key={1}>
                <div className="p-1">
                    <Card>
                        <CardContent className="flex-col aspect-square items-center justify-center p-6">
                            <p className="text-4xl font-semibold">{num}.</p>
                            <p className="text-4xl font-semibold">{question}</p>
                            <br />
                            {/* <p className="text-4xl font-semibold">{answer}</p> */}
                            <form>
                                <label >{`${answer[0]}  `}</label>
                                <input type="radio" name="options" value="1" onChange={(e) => { handleChange(e) }} />
                                <br />
                                <label >{`${answer[1]}  `}</label>
                                <input type="radio" name="options" value="2" onChange={(e) => { handleChange(e) }} />
                                <br />
                                <label >{`${answer[2]}  `}</label>
                                <input type="radio" name="options" value="3" onChange={(e) => { handleChange(e) }} />
                                <br />
                                <label >{`${answer[3]}  `}</label>
                                <input type="radio" name="options" value="4" onChange={(e) => { handleChange(e) }} />

                            </form>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </>
    )
};

export default QuestionCard;