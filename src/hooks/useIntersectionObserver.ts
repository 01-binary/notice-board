import { useEffect } from 'react';

const useIntersectionObserver = ({
  root = null,
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};

export default useIntersectionObserver;
