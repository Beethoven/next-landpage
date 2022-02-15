import React from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
}

const InView = ({ children }: ContainerProps) => {
  const viewport = {
    margin: "-15%",
  };

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewport}>
      {children}
    </motion.div>
  );
};

export default InView;
