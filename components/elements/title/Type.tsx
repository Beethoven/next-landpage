import { motion } from "framer-motion";

const Type = ({ children }) => {
  const toTop = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        velocity: 10,
        mass: 1,
      },
    },
  };

  return <motion.div variants={toTop}>{children}</motion.div>;
};

export default Type;
