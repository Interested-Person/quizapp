////        IMPORTS        /////
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; dotenv.config(); // TypeScript
import { question } from './types/types';
import path from 'path';

////        VARIABLES        ////
const app = express();
const PORT = process.env.PORT || 3000;

const questions: question[] = [
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
    },
    {
        question_num: 4,
        answer_num: 2,
        answer: ["Banana", "Pineapple", "Apple", "Orange"],
        question: "Which fruit has a spiky exterior?"
    },
    {
        question_num: 5,
        answer_num: 3,
        answer: ["Dog", "Cat", "Dolphin", "Elephant"],
        question: "Which animal is known for its intelligence and lives in the ocean?"
    },
    {
        question_num: 6,
        answer_num: 1,
        answer: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        question: "What is the highest mountain in the world?"
    },
    {
        question_num: 7,
        answer_num: 4,
        answer: ["Venus", "Mars", "Jupiter", "Saturn"],
        question: "Which planet is famous for its rings?"
    },
    {
        question_num: 8,
        answer_num: 2,
        answer: ["Pizza", "Sushi", "Burger", "Pasta"],
        question: "Which of these is a traditional Japanese dish?"
    }
]

app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors())
app.get('/questions', (req, res) => {
    res.json(questions)
})
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'))
// }) //THIS BREAKS THE CODE FOR SOME REASON... BUT THE REACT APP IS SERVED WITHOUT NEEDING THIS, WHY???


app.listen(PORT, () => {
    console.log(`Example app listening on PORTTTTTTT ${PORT}`)
})
