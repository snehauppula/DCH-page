// Shared handle on the Lenis instance so non-React code (modal scroll lock, back-to-top) can reach it.
let instance = null;
export const setLenis = (l) => { instance = l; };
export const getLenis = () => instance;
