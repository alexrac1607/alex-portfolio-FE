import { useState, useEffect } from "react";

export default function AnimatedContent() {
  const [step, setStep] = useState(0);
  const messages = [
    {
      text: "Welcome to My Portfolio!",
      className: "text-3xl md:text-5xl mt-6 mb-4",
    },
    {
      text: "I'm Alex, nice to meet you.",
      className: "text-bold text-2xl md:text-4xl mt-6 mb-4",
    },
    {
      text: "I'm a Software Developer from Romania - learn more about me ",
      link: { url: "/about", text: "here" },
      className: "text-xl md:text-3xl mt-6 mb-4",
    },
    {
      text: "On this page you can see my projects, however fresh or old they might be. You can also see my thoughts if I'm ever in the mood for blogging.",
      className: "text-xl md:text-3xl mt-6 mb-4",
    },
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
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-8 pt-8 md:py-24">
      {messages.slice(0, step + 1).map((message, index) => (
        <p key={index} className={`mb-4 slide-in ${message.className}`}>
          {message.text}
          {message.link && (
            <>
              <a
                href={message.link.url}
                className="text-black font-bold no-underline link"
              >
                {message.link.text}
              </a>
              <span>.</span>
            </>
          )}
        </p>
      ))}
    </div>
  );
}
