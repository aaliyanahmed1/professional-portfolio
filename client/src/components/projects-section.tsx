import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Sign2Speech System",
      description: "Real-time sign language translator using YOLO and TTS technology",
      technologies: ["YOLO", "OpenCV", "TTS"],
      techColor: "bg-blue-100 text-blue-800",
      detail: "Challenge: Creating accessible communication for hearing-impaired individuals"
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Human Trait Analyzer",
      description: "Face-based age, gender, and emotion prediction system",
      technologies: ["CNN", "OpenCV", "PyTorch"],
      techColor: "bg-green-100 text-green-800",
      detail: "Outcome: 94% accuracy in demographic and emotion detection"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Virtual Try-On System",
      description: "GAN-based fashion AI for virtual clothing trials",
      technologies: ["GAN", "Fashion AI", "Computer Vision"],
      techColor: "bg-purple-100 text-purple-800",
      detail: "Innovation: Revolutionizing online fashion shopping experience"
    },
    {
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Object Detection Dashboard",
      description: "Vehicle & pedestrian detection with real-time alerting",
      technologies: ["YOLO", "FastAPI", "Real-time Processing"],
      techColor: "bg-yellow-100 text-yellow-800",
      detail: "Impact: Enhanced security and monitoring capabilities"
    },
    {
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "AI Chatbot with Personality",
      description: "GPT-powered game assistant with personality voting",
      technologies: ["GPT", "NLP", "Personality AI"],
      techColor: "bg-red-100 text-red-800",
      detail: "Feature: Dynamic personality adaptation based on user interaction"
    },
    {
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Customer Service Bot",
      description: "RAG-based agent with order tracking capabilities",
      technologies: ["RAG", "Vector DB", "LLM"],
      techColor: "bg-indigo-100 text-indigo-800",
      detail: "Result: 80% reduction in manual customer service queries"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative AI solutions that make a real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-slate-50 overflow-hidden">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className={project.techColor}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>{project.detail.split(':')[0]}:</strong> {project.detail.split(':')[1]}
                </p>
                <Button variant="ghost" className="text-primary hover:text-secondary p-0 h-auto">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
