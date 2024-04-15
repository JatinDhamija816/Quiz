import React, { useEffect, useState } from 'react'
import Quiz from './Quiz';

const Home = () => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(document.fullscreenElement !== null);
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, []);
    const handleEnterFullScreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    };
    return (
        <div>
            {
                !isFullScreen
                    ?
                    <div className='flex justify-center items-center h-screen'>
                        <button className='font-bold text-3xl hover:bg-slate-500 p-5 rounded-lg hover:text-white' onClick={handleEnterFullScreen}>Enter Full Screen to Enable Form</button>
                    </div>
                    :

                    <Quiz />
            }
        </div>
    )
}

export default Home
