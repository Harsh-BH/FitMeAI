"use client"

import { motion } from "framer-motion";
import { useMemo } from "react";

// SVG Components for clothing items
function SvgShirt({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M3 7L9 3M9 3L12 6L15 3M15 3L21 7M21 7L21 21H3L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgDress({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M6 3.5H18M6 3.5C5.5 5.5 5 7.5 6.5 9.5C8 11.5 8 14 8 15.5C8 17 8 18 8 18.5C8 19 9 19.5 9.5 20C10 20.5 10.5 21 12 21C13.5 21 14 20.5 14.5 20C15 19.5 16 19 16 18.5C16 18 16 17 16 15.5C16 14 16 11.5 17.5 9.5C19 7.5 18.5 5.5 18 3.5M6 3.5C6 3.5 7.5 2.5 12 2.5C16.5 2.5 18 3.5 18 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgPants({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M5.5 3H18.5M5.5 3V21H9.5L12 13L14.5 21H18.5V3M5.5 3H18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgHat({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M4 14.5C4 13.0999 4 12.3998 4.27248 11.8312C4.54496 11.2626 5.05479 10.8419 6.07446 10.0007C7.09412 9.15946 7.60396 8.73886 8.22064 8.53336C8.83732 8.32785 9.50966 8.36215 10.8543 8.43076C11.284 8.45359 11.6402 8.5 12 8.5C12.3598 8.5 12.716 8.45359 13.1457 8.43076C14.4903 8.36215 15.1627 8.32785 15.7794 8.53336C16.396 8.73886 16.9059 9.15946 17.9255 10.0007C18.9452 10.8419 19.455 11.2626 19.7275 11.8312C20 12.3998 20 13.0999 20 14.5V14.5C20 16.3856 20 17.3284 19.4142 17.9142C18.8284 18.5 17.8856 18.5 16 18.5H8C6.11438 18.5 5.17157 18.5 4.58579 17.9142C4 17.3284 4 16.3856 4 14.5V14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 8.5C15 6.84315 13.6569 5.5 12 5.5C10.3431 5.5 9 6.84315 9 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgShoe({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M3 10.5V12.5C3 13.6046 3.89543 14.5 5 14.5H19C20.1046 14.5 21 13.6046 21 12.5V11.5C21 10.3954 20.1046 9.5 19 9.5H16.5C16.1989 9.5 15.9 9.42098 15.6343 9.26827L13.5 8C12.1869 7.18933 11.5303 6.77899 10.7716 6.63951C10.013 6.50003 9.24141 6.64389 7.69825 6.9316L5.83471 7.29088C4.19511 7.59146 3.37531 7.74175 3.18766 8.37087C3 9 3 9.83333 3 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 9.5L7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 9.5L10.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface ClothingItem {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  x: string;
  y: string;
  size: string;
  duration: number;
  delay: number;
  rotate: number;
}

export function ClothingSVGs() {
  // Generate random clothing items
  const clothingItems = useMemo(() => {
    const icons = [SvgShirt, SvgDress, SvgPants, SvgHat, SvgShoe];
    
    return Array.from({ length: 15 }).map((_, i) => ({
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}rem`,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 2,
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {clothingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            x: item.x,
            y: item.y,
            rotate: item.rotate,
            opacity: 0,
          }}
          animate={{
            x: [item.x, `${Math.random() * 100}%`, item.x],
            y: [item.y, `${Math.random() * 100}%`, item.y],
            rotate: [item.rotate, item.rotate + (Math.random() > 0.5 ? 360 : -360)],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: item.delay,
          }}
          style={{
            position: "absolute",
            width: item.size,
            height: item.size,
          }}
          className="text-current"
        >
          <item.Icon />
        </motion.div>
      ))}
    </div>
  );
}
