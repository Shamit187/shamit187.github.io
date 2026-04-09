let scrollObserver: IntersectionObserver | null = null;

export function initScrollAnimations() {
  const elements = document.querySelectorAll<HTMLElement>('[data-animate], .reveal');
  if (elements.length === 0) {
    return () => {};
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return () => {};
  }

  if (!scrollObserver) {
    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            scrollObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
  }

  elements.forEach((el) => {
    if (el.dataset.observed === 'true') {
      return;
    }
    el.dataset.observed = 'true';
    scrollObserver?.observe(el);
  });

  return () => {
    scrollObserver?.disconnect();
    scrollObserver = null;
  };
}
