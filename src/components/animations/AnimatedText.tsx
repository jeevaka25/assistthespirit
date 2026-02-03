import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'words' | 'chars' | 'lines';
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function AnimatedText({
  text,
  className = '',
  type = 'words',
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.6,
  as: Component = 'span',
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll('.animated-item');

    gsap.set(elements, { y: 40, opacity: 0, rotateX: 15 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration,
          delay,
          stagger: staggerDelay,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, duration, staggerDelay, prefersReducedMotion]);

  const splitText = () => {
    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span
          key={i}
          className="animated-item inline-block mr-[0.25em]"
          style={{ perspective: '1000px' }}
        >
          {word}
        </span>
      ));
    }
    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          className="animated-item inline-block"
          style={{ perspective: '1000px' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    return text.split('\n').map((line, i) => (
      <span
        key={i}
        className="animated-item block"
        style={{ perspective: '1000px' }}
      >
        {line}
      </span>
    ));
  };

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <div ref={containerRef} className="inline">
      <Component className={className}>{splitText()}</Component>
    </div>
  );
}
