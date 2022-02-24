import { motion } from "framer-motion";

interface TypeProps {
  children?: React.ReactNode;
  variants?: string;
}

const Type = ({ children, variants }: TypeProps) => {
  const toTop = {
    hidden: { x: 120, opacity: 0 },
    visible: {
      x: 0,
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
