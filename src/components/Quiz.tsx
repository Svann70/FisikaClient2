import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Trophy } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  question: QuizQuestion;
  materiId: string; // Added to reset quiz when materi changes
  onComplete?: (isCorrect: boolean) => void;
}

const Quiz = ({ question, materiId, onComplete }: QuizProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Reset quiz state when materiId changes
  useEffect(() => {
    setSelectedIndex(null);
    setShowResult(false);
  }, [materiId]);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setShowResult(true);
    onComplete?.(selectedIndex === question.correctIndex);
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setShowResult(false);
  };

  const isCorrect = selectedIndex === question.correctIndex;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-sand flex items-center justify-center">
          <Trophy className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Kuis Mini</h3>
      </div>

      <p className="text-foreground mb-4 font-medium">{question.question}</p>

      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleSelect(index)}
            whileHover={{ scale: showResult ? 1 : 1.02 }}
            whileTap={{ scale: showResult ? 1 : 0.98 }}
            className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
              showResult
                ? index === question.correctIndex
                  ? "bg-seaweed/20 border-seaweed text-seaweed"
                  : index === selectedIndex
                  ? "bg-coral/20 border-coral text-coral"
                  : "bg-secondary/50 border-transparent text-muted-foreground"
                : selectedIndex === index
                ? "bg-primary/20 border-primary text-primary"
                : "bg-secondary/50 border-transparent text-foreground hover:bg-secondary hover:border-primary/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-bold text-sm">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {showResult && index === question.correctIndex && (
                <CheckCircle className="w-5 h-5 text-seaweed" />
              )}
              {showResult && index === selectedIndex && index !== question.correctIndex && (
                <XCircle className="w-5 h-5 text-coral" />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className={`p-4 rounded-xl ${isCorrect ? "bg-seaweed/20" : "bg-coral/20"}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-seaweed" />
                    <span className="font-bold text-seaweed">Benar! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-coral" />
                    <span className="font-bold text-coral">Belum tepat</span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
            <Button variant="glass" onClick={handleReset} className="w-full">
              Coba Lagi
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button 
              variant="ocean" 
              onClick={handleSubmit} 
              disabled={selectedIndex === null}
              className="w-full"
            >
              Periksa Jawaban
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
