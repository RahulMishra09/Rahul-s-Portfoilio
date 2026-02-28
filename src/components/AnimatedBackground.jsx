import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate random stars - optimized count
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) { // Reduced from 200 to 100
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Generate shooting stars periodically - more frequent and realistic
  useEffect(() => {
    const createShootingStar = () => {
      const newStar = {
        id: Date.now() + Math.random(),
        startX: Math.random() * 120 - 20, // Can start slightly off-screen
        startY: Math.random() * 60,
        duration: Math.random() * 0.8 + 0.6, // Faster, more realistic (0.6-1.4s)
        length: Math.random() * 40 + 30, // Variable trail length
        angle: Math.random() * 20 + 35 // More consistent angle
      };
      setShootingStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== newStar.id));
      }, newStar.duration * 1000 + 500);
    };

    // Create initial shooting stars
    const initialStars = setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(createShootingStar, i * 800);
      }
    }, 1000);

    // Regular interval for new shooting stars (every 2-5 seconds randomly)
    const scheduleNext = () => {
      const delay = Math.random() * 3000 + 2000; // 2-5 seconds
      setTimeout(() => {
        createShootingStar();
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      clearTimeout(initialStars);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Starry Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Twinkling Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              transform: `translateY(${scrollY * 0.05}px)`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
              willChange: 'opacity, transform'
            }}
            animate={{
              opacity: [star.opacity, star.opacity + 0.4, star.opacity],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Shooting Stars - More Realistic */}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              willChange: 'transform, opacity'
            }}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.3, 1, 1, 0.7, 0],
              x: [0, 150, 300],
              y: [0, 75, 150],
              scale: [0.8, 1, 1, 0.9, 0.7]
            }}
            transition={{
              duration: star.duration,
              ease: [0.22, 1, 0.36, 1] // Custom easing for realistic motion
            }}
          >
            {/* Bright head of shooting star */}
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              style={{
                boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.9), 0 0 15px 3px rgba(200, 220, 255, 0.6), 0 0 25px 5px rgba(100, 150, 255, 0.3)'
              }}
              animate={{
                scale: [1, 1.3, 1.1, 1]
              }}
              transition={{
                duration: star.duration * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main trail */}
            <motion.div
              className="absolute top-0.5 left-0.5 h-0.5 bg-gradient-to-r from-white via-blue-100 to-transparent"
              style={{
                width: `${star.length}px`,
                transformOrigin: 'left center',
                transform: 'rotate(-30deg)',
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)'
              }}
              animate={{
                opacity: [0.9, 1, 0.8]
              }}
              transition={{
                duration: star.duration * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Secondary fainter trail */}
            <motion.div
              className="absolute top-0.5 left-0.5 h-0.5 bg-gradient-to-r from-blue-200 via-purple-100 to-transparent"
              style={{
                width: `${star.length * 1.3}px`,
                transformOrigin: 'left center',
                transform: 'rotate(-30deg)',
                opacity: 0.4
              }}
            />

            {/* Sparkle particles along trail */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${-i * 15}px`,
                  top: `${i * 8}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0.4, 0],
                  scale: [0, 1, 0.8, 0]
                }}
                transition={{
                  duration: star.duration,
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Subtle Orange Nebula Glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 128, 0, 0.08) 0%, transparent 70%)',
            left: '20%',
            top: '30%',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 0, 0.06) 0%, transparent 70%)',
            right: '25%',
            top: '50%',
            transform: `translateY(${scrollY * -0.12}px)`,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Dark space vignette */}
        <div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>
    </div>
  );
}

export default AnimatedBackground;
