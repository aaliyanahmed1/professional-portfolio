import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ProjectsSection() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Sign2Speech System",
      slug: "sign2speech",
      description:
        "Real-time sign language translator using YOLO, Ollama, and TTS technology",
      technologies: ["YOLO", "Ollama", "OpenCV", "TTS"],
      techColor: "bg-blue-100 text-blue-800",
      detail:
        "Challenge: Creating accessible communication for hearing-impaired individuals",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Human Trait Analyzer",
      slug: "human-trait-analyzer",
      description: "Face-based age, gender, and emotion prediction system",
      technologies: ["CNN", "OpenCV", "PyTorch"],
      techColor: "bg-green-100 text-green-800",
      detail: "Outcome: 94% accuracy in demographic and emotion detection",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Virtual Try-On System",
      slug: "virtual-tryon",
      description: "GAN-based fashion AI for virtual clothing trials",
      technologies: ["GAN", "Fashion AI", "Computer Vision"],
      techColor: "bg-purple-100 text-purple-800",
      detail: "Innovation: Revolutionizing online fashion shopping experience",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Object Detection Dashboard",
      slug: "object-detection-dashboard",
      description: "Vehicle & pedestrian detection with real-time alerting",
      technologies: ["YOLO", "FastAPI", "Real-time Processing"],
      techColor: "bg-yellow-100 text-yellow-800",
      detail: "Impact: Enhanced security and monitoring capabilities",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "AI Chatbot with Personality",
      slug: "ai-chatbot-personality",
      description: "GPT-powered game assistant with personality voting",
      technologies: ["GPT", "NLP", "Personality AI"],
      techColor: "bg-red-100 text-red-800",
      detail: "Feature: Dynamic personality adaptation based on user interaction",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Customer Service Bot",
      slug: "customer-service-bot",
      description: "RAG-based agent with order tracking capabilities",
      technologies: ["RAG", "Vector DB", "LLM"],
      techColor: "bg-indigo-100 text-indigo-800",
      detail: "Result: 80% reduction in manual customer service queries",
    },
  ];

  return (
    <section className="bg-[#1A2536] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#A68A64]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-card overflow-hidden">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className={project.techColor}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  <strong>{project.detail.split(":")[0]}:</strong>{" "}
                  {project.detail.split(":")[1]}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[#F4F6FA] hover:text-[#A68A64] transition-colors"
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
