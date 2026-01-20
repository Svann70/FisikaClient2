const LightRays = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Light rays from surface */}
      <div 
        className="absolute top-0 left-[10%] w-32 h-full light-ray opacity-20"
        style={{ transform: "rotate(5deg)" }}
      />
      <div 
        className="absolute top-0 left-[30%] w-48 h-full light-ray opacity-15"
        style={{ transform: "rotate(-3deg)", animationDelay: "1s" }}
      />
      <div 
        className="absolute top-0 left-[55%] w-40 h-full light-ray opacity-20"
        style={{ transform: "rotate(8deg)", animationDelay: "2s" }}
      />
      <div 
        className="absolute top-0 left-[75%] w-36 h-full light-ray opacity-15"
        style={{ transform: "rotate(-5deg)", animationDelay: "3s" }}
      />
      
      {/* Surface shimmer */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-light/10 to-transparent" />
    </div>
  );
};

export default LightRays;
