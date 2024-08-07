import { useState, useEffect } from "react";

export default function AnimatedContent() {
    const [step, setStep] = useState(0);
    const messages = [
        { text: "Welcome to My Portfolio!", className: "text-red-500" },
        { text: "Discover My Projects...", className: "text-blue-500" },
        { text: "Learn About My Journey...", className: "text-green-500" },
        { text: "Let's Connect!", className: "text-yellow-500" },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStep((currentStep) => {
                if (currentStep < messages.length - 1) {
                    return currentStep + 1;
                }
                clearInterval(intervalId);
                return currentStep;
            });
        }, 800);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-start mt-20 m-10">
            {messages.slice(0, step + 1).map((message, index) => (
                <p key={index} className={`text-xl mb-4 slide-in ${message.className}`}>
                    {message.text}
                </p>
            ))}
        </div>
    );
}
