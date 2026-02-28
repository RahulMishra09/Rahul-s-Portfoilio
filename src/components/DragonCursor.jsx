import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function BatmanCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Batman Symbol following cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: 0,
          top: 0,
          x: mousePosition.x - 35,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5
        }}
      >
        <motion.svg
          width="70"
          height="50"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            scale: isMoving ? [1, 1.1, 1] : 1,
            rotate: isMoving ? [0, 3, -3, 0] : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Orange Oval Background */}
          <motion.ellipse
            cx="60"
            cy="40"
            rx="55"
            ry="35"
            fill="#FF8000"
            stroke="#FF6B00"
            strokeWidth="3"
            animate={{
              scale: isMoving ? [1, 1.05, 1] : 1
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{
              filter: 'drop-shadow(0 0 10px #FF8000)'
            }}
          />

          {/* Batman Bat Symbol - Accurate Shape */}
          <g transform="translate(60, 40)">
            {/* Bat Head/Body Center */}
            <motion.path
              d="M 0,-8
                 Q -2,-12 -5,-12
                 L -5,-8
                 Q -6,-5 -8,-4
                 L -8,2
                 Q -6,4 -4,5
                 L -4,8
                 Q -3,12 0,15
                 Q 3,12 4,8
                 L 4,5
                 Q 6,4 8,2
                 L 8,-4
                 Q 6,-5 5,-8
                 L 5,-12
                 Q 2,-12 0,-8 Z"
              fill="#000000"
            />

            {/* Left Wing - Upper */}
            <motion.path
              d="M -8,-4
                 Q -12,-6 -16,-5
                 Q -20,-4 -22,-2
                 Q -24,0 -23,2
                 Q -21,4 -18,3
                 Q -14,2 -10,0
                 L -8,2
                 Z"
              fill="#000000"
              animate={{
                scaleX: isMoving ? [1, 1.1, 1] : [1, 1.05, 1]
              }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />

            {/* Right Wing - Upper */}
            <motion.path
              d="M 8,-4
                 Q 12,-6 16,-5
                 Q 20,-4 22,-2
                 Q 24,0 23,2
                 Q 21,4 18,3
                 Q 14,2 10,0
                 L 8,2
                 Z"
              fill="#000000"
              animate={{
                scaleX: isMoving ? [1, 1.1, 1] : [1, 1.05, 1]
              }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />

            {/* Left Wing - Lower */}
            <motion.path
              d="M -10,0
                 Q -14,-2 -18,-2
                 Q -22,-1 -25,1
                 Q -28,3 -27,6
                 Q -25,8 -22,7
                 Q -18,6 -14,4
                 L -8,2
                 Z"
              fill="#000000"
              animate={{
                scaleX: isMoving ? [1, 1.15, 1] : [1, 1.08, 1]
              }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
            />

            {/* Right Wing - Lower */}
            <motion.path
              d="M 10,0
                 Q 14,-2 18,-2
                 Q 22,-1 25,1
                 Q 28,3 27,6
                 Q 25,8 22,7
                 Q 18,6 14,4
                 L 8,2
                 Z"
              fill="#000000"
              animate={{
                scaleX: isMoving ? [1, 1.15, 1] : [1, 1.08, 1]
              }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
            />

            {/* Bottom scalloped edge - Left */}
            <path
              d="M -4,5
                 Q -6,7 -8,9
                 Q -6,10 -4,8
                 Z"
              fill="#000000"
            />

            {/* Bottom scalloped edge - Center Left */}
            <path
              d="M -4,8
                 Q -3,10 -2,11
                 Q -1,10 0,9
                 Z"
              fill="#000000"
            />

            {/* Bottom scalloped edge - Center Right */}
            <path
              d="M 0,9
                 Q 1,10 2,11
                 Q 3,10 4,8
                 Z"
              fill="#000000"
            />

            {/* Bottom scalloped edge - Right */}
            <path
              d="M 4,8
                 Q 6,10 8,9
                 Q 6,7 4,5
                 Z"
              fill="#000000"
            />
          </g>

          {/* Glow effect when moving */}
          {isMoving && (
            <motion.ellipse
              cx="60"
              cy="40"
              rx="55"
              ry="35"
              fill="none"
              stroke="#FF8000"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [1, 1.2, 1.4]
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.svg>
      </motion.div>

      {/* Orange glowing trail effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: 0,
          top: 0,
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full"
          animate={{
            scale: isMoving ? [1, 2, 0] : 0,
            opacity: isMoving ? [0.5, 0.2, 0] : 0
          }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'radial-gradient(circle, #FF8000 0%, transparent 70%)',
            filter: 'blur(10px)',
            boxShadow: '0 0 30px #FF8000'
          }}
        />
      </motion.div>
    </>
  );
}

export default BatmanCursor;
