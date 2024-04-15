import React from 'react'

function QuizResult({ score, totalScore, tryAgain }) {
    return (
        <>
            <div>
                <div className='m-2'>
                    <span className='font-bold font-mono text-lg'>Your Score: </span><span className='font-medium text-base font-mono'>{score}</span>
                </div>
                <div className='m-2'>
                    <span className='font-bold font-mono text-lg'>Total Score: </span><span className='font-medium text-base font-mono'>{totalScore}</span>
                </div>
                <div className='m-3'>
                    <button className='bg-black text-white px-3 rounded-lg' onClick={tryAgain}>Try Again</button>
                </div>
                <div className='m-3'>
                    <button className='font-medium font-mono text-lg underline' onClick={() => document.exitFullscreen()}>Press Here for Exit</button>
                </div>
            </div>

        </>
    )
}

export default QuizResult