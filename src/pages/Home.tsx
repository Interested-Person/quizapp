//import React, { useState } from 'react'
import QuestionBlock from './QuestionBlock'

const Home = () => {
    return (

        <div
            className='bg-amber-50  h-[calc(100vh-4rem)]'>
            <div
                className=' flex h-full w-full items-center justify-center'
            >
                <QuestionBlock  />
            </div>
        </div>
    )
}

export default Home