"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration = 2,
  automatic = false,
  className = "",
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: false });
  const [cursor, setCursor] = useState({ x: 150, y: 50 });
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  // Auto hover if enabled
  useEffect(() => {
    if (automatic) setHovered(true);
  }, [automatic]);

  // Start infinite smooth stroke animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start({
        strokeDashoffset: [1000, 0],
        strokeDasharray: 1000,
        transition: {
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [isInView, controls, duration]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <mask id="hoverMask">
          <rect width="100%" height="100%" fill="black" />
          {hovered && (
            <motion.circle
              cx={cursor.x}
              cy={cursor.y}
              r="60"
              fill="white"
              initial={false}
              animate={{ cx: cursor.x, cy: cursor.y }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}
        </mask>
      </defs>

      {/* Static grey outline */}
      <text
        x="150"
        y="55"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="#999"
        strokeWidth="0.3"
        fill="transparent"
        className="font-[helvetica] text-[32px] md:text-[56px] font-bold"
        style={{ opacity: hovered ? 0.2 : 0.1 }}
      >
        {text}
      </text>

      {/* Smooth looping stroke animation */}
      <motion.text
        x="150"
        y="55"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="#666"
        strokeWidth="0.3"
        fill="transparent"
        className="font-[helvetica] text-[32px] md:text-[56px] font-bold"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={controls}
      >
        {text}
      </motion.text>

      {/* Gradient stroke with mask */}
      <text
        x="150"
        y="55"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#gradientStroke)"
        strokeWidth="0.5"
        fill="transparent"
        mask="url(#hoverMask)"
        className="font-[helvetica] text-[32px] md:text-[56px] font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
