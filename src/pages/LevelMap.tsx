import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Bubbles from "@/components/Bubbles";
import LightRays from "@/components/LightRays";
import Submarine from "@/components/Submarine";
import { materiList } from "@/data/materiData";
import { ArrowLeft } from "lucide-react";

const LevelMap = () => {
  const navigate = useNavigate();

  const nodeColors = [
    "from-turquoise to-turquoise-glow",
    "from-seaweed to-turquoise",
    "from-coral to-accent",
    "from-sand to-accent",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Bubbles />
      <LightRays />

      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="glass"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>

          <div className="glass-card p-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                🗺️ Peta Petualangan
              </h1>
              <p className="text-muted-foreground">
                Klik node untuk memulai eksplorasi!
              </p>
            </div>
            <div className="hidden md:block">
              <Submarine size="sm" />
            </div>
          </div>
        </motion.div>

        {/* Game Map with Connected Nodes */}
        <div className="max-w-4xl mx-auto relative py-8">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Curved path connecting all nodes */}
            <motion.path
              d="M 120 80 Q 300 120, 480 80 Q 660 40, 840 80 Q 1020 120, 1200 80"
              fill="none"
              stroke="hsl(180 70% 45% / 0.3)"
              strokeWidth="4"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="hidden md:block"
            />
          </svg>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden flex flex-col items-center gap-4">
            {materiList.map((materi, index) => {
              const Icon = materi.icon;
              return (
                <motion.div
                  key={materi.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connecting line (except first) */}
                  {index > 0 && (
                    <div className="absolute -top-4 left-1/2 w-1 h-4 bg-gradient-to-b from-transparent to-primary/30" />
                  )}
                  
                  <button
                    onClick={() => navigate(`/materi/${materi.id}`)}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${nodeColors[index]} blur-xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                    
                    {/* Node circle */}
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${nodeColors[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white/20`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Level number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </button>
                  
                  {/* Label */}
                  <div className="mt-3 text-center">
                    <p className="font-bold text-foreground text-sm">{materi.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Horizontal wave layout */}
          <div className="hidden md:flex justify-between items-center relative" style={{ minHeight: "200px" }}>
            {materiList.map((materi, index) => {
              const Icon = materi.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={materi.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col items-center ${isEven ? "mt-0" : "mt-16"}`}
                  style={{ zIndex: 10 }}
                >
                  <button
                    onClick={() => navigate(`/materi/${materi.id}`)}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${nodeColors[index]} blur-2xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                    
                    {/* Node circle */}
                    <motion.div 
                      className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${nodeColors[index]} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20`}
                      whileHover={{ y: -5 }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                    
                    {/* Level number badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-primary">{index + 1}</span>
                    </div>
                    
                    {/* Pulse effect on hover */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${nodeColors[index]} opacity-0 group-hover:opacity-40 group-hover:animate-ping`} />
                  </button>
                  
                  {/* Label card */}
                  <motion.div 
                    className="mt-4 glass-card px-4 py-2 text-center max-w-[150px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <p className="font-bold text-foreground text-sm">{materi.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">Pulau {index + 1}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative dashed line connecting nodes on mobile */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" style={{ zIndex: 0 }} />
        </div>

        {/* Legend */}
        <motion.div
          className="max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="glass-card p-4 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-turquoise to-turquoise-glow" />
              <span className="text-muted-foreground">Kerangka Acuan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-seaweed to-turquoise" />
              <span className="text-muted-foreground">Inersia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-coral to-accent" />
              <span className="text-muted-foreground">Non-Inersia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-sand to-accent" />
              <span className="text-muted-foreground">Galileo</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
          <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
              className="fill-ocean-deep/80"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LevelMap;
