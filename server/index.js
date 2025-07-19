"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
////        IMPORTS        /////
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // TypeScript
const path_1 = __importDefault(require("path"));
////        VARIABLES        ////
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const questions = [
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
];
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use((0, cors_1.default)());
app.get('/questions', (req, res) => {
    res.json(questions);
});
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'))
// }) //THIS BREAKS THE CODE FOR SOME REASON... BUT THE REACT APP IS SERVED WITHOUT NEEDING THIS, WHY???
app.listen(PORT, () => {
    console.log(`Example app listening on PORTTTTTTT ${PORT}`);
});
