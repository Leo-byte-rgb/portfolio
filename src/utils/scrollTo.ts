export const scrollTo = (pixels: number) => {
  window.scrollTo({ top: pixels, behavior: "smooth" });
};
