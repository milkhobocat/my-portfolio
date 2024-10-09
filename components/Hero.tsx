"use client";

import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { PiCatDuotone } from 'react-icons/pi';
import { TextGenerateEffect } from './ui/TextGenerateEffect'; // Import the TextGenerateEffect component

const Hero = () => {
    // Function to handle redirection
    const handleButtonClick = () => {
        window.location.href = "https://github.com/milkhobocat"; //GitHub URL
    };

    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="pink" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-90 right-80 h-[80vh] w-[50vw]" fill="pink" />
            </div>
            <div className="h-screen w-full dark:bg-purple-200 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-pink-500 max-w-80">
                        A Next.js project
                    </h2>
                    {/* using image in hero */}
                    <div className="text-center mb-8">
                        <img 
                            src="/name.png"  // Path to 'public' directory
                            alt="Karrel Uy's Portfolio"
                            className="w-[900vw] md:w-[500vw] lg:w-[200vw] h-auto" 
                        />
                    </div>
                    {/* Use TextGenerateEffect for animation */}
                    <TextGenerateEffect 
                        words="Passionate Software Engineer focused on crafting Dynamic Web Applications"
                        className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
                        filter={false}
                        duration={1}
                    />
                    <MagicButton
                        title="Explore my GitHub"
                        icon={<PiCatDuotone className="text-2xl"/>}
                        position='right'
                        handleClick={handleButtonClick} // Pass the handleClick function
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
