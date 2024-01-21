'use client'
import React, { useEffect, useRef } from 'react';

const DynamicText = ({ text } : { text: string }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const adjustTextSize = () => {
            if (textRef.current) {
                const containerWidth = textRef.current.offsetWidth;
                const desiredFontSize = containerWidth / 2.9; // Adjust this ratio as needed
                textRef.current.style.fontSize = `${desiredFontSize}px`;
            }
        };

        // Adjust the text size initially and on window resize
        adjustTextSize();
        window.addEventListener('resize', adjustTextSize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', adjustTextSize);
        };
    });

    return (
        <div ref={textRef} className="w-full overflow-hidden whitespace-nowrap">
            {text}
        </div>
    );
};

export default DynamicText;