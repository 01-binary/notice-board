import { useEffect, useState } from 'react';

interface Props {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root = null,
  onIntersect,
  threshold = 0.9,
  rootMargin = '0px',
}: Props) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      {
        root,
        rootMargin,
        threshold,
      },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
