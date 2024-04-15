import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div className='border font-mono w-3/5 mx-auto mt-52 '>
            <div className='mt-5'>
                <p className="font-bold text-3xl text-center">Quiz APP</p>
            </div>
            <div className="text-center ">
                {
                    showResult ? (<QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />) : (
                        <>
                            <div className="m-3 p-2 font-bold text-xl">
                                <span>{currentQuestion + 1}. </span>
                                <span>{QuizData[currentQuestion].question}</span>
                            </div>
                            {
                                QuizData[currentQuestion].options.map((option, i) => (
                                    <div className='border m-3 w-1/3 mx-auto rounded-lg' key={i} >
                                        <button className={`w-full rounded-lg ${clickedOption == i + 1 ? "bg-blue-500 text-white border-none" : null}`} onClick={() => setClickedOption(i + 1)}>
                                            {option}
                                        </button>
                                    </div>
                                ))
                            }
                            <div className='bg-black text-white w-1/5 mx-auto m-5 rounded-lg hover:cursor-pointer'>
                                <input type="button" value="Next" onClick={changeQuestion} className='hover:cursor-pointer' />
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Quiz