import React, { useEffect, useState } from 'react'
import Quiz from './Quiz';

const Home = () => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    const handleEnterFullScreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    };
    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(document.fullscreenElement !== null);
        };
        document.addEventListener('fullscreenchange', handleFullScreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, []);
    return (
        <div>
            {
                isFullScreen ? <Quiz /> :
                    <div className='flex justify-center items-center h-screen'>
                        <button className='font-semibold text-3xl font-mono hover:bg-slate-300 p-5 rounded-lg' onClick={handleEnterFullScreen}>for Quiz Click here</button>
                    </div>
            }
        </div>
    )
}

export default Home
