import React from "react";
import { motion } from "framer-motion";
import InView from "./InView";

interface ContainerProps {
  children: React.ReactNode;
}

const Sticky = ({ children }: ContainerProps) => {
  const show = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        damping: 30,
        velocity: 25,
      },
    },
  };

  return (
    <div
      style={{ height: "300vh" }}
      className="mx-auto max-w-xl lg:max-w-screen-sm"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Sticky;
