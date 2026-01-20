import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Bubbles from "@/components/Bubbles";
import LightRays from "@/components/LightRays";
import Submarine from "@/components/Submarine";
import { Anchor, Users } from "lucide-react";
import { teamInfo } from "@/data/materiData";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Bubbles />
      <LightRays />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Floating submarine */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Submarine size="md" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-10 hidden lg:block"
          style={{ transform: "scaleX(-1)" }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Submarine size="sm" />
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 max-w-2xl text-center relative"
        >
          {/* Decorative anchor */}
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise to-turquoise-glow flex items-center justify-center shadow-lg ocean-glow">
              <Anchor className="w-6 h-6 text-primary-foreground" />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pameran Fisika
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl font-semibold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Kerangka Acuan & Transformasi Galileo
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Jelajahi dunia fisika bersama kapal selam! Pelajari konsep kerangka acuan
            dan transformasi Galileo melalui petualangan interaktif di bawah laut.
          </motion.p>

          {/* Team info */}
          <motion.div
            className="mb-8 p-4 rounded-xl bg-secondary/50 border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">{teamInfo.groupName}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {teamInfo.members.map((member, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/20 text-sm text-primary"
                >
                  {member}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Start button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="ocean"
              size="xl"
              onClick={() => navigate("/menu")}
              className="group"
            >
              <span>Mulai Eksplorasi</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom decoration - seaweed/coral hints */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,60 Q180,20 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z"
              className="fill-ocean-mid/50"
            />
            <path
              d="M0,80 Q240,50 480,80 T960,80 T1440,80 L1440,120 L0,120 Z"
              className="fill-ocean-deep/80"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;
