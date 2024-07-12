import React from 'react';
import { motion } from 'framer-motion';

function transition(WrappedComponent) {
  return function TransitionComponent(props) {
    return (
      <>
        <motion.div
          className="transition-container dark:bg-[#111111] bg-[#FFFFFF]"
          initial={{ translateY: '-100%' }}
          animate={{ translateY: '0%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, translateY: "10%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            transition={{
              type: 'spring',
              duration: 1,
              ease: 'easeInOut',
              damping: 6, // Increase damping for heavier bounce
              // Increase stiffness for a quicker bounce
            //   bounce:1,
            //   times:[0,1]
            }}
          >
            <WrappedComponent {...props} />
          </motion.div>
        </motion.div>
      </>
    );
  };
}

export default transition;
