"use client";

import { useEffect, useState } from "react";

const heroMessages = [
  {
    heading: "Know the car before you make it yours.",
    description: "Get an expert pre-delivery inspection before you commit.",
  },
  {
    heading: "Confidence belongs in the driver's seat.",
    description: "Understand the car's condition before the keys are in your hands.",
  },
  {
    heading: "Your next drive starts with a better decision.",
    description: "Find the right support for inspection and car finance with Car Mitra.",
  },
  {
    heading: "A clearer view. A smoother journey.",
    description: "Get straightforward guidance at every step of your car purchase.",
  },
];

export default function HeroQuoteSlider() {
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveQuote((current) => (current + 1) % heroMessages.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentQuote = heroMessages[activeQuote];

  return (
    <div
      className="quote-slider"
      role="region"
      aria-label="Car Mitra messages"
      aria-roledescription="carousel"
    >
      <p className="hero-eyebrow">Confidence, before the keys</p>
      <div
        className="quote-slide"
        key={activeQuote}
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeQuote + 1} of ${heroMessages.length}`}
        aria-live="off"
      >
        <h1 id="hero-title">{currentQuote.heading}</h1>
        <p className="hero-description">{currentQuote.description}</p>
      </div>
    </div>
  );
}