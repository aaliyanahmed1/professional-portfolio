import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 hero-gradient text-white">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Aaliyan Ahmed</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-6">
              AI Engineer | Computer Vision Specialist
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              With 3+ years of hands-on experience, I build intelligent systems that solve real-world problems. 
              From computer vision pipelines to NLP applications, I deliver cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScroll("#projects")}
                className="bg-accent hover:bg-cyan-600 text-white px-8 py-3 text-center"
              >
                View My Work
              </Button>
              <Button
                onClick={() => handleScroll("#contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-center"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace with multiple monitors displaying code and AI models"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
