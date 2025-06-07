const GradientTransition = () => {
  return (
    <>
      {/* Extend the hero section background first */}
      <div className="w-full h-8 bg-slate-900 dark:bg-slate-950" />
      
      {/* Then create the gradient transition */}
      <div className="w-full h-24 bg-gradient-to-b from-slate-900 via-slate-600 to-background dark:from-slate-950 dark:via-slate-800 dark:to-background" />
    </>
  );
};

export default GradientTransition;