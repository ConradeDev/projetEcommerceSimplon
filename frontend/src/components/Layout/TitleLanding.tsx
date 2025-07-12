import React, { useState, useEffect, useRef } from 'react';

interface TitleProp {
    title: string;
}

const TypingAnimation: React.FC<TitleProp> = ({title}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const textArray = [title];
    const typedDelay = 50;
    const erasingDelay = 500;
    const newTextDelay = 100;

    const [typedText, setTypedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (textArray.length) {
            timeoutRef.current = setTimeout(() => {
                type();
            }, newTextDelay + 250);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isTyping) {
            if (charIndex < textArray[textArrayIndex].length) {
                timeoutRef.current = setTimeout(() => {
                    setTypedText(prev => prev + textArray[textArrayIndex].charAt(charIndex));
                    setCharIndex(prev => prev + 1);
                }, typedDelay);
            } else {
                setIsTyping(false);
                timeoutRef.current = setTimeout(() => {
                    erase();
                }, newTextDelay);
            }
        } else {
            if (charIndex > 0) {
                timeoutRef.current = setTimeout(() => {
                    setTypedText(textArray[textArrayIndex].substring(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                }, erasingDelay);
            } else {
                setIsTyping(true);
                setTextArrayIndex(prev => (prev + 1) % textArray.length);
                timeoutRef.current = setTimeout(() => {
                    type();
                }, typedDelay + 1100);
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [charIndex, textArrayIndex, isTyping, textArray]);

    const type = () => {
        setIsTyping(true);
    };

    const erase = () => {
        setIsTyping(false);
    };

    return (
        <>
            {typedText}
            <span className={`cursor ${isTyping ? 'typing' : ''}`}>&nbsp;</span>
        </>
    );
};

const TitleLanding: React.FC<TitleProp> = ({ title }) => {
    return (
        <div className="typed-text">
            <TypingAnimation title={title} />
        </div>
    );
};

export default TitleLanding;