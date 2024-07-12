// src/Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 150, interval = 3000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const intervalTimeout = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, interval);
            return () => clearTimeout(intervalTimeout);
        }
    }, [charIndex, textIndex, texts, speed, interval]);

    return (
        <span className="typewriter  text-[#42aefc]">
            {displayedText}
        </span>
    );
};

export default Typewriter;