import { useEffect, useRef } from 'react';

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ['249 146 253', '252 254 255'],
  sizes: ['0.7rem', '1rem', '0.2rem'],
  animations: ['fall-1', 'fall-2', 'fall-3'],
};

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const selectRandom = <T,>(items: T[]): T => items[rand(0, items.length - 1)];
const px = (value: number) => `${value}px`;
const ms = (value: number) => `${value}ms`;

const calcDistance = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const diffX = b.x - a.x;
  const diffY = b.y - a.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

export default function CursorStars() {
  const lastRef = useRef({
    starTimestamp: Date.now(),
    starPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
  });
  const countRef = useRef(0);

  useEffect(() => {
    const originPosition = { x: 0, y: 0 };
    const last = lastRef.current;

    const removeElement = (element: Element, delay: number) =>
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, delay);

    const createStar = (position: { x: number; y: number }) => {
      const star = document.createElement('span');
      const color = selectRandom(config.colors);

      star.className = 'cursor-star';
      star.innerHTML = '✦';
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0 0 1.5rem rgba(${color.replace(' ', ', ')}, 0.5)`;
      star.style.animationName = config.animations[countRef.current++ % 3];
      star.style.animationDuration = ms(config.starAnimationDuration);

      document.body.appendChild(star);
      removeElement(star, config.starAnimationDuration);
    };

    const createGlowPoint = (position: { x: number; y: number }) => {
      const glow = document.createElement('div');
      glow.className = 'glow-point';
      glow.style.left = px(position.x);
      glow.style.top = px(position.y);
      document.body.appendChild(glow);
      removeElement(glow, config.glowDuration);
    };

    const determinePointQuantity = (distance: number) =>
      Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

    const createGlow = (
      from: { x: number; y: number },
      to: { x: number; y: number }
    ) => {
      const distance = calcDistance(from, to);
      const quantity = determinePointQuantity(distance);
      const dx = (to.x - from.x) / quantity;
      const dy = (to.y - from.y) / quantity;

      for (let index = 0; index < quantity; index++) {
        const x = from.x + dx * index;
        const y = from.y + dy * index;
        createGlowPoint({ x, y });
      }
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const mousePosition = { x: clientX, y: clientY };

      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = mousePosition;
      }

      const now = Date.now();
      const hasMovedFarEnough =
        calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
      const hasBeenLongEnough = now - last.starTimestamp > config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        last.starTimestamp = now;
        last.starPosition = mousePosition;
      }

      createGlow(last.mousePosition, mousePosition);
      last.mousePosition = mousePosition;
    };

    const onMouseLeave = () => {
      last.mousePosition = originPosition;
    };

    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', handleOnMove as EventListener, { passive: true });
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove as EventListener);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return null;
}
