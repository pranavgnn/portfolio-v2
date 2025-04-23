const EasterEgg = () => {
  return (
    <section className="hidden md:flex min-h-screen flex-col items-center justify-center text-center bg-gradient-to-b to-background from-branding/10 gap-16">
      <h1 className="text-branding text-2xl">Surprise!</h1>
      <img
        src="https://readrange.com/wp-content/uploads/2023/10/RR-hero-1-768x480.jpeg"
        alt="Easter Egg"
        className="w-1/2 h-auto rounded-lg shadow-lg"
      />
    </section>
  );
};

export default EasterEgg;
