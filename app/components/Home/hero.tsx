const HeroSection: React.FC = () => (
  <main
    className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-cover"
    style={{ backgroundImage: "url(/images/hero-background.jpg)" }}
  >
    <h1 className="text-6xl font-bold text-white mt-12">Welcome to FitTrack</h1>
    <p className="mt-4 text-xl text-white">
      Track your lifts and meals effortlessly using our cutting-edge AI
      technology.
    </p>
    <div className="mt-12">
      <a
        href="#"
        className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10"
      >
        Get Started
      </a>
    </div>
  </main>
);

export default HeroSection;
