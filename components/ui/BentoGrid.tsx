'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import { LuCopy } from "react-icons/lu";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "karrelyu@outlook.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{  
        background: 'rgb(27,2,37)',
        backgroundColor: 'linear-gradient(90deg, rgba(27,2,37,1) 22%, rgba(17,8,11,1) 77%, rgba(64,4,31,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
              <span className="lg:py-0.5 lg:px-1 rounded-lg text-center bg-[#3C1A35]" />
              <span className="py-4 px-3 rounded-lg text-center bg-[#3C1A35]" />
                {['React.js', 'Next.js', 'Three.js'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base 
                  opacity-50 lg:opacity-60 rounded-lg text-center bg-[#3C1A35]">
                    {item}
                  </span>
                ))}
                
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
              <span className="lg:py-0.5 lg:px-1 rounded-lg text-center bg-[#3C1A35]" />
                <span className="py-4 px-3 rounded-lg text-center bg-[#3C1A35]" />
                {['Firebase', 'Typescript', 'SQL'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base 
                  opacity-50 lg:opacity-60 rounded-lg text-center bg-[#3C1A35]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id == 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings:{
                      preserveAspectRatio: 'xMidYMid slice',
                      }
                    }} />
                 </div>
                 
                 <MagicButton
                   title={copied ? "Email Copied!" : "Copy my email"}
                   icon={<LuCopy />}
                   position="left"
                   handleClick={handleCopy}
                 />
              </div>
          )}
        </div>
      </div>
    </div>
    
  );
};
