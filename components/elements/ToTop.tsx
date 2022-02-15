import { motion } from "framer-motion";

const ToTop = ({ children }) => {
  const toTop = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        velocity: 2,
        damping: 30,
      },
    },
  };

  return <motion.div variants={toTop}>{children}</motion.div>;
};

export default ToTop;
