"use client";
import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void; // Optional function to handle click events
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] md:w-60 md:mt-10" // Attach the handleClick function to the button's onClick event
      onClick={handleClick}
      >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fffccb_0%,#ff3e71_50%,#fff8d0_100%)]"
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-pink-100 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
