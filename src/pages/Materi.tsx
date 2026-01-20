import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Bubbles from "@/components/Bubbles";
import LightRays from "@/components/LightRays";
import Quiz from "@/components/Quiz";
import { materiList } from "@/data/materiData";
import { ArrowLeft, ArrowRight, Lightbulb, BookOpen, Sparkles, CheckCircle, Image } from "lucide-react";

const Materi = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = materiList.findIndex((m) => m.id === id);
  const materi = materiList[currentIndex];

  if (!materi) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Materi tidak ditemukan</h1>
          <Button variant="ocean" onClick={() => navigate("/menu")}>
            Kembali ke Menu
          </Button>
        </div>
      </div>
    );
  }

  const Icon = materi.icon;
  const nextMateri = materiList[currentIndex + 1];
  const prevMateri = materiList[currentIndex - 1];

  const colorGradients = {
    turquoise: "from-turquoise to-turquoise-glow",
    coral: "from-coral to-accent",
    sand: "from-sand to-accent",
    seaweed: "from-seaweed to-turquoise",
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Bubbles />
      <LightRays />

      <div className="relative z-10 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button variant="glass" onClick={() => navigate("/menu")}>
              <ArrowLeft className="w-4 h-4" />
              Peta
            </Button>

          </motion.div>

          {/* Header */}
          <motion.div
            className="glass-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorGradients[materi.color]} flex items-center justify-center shadow-lg shrink-0`}>
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">Pulau {currentIndex + 1}</div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {materi.title}
                </h1>
                <p className="text-muted-foreground italic">"{materi.narration}"</p>
              </div>
            </div>
          </motion.div>

          {/* Illustration - Different for each materi */}
          {materi.illustration && (
            <motion.div
              className="glass-card p-4 mb-6 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-turquoise flex items-center justify-center">
                  <Image className="w-4 h-4 text-primary-foreground" />
                </div>
                <h2 className="text-md font-bold text-foreground">Ilustrasi Materi</h2>
              </div>
              <div className="rounded-xl overflow-hidden pointer-events-none">
                <img
                  src={materi.illustration}
                  alt={`Ilustrasi ${materi.title}`}
                  className="w-full h-auto object-cover max-h-[400px] w-full"
                />
              </div>
            </motion.div>
          )}

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Concept */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-turquoise to-turquoise-glow flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-lg font-bold text-foreground">Konsep Inti</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {materi.concept}
              </p>
              <ul className="space-y-2">
                {materi.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-seaweed shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Examples */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-lg font-bold text-foreground">Contoh</h2>
              </div>
              <ul className="space-y-3">
                {materi.examples.map((example, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-xl bg-secondary/50 border border-white/5 text-foreground text-sm"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Highlight */}
          <motion.div
            className={`glass-card p-6 mb-6 border-l-4 border-l-primary`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-sand flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">Poin Penting</h2>
                <p className="text-primary text-lg font-medium">
                  "{materi.highlight}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quiz - with materiId to reset state */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Quiz question={materi.quiz} materiId={materi.id} />
          </motion.div>

          {/* Navigation footer */}
          <motion.div
            className="mt-8 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {prevMateri ? (
              <Button
                variant="glass"
                onClick={() => navigate(`/materi/${prevMateri.id}`)}
              >
                <ArrowLeft className="w-4 h-4" />
                {prevMateri.title}
              </Button>
            ) : (
              <div />
            )}
            {nextMateri ? (
              <Button
                variant="ocean"
                onClick={() => navigate(`/materi/${nextMateri.id}`)}
              >
                {nextMateri.title}
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="gold"
                onClick={() => navigate("/menu")}
              >
                Selesai! Kembali ke Peta
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Materi;
