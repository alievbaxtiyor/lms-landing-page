'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

export interface TimeStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const TimeStackItem: React.FC<TimeStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`time-stack-card relative w-full rounded-3xl shadow-2xl border-4 border-white box-border origin-center will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

interface TimeStackProps {
  className?: string;
  children: ReactNode;
  interval?: number; // milliseconds
  itemScale?: number;
  itemStackDistance?: number;
  rotationAmount?: number;
  blurAmount?: number;
  baseScale?: number;
  transitionDuration?: number; // milliseconds
  onStackComplete?: () => void;
}

const TimeStack: React.FC<TimeStackProps> = ({
  children,
  className = '',
  interval = 2000,
  itemScale = 0.05,
  itemStackDistance = 48,
  rotationAmount = 6,
  blurAmount = 2,
  baseScale = 0.85,
  transitionDuration = 1000,
  onStackComplete
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<HTMLElement[]>([]);
  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll('.time-stack-card')
    ) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.willChange = 'transform, filter, opacity';
      card.style.transformOrigin = 'center center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transition = `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    });
  }, [transitionDuration]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, totalCards]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Calculate position relative to active card
      let position = (i - activeIndex + totalCards) % totalCards;

      // Keep positions in range [0, totalCards-1]
      if (position >= totalCards) position -= totalCards;

      const isActive = position === 0;
      const isSecond = position === 1;
      const depthInStack = position;

      // Calculate transforms - HORIZONTAL layout (like video thumbnail preview)
      const targetScale = isActive ? 1 : isSecond ? 0.97 : baseScale - (depthInStack - 2) * itemScale;
      const scale = Math.max(0.85, targetScale);

      const translateX = depthInStack * itemStackDistance; // Horizontal movement (RIGHT)
      const translateY = depthInStack * (itemStackDistance * 0.15); // Minimal vertical offset
      const rotation = depthInStack * rotationAmount;

      // First two cards are clear (no blur), third slightly blurred
      const blur = (isActive || isSecond) ? 0 : Math.min((depthInStack - 1) * blurAmount, 2);

      // Keep first 3 cards very visible
      const opacity = isActive ? 1 : isSecond ? 0.98 : position === 2 ? 0.90 : Math.max(0.5, 1 - depthInStack * 0.15);

      // Calculate z-index (active on top)
      const zIndex = totalCards - position;

      const transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur > 0 ? `blur(${blur}px)` : '';

      card.style.transform = transform;
      card.style.filter = filter;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${zIndex}`;

      // Callback when stack completes full rotation
      if (i === totalCards - 1 && position === 0) {
        onStackComplete?.();
      }
    });
  }, [activeIndex, totalCards, itemScale, itemStackDistance, rotationAmount, blurAmount, baseScale, onStackComplete]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`.trim()}>
      <div className="relative w-full h-[600px] flex items-center">
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full flex items-center"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '2000px'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeStack;
