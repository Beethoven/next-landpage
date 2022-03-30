import React from "react";
import { InView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const Component = () => (
  <InView threshold={0.8}>
    {({ inView, ref }) => (
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, x: 50 } : { x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg bg-green-100 p-8"
      >
        <h2>{`Header inside viewport ${inView}.`}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
    )}
  </InView>
);

export default Component;
