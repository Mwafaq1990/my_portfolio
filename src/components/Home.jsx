import Typewriter from "typewriter-effect";
import { ChevronDown } from "lucide-react";

const Home = ({ HomeContent }) => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          src={HomeContent.videoLink}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
          <Typewriter
            options={{
              strings: HomeContent.typeWriter,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-lg text-gray-300 mb-8">{HomeContent.description}</p>
      </div>

      {/* Scroll Down Arrow */}
      <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <ChevronDown size={48} />
      </button>
    </section>
  );
};

export default Home;
