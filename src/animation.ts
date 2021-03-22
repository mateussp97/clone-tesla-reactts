export const titleUpAnimation = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 0.75,
    },
  },
};

export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 1.25 },
  },
};

export const leftAnimation = {
  hidden: {
    x: -25,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 1.5,
    },
  },
};

export const rightAnimation = {
  hidden: {
    x: 25,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 1.5,
    },
  },
};
