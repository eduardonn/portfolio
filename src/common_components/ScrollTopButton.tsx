import { createSignal } from "solid-js";

export const ScrollTopButton = () => {
  const [visible, setVisible] = createSignal(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <button
      style={visible() ? 'opacity: 1' : 'opacity: 0; pointer-events: none'}
      class='fixed bottom-8 right-8 w-14 h-14 z-40
        font-[verdana] text-xl
        bg-gray-100 rounded-full shadow-md
        transition-opacity duration-500'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
    >
      ^
    </button>
  );
}

export default ScrollTopButton;