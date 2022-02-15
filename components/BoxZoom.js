import { motion } from "framer-motion";

const BoxZoom = ({ children }) => {
  const boxTop = {
    hidden: { y: 100, scale: 1.2, opacity: 0.2 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        type: "spring",
        damping: 30,
      },
    },
    viewport: {
      margin: "-15%",
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={boxTop}
      viewport={boxTop.viewport}
    >
      {children}
    </motion.div>
  );
};

export default BoxZoom;
