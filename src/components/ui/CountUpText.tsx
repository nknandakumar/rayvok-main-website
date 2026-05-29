'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CountUpTextProps {
  value: string;
  duration?: number; // duration in ms
}

export default function CountUpText({ value, duration = 2500 }: CountUpTextProps) {
  const { prefix, number, suffix, decimals } = parseMetric(value);
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let exitedToTop = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!exitedToTop) {
            // Entered from the bottom of viewport (user scrolling DOWN) -> Animate!
            setIsInView(true);
          } else {
            // Entered from the top of viewport (user scrolling UP) -> Show final value instantly
            setDisplayValue(number);
          }
        } else {
          // Out of view
          setIsInView(false);
          if (entry.boundingClientRect.top < 0) {
            // Exited through the top of the viewport (user scrolled down past it)
            exitedToTop = true;
            setDisplayValue(number); // Keep completed number visible while scrolled below
          } else {
            // Exited through the bottom of the viewport (user scrolled up past it to the top)
            exitedToTop = false;
            setDisplayValue(0); // Reset to 0 so it's ready to count up again on next scroll down
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [number]);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentNumber = progress * number;
      setDisplayValue(currentNumber);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, number, duration]);

  // Format the displayed number
  const formattedNumber = displayValue.toFixed(decimals);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

function parseMetric(value: string) {
  // Regex to match prefix (optional + or -), number (integer or decimal), and suffix (optional word/symbol)
  const regex = /^(\+|-)?(\d+(?:\.\d+)?)(.*)$/;
  const match = value.match(regex);
  if (match) {
    return {
      prefix: match[1] || '',
      number: parseFloat(match[2]),
      suffix: match[3] || '',
      decimals: match[2].includes('.') ? match[2].split('.')[1].length : 0
    };
  }
  return { prefix: '', number: 0, suffix: value, decimals: 0 };
}
