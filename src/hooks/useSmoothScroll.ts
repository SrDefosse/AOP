import { useEffect, useRef } from 'react';

const useSmoothScroll = (): void => {
  const targetScrollY = useRef<number>(window.scrollY);
  const currentScrollY = useRef<number>(window.scrollY);
  const ticking = useRef<boolean>(false);
  const initialTouchY = useRef<number>(0);

  useEffect(() => {
    const smoothScroll = (): void => {
      currentScrollY.current += (targetScrollY.current - currentScrollY.current) * 0.1;
      
      window.scrollTo(0, currentScrollY.current);

      if (Math.abs(targetScrollY.current - currentScrollY.current) > 0.5) {
        requestAnimationFrame(smoothScroll);
      } else {
        window.scrollTo(0, targetScrollY.current);
        currentScrollY.current = targetScrollY.current;
        ticking.current = false;
      }
    };

    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();
      targetScrollY.current += e.deltaY;
      // Clamp the target scroll to the document boundaries
      targetScrollY.current = Math.max(0, Math.min(targetScrollY.current, document.body.scrollHeight - window.innerHeight));
      
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(smoothScroll);
      }
    };

    const handleTouchStart = (e: TouchEvent): void => {
        initialTouchY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent): void => {
        e.preventDefault();
        const currentTouchY = e.touches[0].clientY;
        const deltaY = initialTouchY.current - currentTouchY;
        initialTouchY.current = currentTouchY;

        targetScrollY.current += deltaY;
        targetScrollY.current = Math.max(0, Math.min(targetScrollY.current, document.body.scrollHeight - window.innerHeight));

        if (!ticking.current) {
            ticking.current = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
};

export default useSmoothScroll;
