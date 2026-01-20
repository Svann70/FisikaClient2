import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface IslandCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  index: number;
  color: "turquoise" | "coral" | "sand" | "seaweed";
}

const colorClasses = {
  turquoise: "from-turquoise to-turquoise-glow",
  coral: "from-coral to-accent",
  sand: "from-sand to-accent",
  seaweed: "from-seaweed to-turquoise",
};

const IslandCard = ({ title, description, icon: Icon, path, index, color }: IslandCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={path}>
        <div className="glass-card p-6 island-hover cursor-pointer group relative overflow-hidden">
          {/* Glow effect on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
          
          {/* Island number badge */}
          <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center shadow-lg`}>
            <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
          </div>
          
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Start button hint */}
          <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-semibold">Mulai Eksplorasi</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default IslandCard;
