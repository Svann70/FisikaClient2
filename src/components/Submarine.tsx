import { motion } from "framer-motion";

interface SubmarineProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Submarine = ({ size = "md", className = "" }: SubmarineProps) => {
  const sizeClasses = {
    sm: "w-16 h-10",
    md: "w-32 h-20",
    lg: "w-48 h-28",
  };

  return (
    <motion.div
      className={`relative submarine-bob ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 120 60" className="w-full h-full drop-shadow-lg">
        {/* Main body */}
        <ellipse cx="60" cy="35" rx="45" ry="20" className="fill-accent" />
        
        {/* Body highlight */}
        <ellipse cx="55" cy="30" rx="38" ry="12" className="fill-sand/60" />
        
        {/* Cabin/Window dome */}
        <ellipse cx="45" cy="25" rx="15" ry="12" className="fill-turquoise" />
        <ellipse cx="43" cy="22" rx="10" ry="7" className="fill-turquoise-glow/80" />
        <circle cx="40" cy="20" r="3" className="fill-white/60" />
        
        {/* Periscope */}
        <rect x="55" y="5" width="6" height="18" rx="3" className="fill-muted" />
        <rect x="52" y="3" width="12" height="6" rx="2" className="fill-muted" />
        <circle cx="58" cy="6" r="2" className="fill-turquoise" />
        
        {/* Propeller */}
        <ellipse cx="108" cy="35" rx="8" ry="3" className="fill-muted" />
        <rect x="100" y="32" width="10" height="6" className="fill-secondary" />
        
        {/* Fins */}
        <path d="M90 45 L105 55 L90 55 Z" className="fill-coral" />
        <path d="M90 25 L105 15 L90 15 Z" className="fill-coral" />
        
        {/* Decorative lines */}
        <line x1="25" y1="35" x2="35" y2="35" className="stroke-secondary stroke-2" />
        <line x1="70" y1="40" x2="85" y2="40" className="stroke-secondary stroke-2" />
        
        {/* Bubbles */}
        <circle cx="112" cy="30" r="3" className="fill-bubble/60" />
        <circle cx="118" cy="35" r="2" className="fill-bubble/40" />
        <circle cx="115" cy="42" r="2.5" className="fill-bubble/50" />
      </svg>
    </motion.div>
  );
};

export default Submarine;
