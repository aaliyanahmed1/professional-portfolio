import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const openInNewTab = (url: string) => window.open(url, "_blank");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white overflow-hidden">
      {/* Glowing background blur circles */}
      <div className="absolute w-[500px] h-[500px] bg-[#A68A64]/30 rounded-full top-[-150px] left-[-150px] blur-3xl animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#A68A64]/20 rounded-full bottom-[-100px] right-[-100px] blur-2xl animate-spin-slow"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hey, I'm{" "}
            <span className="text-[#A68A64] drop-shadow-lg">Aaliyan Ahmed</span>
          </h1>
          <h2 className="text-2xl text-gray-300 mt-4 font-medium">
            AI Engineer & Computer Vision Specialist
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-md mx-auto md:mx-0">
            I build reliable AI systems for real-world applications, including computer vision, surveillance, and predictive analytics — with a focus on performance, accuracy, and scalability.
          </p>
          {/* Merged About Me Content */}
          <div className="mt-6 space-y-4 text-left text-gray-300 text-sm max-w-md mx-auto md:mx-0">
            <div>
              <strong>🎓 Education:</strong> Bachelor's in Artificial Intelligence (BS AI)
            </div>
            <div>
              <strong>💼 Experience:</strong> 3+ years as AI Engineer
            </div>
            <div>
              <strong>🏆 Projects:</strong> Multiple successful AI projects for global clients
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => openInNewTab("https://github.com/aaliyanahmed1")}
              className="bg-[#A68A64] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#8c6e4a] transition"
            >
              View My Work
            </Button>
            <Button
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/aaliyan-ahmad-rao-4b387a27b")
              }
              variant="outline"
              className="border-2 border-[#A68A64] text-[#A68A64] font-semibold hover:bg-[#A68A64] hover:text-white px-8 py-3 rounded transition"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Animated Image */}
        <div className="md:w-1/2 flex justify-center relative group">
          <div className="relative w-72 h-72 rounded-full bg-[#A68A64]/10 flex items-center justify-center shadow-inner">
            <div className="absolute inset-0 rounded-full border-4 border-[#A68A64] animate-spin-slow" />
            <img
              src="/images/me4.jpg"
              alt="Aaliyan Ahmed - AI Engineer"
              className="rounded-full w-60 h-60 object-cover z-10 shadow-xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
