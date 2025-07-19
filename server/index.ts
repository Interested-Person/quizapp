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
    },
    {
        question_num: 9,
        answer_num: 3,
        answer: ["Nile", "Amazon", "Yangtze", "Ganges"],
        question: "Which is the longest river in Asia?"
    },
    {
        question_num: 10,
        answer_num: 1,
        answer: ["Photosynthesis", "Respiration", "Digestion", "Evaporation"],
        question: "What process do plants use to make food?"
    },
    {
        question_num: 11,
        answer_num: 2,
        answer: ["Mercury", "Venus", "Earth", "Mars"],
        question: "Which planet is closest to the sun?"
    },
    {
        question_num: 12,
        answer_num: 4,
        answer: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"],
        question: "Which gas do plants absorb from the atmosphere?"
    },
    {
        question_num: 13,
        answer_num: 2,
        answer: ["Asia", "Africa", "Europe", "Australia"],
        question: "Which continent is the Sahara Desert located in?"
    },
    {
        question_num: 14,
        answer_num: 3,
        answer: ["Dog", "Whale", "Bat", "Penguin"],
        question: "Which of these mammals can fly?"
    },
    {
        question_num: 15,
        answer_num: 4,
        answer: ["Shakespeare", "Tolstoy", "Hemingway", "J.K. Rowling"],
        question: "Who wrote the Harry Potter series?"
    },
    {
        question_num: 16,
        answer_num: 1,
        answer: ["H2O", "CO2", "NaCl", "O2"],
        question: "What is the chemical formula for water?"
    },
    {
        question_num: 17,
        answer_num: 2,
        answer: ["Cheetah", "Tiger", "Leopard", "Lion"],
        question: "Which big cat is known for its speed?"
    },
    {
        question_num: 18,
        answer_num: 3,
        answer: ["Earth", "Saturn", "Mars", "Neptune"],
        question: "Which planet is known as the Red Planet?"
    },
    {
        question_num: 19,
        answer_num: 4,
        answer: ["Beethoven", "Mozart", "Bach", "Tchaikovsky"],
        question: "Who composed the Nutcracker?"
    },
    {
        question_num: 20,
        answer_num: 1,
        answer: ["Tokyo", "Delhi", "New York", "London"],
        question: "Which city has the highest population in the world?"
    },
    {
        question_num: 21,
        answer_num: 3,
        answer: ["Cricket", "Football", "Basketball", "Tennis"],
        question: "Which sport uses a hoop?"
    },
    {
        question_num: 22,
        answer_num: 4,
        answer: ["Mercury", "Venus", "Earth", "Mars"],
        question: "Which planet is fourth from the Sun?"
    },
    {
        question_num: 23,
        answer_num: 2,
        answer: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "1,000 km/s"],
        question: "What is the approximate speed of light?"
    },
    {
        question_num: 24,
        answer_num: 1,
        answer: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
        question: "Which element is the basis of all life?"
    },
    {
        question_num: 25,
        answer_num: 4,
        answer: ["Guitar", "Drums", "Flute", "Piano"],
        question: "Which instrument has keys and strings?"
    },
    {
        question_num: 26,
        answer_num: 2,
        answer: ["Atlantic", "Pacific", "Indian", "Arctic"],
        question: "Which is the largest ocean on Earth?"
    },
    {
        question_num: 27,
        answer_num: 3,
        answer: ["Asia", "Europe", "Antarctica", "Africa"],
        question: "Which continent has no permanent residents?"
    },
    {
        question_num: 28,
        answer_num: 1,
        answer: ["Amazon", "Nile", "Ganges", "Thames"],
        question: "Which is the largest rainforest in the world?"
    },
    {
        question_num: 29,
        answer_num: 2,
        answer: ["Ice", "Steam", "Water", "Snow"],
        question: "What is water in gas form called?"
    },
    {
        question_num: 30,
        answer_num: 3,
        answer: ["Saturn", "Venus", "Uranus", "Neptune"],
        question: "Which planet rotates on its side?"
    },
    {
        question_num: 31,
        answer_num: 4,
        answer: ["Gold", "Copper", "Iron", "Silver"],
        question: "Which metal has the chemical symbol Ag?"
    },
    {
        question_num: 32,
        answer_num: 1,
        answer: ["Blue Whale", "Shark", "Octopus", "Seal"],
        question: "What is the largest animal on Earth?"
    },
    {
        question_num: 33,
        answer_num: 2,
        answer: ["Berlin", "Paris", "Madrid", "Lisbon"],
        question: "What is the capital of France?"
    },
    {
        question_num: 34,
        answer_num: 3,
        answer: ["Asia", "Australia", "Africa", "South America"],
        question: "Which continent is known for its wildlife safaris?"
    },
    {
        question_num: 35,
        answer_num: 4,
        answer: ["Leonardo", "Picasso", "Van Gogh", "Michelangelo"],
        question: "Who painted the ceiling of the Sistine Chapel?"
    },
    {
        question_num: 36,
        answer_num: 1,
        answer: ["Jupiter", "Earth", "Neptune", "Mars"],
        question: "Which is the largest planet in our solar system?"
    },
    {
        question_num: 37,
        answer_num: 2,
        answer: ["Metal", "Glass", "Wood", "Stone"],
        question: "Which of these is most commonly used in windows?"
    },
    {
        question_num: 38,
        answer_num: 3,
        answer: ["Carbon Dioxide", "Hydrogen", "Oxygen", "Helium"],
        question: "Which gas do humans breathe in to survive?"
    },
    {
        question_num: 39,
        answer_num: 4,
        answer: ["Eagle", "Penguin", "Ostrich", "Dodo"],
        question: "Which of these birds is extinct?"
    },
    {
        question_num: 40,
        answer_num: 1,
        answer: ["Moon", "Mars", "Venus", "Jupiter"],
        question: "Which celestial body has been visited by humans?"
    },
    {
        question_num: 41,
        answer_num: 2,
        answer: ["Lead", "Iron", "Mercury", "Zinc"],
        question: "Which metal is liquid at room temperature?"
    },
    {
        question_num: 42,
        answer_num: 3,
        answer: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
        question: "What do we call rain, snow, or hail falling from the sky?"
    },
    {
        question_num: 43,
        answer_num: 4,
        answer: ["Octagon", "Hexagon", "Pentagon", "Heptagon"],
        question: "Which shape has 7 sides?"
    },
    {
        question_num: 44,
        answer_num: 1,
        answer: ["Asia", "Africa", "Europe", "Antarctica"],
        question: "Which continent is the largest by area?"
    },
    {
        question_num: 45,
        answer_num: 2,
        answer: ["Lion", "Elephant", "Tiger", "Leopard"],
        question: "Which is the largest land animal?"
    },
    {
        question_num: 46,
        answer_num: 3,
        answer: ["New York", "Beijing", "London", "Tokyo"],
        question: "What is the capital of the UK?"
    },
    {
        question_num: 47,
        answer_num: 4,
        answer: ["Tesla", "Edison", "Einstein", "Newton"],
        question: "Who formulated the laws of motion?"
    },
    {
        question_num: 48,
        answer_num: 1,
        answer: ["Jellyfish", "Octopus", "Starfish", "Seahorse"],
        question: "Which sea creature has no brain or heart?"
    },
    {
        question_num: 49,
        answer_num: 2,
        answer: ["Copper", "Aluminum", "Iron", "Silver"],
        question: "Which metal is best known for conducting electricity?"
    },
    {
        question_num: 50,
        answer_num: 3,
        answer: ["2", "3", "4", "5"],
        question: "How many legs does a chair usually have?"
    },
    {
        question_num: 51,
        answer_num: 4,
        answer: ["India", "China", "USA", "Brazil"],
        question: "Which country is famous for the Amazon rainforest?"
    },
    {
        question_num: 52,
        answer_num: 1,
        answer: ["Gravity", "Inertia", "Magnetism", "Friction"],
        question: "What force pulls objects toward Earth?"
    },
    {
        question_num: 53,
        answer_num: 2,
        answer: ["Venus", "Mercury", "Mars", "Earth"],
        question: "Which is the hottest planet in the solar system?"
    },
    {
        question_num: 54,
        answer_num: 3,
        answer: ["Tiger", "Lion", "Polar Bear", "Wolf"],
        question: "Which of these animals lives in the Arctic?"
    },
    {
        question_num: 55,
        answer_num: 4,
        answer: ["Triangle", "Square", "Circle", "Rectangle"],
        question: "Which shape has four sides of unequal length?"
    },
    {
        question_num: 56,
        answer_num: 1,
        answer: ["HTML", "CSS", "JS", "SQL"],
        question: "Which language is used to structure web pages?"
    },
    {
        question_num: 57,
        answer_num: 2,
        answer: ["Android", "iOS", "Windows", "Linux"],
        question: "Which operating system is made by Apple?"
    },
    {
        question_num: 58,
        answer_num: 3,
        answer: ["Byte", "Bit", "Gigabyte", "Megabyte"],
        question: "Which is the largest unit of storage?"
    }
]
function getRandomQuestions(questions: question[]): question[] {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}


app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors())
app.get('/questions', (req, res) => {
    const randomThree = getRandomQuestions(questions);
    let i = 1;
    randomThree.forEach(element => {
        element.question_num = i++

    });
    res.json(randomThree)
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})


app.listen(PORT, () => {
    console.log(`Example app listening on POPRTTTTTTT ${PORT}`)
})
