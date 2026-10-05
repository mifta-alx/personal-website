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
    return (
      nuxtApp.$lenis ||
      (typeof window !== "undefined" ? (window as any).$lenis : null)
    );
  };

  const scrollTo = (
    target: string | HTMLElement | number,
    options?: ScrollToOptions,
  ) => {
    if (import.meta.server) return;

    const lenis = getLenisInstance();

    if (typeof target === "number") {
      lenis?.scrollTo(target, options);
      return;
    }

    const targetElement =
      typeof target === "string"
        ? (document.querySelector(target) as HTMLElement | null)
        : target;

    if (lenis && targetElement) {
      lenis.scrollTo(targetElement, options);
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollTo, lenis: getLenisInstance() };
};
