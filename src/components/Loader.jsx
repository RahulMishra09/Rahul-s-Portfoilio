import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "RAHUL MISHRA";

function Loader() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(NAME.slice(0, i + 1));
      i++;
      if (i === NAME.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-background text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-4xl md:text-5xl font-extrabold tracking-widest text-orange-400 flex items-center">
          <span>{displayed}</span>
          <span className={`ml-1 w-2 h-10 ${showCursor ? 'opacity-100' : 'opacity-0'} bg-orange-400 animate-blink`}></span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader; 