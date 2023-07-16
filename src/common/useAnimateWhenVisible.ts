const intersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting)
      entry.target.setAttribute('data-animation', 'visible');
    else
      entry.target.setAttribute('data-animation', 'hidden');
  });
});

export const useAnimateWhenVisible = (el: Element) => {
  intersectionObserver.observe(el);
}