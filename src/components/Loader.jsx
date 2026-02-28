import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [currentThought, setCurrentThought] = useState(0);

  const thinkingQuotes = [
    "INITIALIZING INTELLIGENCE",
    "LOADING NEURAL PATHWAYS",
    "PROCESSING CREATIVITY",
    "CONNECTING IDEAS",
    "BUILDING INNOVATION",
    "COMPILING GENIUS",
    "ACTIVATING POTENTIAL",
    "PREPARING EXCELLENCE"
  ];

  useEffect(() => {
    // Progress bar reaches 100% in exactly 2.5 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increment by 4% every 100ms = exactly 2.5 seconds to reach 100%
        const nextProgress = prev + 4;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 100);

    const thoughtInterval = setInterval(() => {
      setCurrentThought(prev => (prev + 1) % thinkingQuotes.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(thoughtInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Dark Background matching portfolio */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, #1A1A2E 0%, #0B0F17 60%, #000000 100%)'
        }}
      />

      {/* Orange ambient glow matching portfolio theme */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 128, 0, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Subtle grid - optimized with will-change */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 128, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 128, 0, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            willChange: 'background-position'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating particles - optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const orangeShades = [
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 107, 0, 0.6)',
            'rgba(229, 81, 0, 0.6)',
            'rgba(255, 160, 0, 0.5)'
          ];
          const color = orangeShades[Math.floor(Math.random() * orangeShades.length)];

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: color,
                boxShadow: `0 0 ${Math.random() * 12 + 8}px ${color}`,
                willChange: 'transform, opacity'
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-8">

        {/* 3D Brain Neural Network */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <svg
              viewBox="0 0 900 500"
              className="w-full h-auto max-w-4xl mx-auto"
              style={{ filter: 'drop-shadow(0 0 40px rgba(255, 128, 0, 0.4))' }}
            >
              <defs>
                <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#E55100', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#FF8000', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#E55100', stopOpacity: 0 }} />
                </linearGradient>

                <linearGradient id="orangeGlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FF6B00', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#FF8000', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#FF6B00', stopOpacity: 0 }} />
                </linearGradient>

                <radialGradient id="nodeGlow">
                  <stop offset="0%" style={{ stopColor: '#FF8000', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#FF6B00', stopOpacity: 0.7 }} />
                  <stop offset="100%" style={{ stopColor: '#E55100', stopOpacity: 0 }} />
                </radialGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Generate 3D Brain Wireframe Mesh */}
              {(() => {
                const nodes = [];

                // Create brain shape with front lobe, cerebral cortex, and cerebellum
                const brainRegions = {
                  // Main cerebral cortex (top dome)
                  cortex: [],
                  // Frontal lobe (front)
                  frontal: [],
                  // Temporal lobe (sides)
                  temporal: [],
                  // Cerebellum (back lower)
                  cerebellum: []
                };

                // Generate cortex nodes (main top dome) - like the reference image
                for (let layer = 0; layer < 5; layer++) {
                  const layerRadius = 160 - (layer * 25);
                  const pointsInLayer = 24 - (layer * 2);

                  for (let i = 0; i < pointsInLayer; i++) {
                    const angle = (i / pointsInLayer) * Math.PI * 2;
                    const x = 450 + Math.cos(angle) * layerRadius;
                    const y = 200 - (layer * 15) + Math.sin(angle) * layerRadius * 0.6;

                    nodes.push({ x, y, region: 'cortex', layer });
                    brainRegions.cortex.push({ x, y, layer });
                  }
                }

                // Add frontal lobe nodes (front bulge)
                for (let row = 0; row < 4; row++) {
                  for (let col = 0; col < 6; col++) {
                    const x = 250 + col * 20;
                    const y = 180 + row * 25;
                    nodes.push({ x, y, region: 'frontal', layer: row });
                    brainRegions.frontal.push({ x, y, layer: row });
                  }
                }

                // Add temporal lobes (side bulges)
                for (let i = 0; i < 8; i++) {
                  // Left temporal
                  const leftX = 300 + i * 15;
                  const leftY = 280 + Math.sin(i * 0.5) * 20;
                  nodes.push({ x: leftX, y: leftY, region: 'temporal', layer: i });

                  // Right temporal
                  const rightX = 600 - i * 15;
                  const rightY = 280 + Math.sin(i * 0.5) * 20;
                  nodes.push({ x: rightX, y: rightY, region: 'temporal', layer: i });
                }

                // Add cerebellum nodes (back lower brain)
                for (let row = 0; row < 3; row++) {
                  for (let col = 0; col < 8; col++) {
                    const x = 530 + col * 15;
                    const y = 320 + row * 20;
                    nodes.push({ x, y, region: 'cerebellum', layer: row });
                    brainRegions.cerebellum.push({ x, y, layer: row });
                  }
                }

                // Create dense wireframe connections
                const connections = [];
                nodes.forEach((node1, i) => {
                  nodes.forEach((node2, j) => {
                    if (i < j) {
                      const dx = node2.x - node1.x;
                      const dy = node2.y - node1.y;
                      const distance = Math.sqrt(dx * dx + dy * dy);

                      // Create denser mesh with longer connections
                      if (distance < 100) {
                        connections.push({
                          x1: node1.x,
                          y1: node1.y,
                          x2: node2.x,
                          y2: node2.y,
                          distance,
                          delay: Math.random() * 3
                        });
                      }
                    }
                  });
                });

                return (
                  <>
                    {/* Dense wireframe connections */}
                    {connections.map((conn, i) => (
                      <motion.line
                        key={`conn-${i}`}
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke={i % 2 === 0 ? "url(#orangeGlow)" : "url(#orangeGlow2)"}
                        strokeWidth={conn.distance < 50 ? "0.8" : "0.5"}
                        opacity={conn.distance < 50 ? "0.25" : "0.15"}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 1, 0],
                          opacity: conn.distance < 50 ? [0, 0.35, 0] : [0, 0.2, 0]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: conn.delay,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Neural nodes */}
                    {nodes.map((node, i) => (
                      <motion.circle
                        key={`node-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r={node.layer === 0 ? "2.5" : "1.8"}
                        fill="url(#nodeGlow)"
                        filter="url(#glow)"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0.5, 0.9, 0.5],
                          scale: [0.9, 1.2, 0.9]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 1.5,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </>
                );
              })()}

              {/* Central processing core */}
              <motion.circle
                cx="450"
                cy="220"
                r="18"
                fill="url(#nodeGlow)"
                filter="url(#strongGlow)"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Pulsing brain waves */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={`wave-${i}`}
                  cx="450"
                  cy="220"
                  r="25"
                  fill="none"
                  stroke="#FF8000"
                  strokeWidth="1.5"
                  opacity="0.6"
                  initial={{ r: 25, opacity: 0.6 }}
                  animate={{
                    r: [25, 120, 200],
                    opacity: [0.6, 0.2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Thinking Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentThought}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-[0.2em] mb-3 bg-orange-gradient bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255, 128, 0, 0.6))'
              }}
            >
              {thinkingQuotes[currentThought]}
            </motion.h2>
          </AnimatePresence>

          <motion.div
            animate={{
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-xs md:text-sm tracking-[0.4em] font-light text-primary-orange/70"
          >
            PLEASE WAIT...
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs tracking-widest text-primary-orange/70">LOADING</span>
            <motion.span
              className="text-3xl font-bold tabular-nums tracking-wider bg-orange-gradient bg-clip-text text-transparent"
              animate={{
                filter: [
                  'drop-shadow(0 0 15px rgba(255, 128, 0, 0.6))',
                  'drop-shadow(0 0 30px rgba(255, 128, 0, 0.9))',
                  'drop-shadow(0 0 15px rgba(255, 128, 0, 0.6))'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {Math.floor(progress)}%
            </motion.span>
          </div>

          <div className="relative h-4 bg-gray-900/60 rounded-full overflow-hidden border border-primary-orange/30 shadow-inner backdrop-blur-sm">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255, 128, 0, 0.3) 8px, rgba(255, 128, 0, 0.3) 10px)'
            }} />

            <motion.div
              className="absolute inset-y-0 left-0"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: 'linear-gradient(90deg, #E55100 0%, #FF8000 50%, #FF6B00 100%)',
                boxShadow: '0 0 25px rgba(255, 128, 0, 0.8), inset 0 0 15px rgba(255, 200, 0, 0.3)'
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: [-200, 800] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ width: "200px" }}
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-4"
            animate={{
              opacity: progress > 85 ? [0.5, 1, 0.5] : 0
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-xs tracking-[0.3em] text-primary-orange font-bold">
              {progress > 85 ? "READY TO LAUNCH" : ""}
            </span>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/80" />
    </div>
  );
}

export default Loader;
