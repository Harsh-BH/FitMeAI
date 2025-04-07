import React from 'react'
import { motion } from 'framer-motion'

export const AuthPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="auth-pattern" patternUnits="userSpaceOnUse" width="100" height="100" className="text-purple-500/5 dark:text-purple-300/5">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#auth-pattern)" />
      </svg>
    </div>
  )
}

export const AuthDecorations = () => {
  const floatAnimation = (duration: number = 5) => ({
    y: [0, -10, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });
  
  return (
    <>
      <motion.div 
        animate={floatAnimation(6)}
        className="absolute top-20 left-10 w-16 h-16 text-purple-200 dark:text-purple-800 opacity-50"
      >
        <AuthDeco1 />
      </motion.div>
      
      <motion.div 
        animate={floatAnimation(8)}
        className="absolute bottom-20 right-10 w-20 h-20 text-blue-200 dark:text-blue-800 opacity-40"
      >
        <AuthDeco2 />
      </motion.div>
      
      <motion.div 
        animate={floatAnimation(7)}
        className="absolute top-1/3 right-20 w-12 h-12 text-pink-200 dark:text-pink-800 opacity-30"
      >
        <AuthDeco3 />
      </motion.div>
    </>
  );
};

export const AuthDeco1 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path
      fill="currentColor"
      d="M46.5,-76.5C59.1,-67.8,67.7,-53.2,74.6,-38.4C81.5,-23.5,86.7,-8.4,84.9,5.7C83,19.8,74.2,32.8,64.3,43.8C54.5,54.8,43.6,63.7,31,68.3C18.3,73,4,73.3,-11.5,73.4C-27,73.5,-54,73.5,-70.2,63C-86.5,52.6,-92,31.6,-89.2,13.5C-86.3,-4.7,-75.1,-20,-64.7,-34.2C-54.3,-48.4,-44.7,-61.4,-32.8,-70.5C-20.9,-79.6,-6.6,-84.7,7.8,-83.8C22.2,-82.9,33.8,-85.2,46.5,-76.5Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const AuthDeco2 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path
      fill="currentColor"
      d="M53.7,-75.2C69.2,-69.6,81.2,-54.6,87.4,-38.1C93.6,-21.6,93.9,-3.5,89.1,13C84.4,29.5,74.7,44.4,63.5,58.3C52.2,72.2,39.3,85.1,23.4,90.9C7.6,96.8,-11.1,95.6,-25.6,88.3C-40.1,81,-50.3,67.6,-59.3,54.1C-68.2,40.7,-75.8,27.2,-79.5,12.4C-83.2,-2.5,-83,-18.8,-75.7,-31.4C-68.5,-44,-54.2,-53,-40.3,-59.1C-26.3,-65.1,-12.7,-68.2,2.9,-72.1C18.4,-76,37,-80.7,53.7,-75.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const AuthDeco3 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path
      fill="currentColor"
      d="M44.3,-69.4C55.9,-62.3,62.8,-46.8,69.7,-31.6C76.6,-16.4,83.5,-1.4,82.3,12.9C81,27.1,71.5,40.6,60,51.4C48.5,62.2,35,70.4,19.8,76.6C4.7,82.7,-12.1,86.9,-26.2,83C-40.2,79.1,-51.5,67.1,-61.5,54.1C-71.5,41.2,-80.2,27.2,-83.8,11.7C-87.3,-3.9,-85.7,-21.1,-78,-34C-70.3,-46.8,-56.5,-55.3,-42.3,-61C-28.1,-66.7,-13.5,-69.6,1.4,-71.7C16.4,-73.9,32.7,-76.4,44.3,-69.4Z"
      transform="translate(100 100)"
    />
  </svg>
);
