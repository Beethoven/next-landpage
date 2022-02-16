import React from "react";
import { motion } from "framer-motion";

interface InViewProps {
  children: React.ReactNode;
  margin?: string;
  once?: boolean;
}

const InView = ({ margin, once, children }: InViewProps) => {
  const viewport = {
    margin,
    once,
  };

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewport}>
      {children}
    </motion.div>
  );
};

export default InView;
