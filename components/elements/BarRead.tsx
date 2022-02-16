import { motion, useViewportScroll } from "framer-motion";

const BarRead = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <motion.div
      className="fixed top-0 h-4 w-full bg-gray-800"
      style={{ scaleX: scrollYProgress, transformOrigin: "bottom left" }}
    />
  );
};

export default BarRead;
