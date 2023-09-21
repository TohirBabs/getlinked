export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "sring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "sring",
      stiffness: 80,
      damping: 1,
    },
  },
};
