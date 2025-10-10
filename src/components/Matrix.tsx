import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface FloatingParticleProps {
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({ delay, duration, x, y, size }) => {
  const particleColor = useColorModeValue('rgba(59, 130, 246, 0.1)', 'rgba(147, 197, 253, 0.1)');
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: particleColor,
        filter: 'blur(1px)',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

function ModernBackground() {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, blue.50, purple.50)',
    'linear(to-br, gray.900, gray.800, blue.900)'
  );

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 4 + Math.random() * 8,
  }));

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={-1}
      bgGradient={bgGradient}
      overflow="hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '30%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08), transparent)',
          filter: 'blur(25px)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
          size={particle.size}
        />
      ))}

      {/* Subtle grid pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        opacity={useColorModeValue(0.02, 0.05)}
        backgroundImage="radial-gradient(circle, currentColor 1px, transparent 1px)"
        backgroundSize="50px 50px"
      />
    </Box>
  );
}

export default ModernBackground;
