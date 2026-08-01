export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  lock?: boolean;
  onComplete?: () => void;
}

export const useLenis = () => {
  const nuxtApp = useNuxtApp();

  const getLenisInstance = () => {
    return nuxtApp.$lenis || (typeof window !== 'undefined' ? (window as any).$lenis : null);
  };

  const scrollTo = (
    target: string | HTMLElement | number,
    options?: ScrollToOptions
  ) => {
    if (import.meta.server) return;

    const lenis = getLenisInstance();

    let targetElement: HTMLElement | number | null = null;
    if (typeof target === 'string') {
      targetElement = document.querySelector(target) as HTMLElement;
    } else {
      targetElement = target;
    }

    if (lenis && targetElement) {
      lenis.scrollTo(targetElement, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    } else if (targetElement && typeof targetElement !== 'number') {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    scrollTo,
    lenis: getLenisInstance(),
  };
};