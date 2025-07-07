import { Eye, Brain, MessageCircle, Cloud, TrendingUp, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Eye className="text-3xl text-white" />,
      title: "Computer Vision",
      description: "YOLO, OpenCV, object detection, tracking, and real-time vision systems",
      tags: ["YOLO", "OpenCV", "Object Detection","Motion Detection"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Brain className="text-3xl text-white" />,
      title: "Machine Learning",
      description: "Deep Learning with CNNs, RNNs, Transformers, and neural networks",
      tags: ["CNNs", "RNNs", "Transformers"],
      color: "bg-green-100 text-green-800"
    },
    {
      icon: <MessageCircle className="text-3xl text-white" />,
      title: "NLP & LLMs",
      description: "Fine-tuning BERT, GPT, Whisper, and building conversational AI",
      tags: ["BERT", "GPT", "Whisper","Pyttx3"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: <Cloud className="text-3xl text-white" />,
      title: "AI Deployment",
      description: "FastAPI, Docker, REST APIs, and cloud deployment solutions",
      tags: ["FastAPI", "Docker", "REST APIs"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: <TrendingUp className="text-3xl text-white" />,
      title: "Data Science",
      description: "pandas, NumPy, scikit-learn, matplotlib for data analysis",
      tags: ["pandas", "NumPy", "scikit-learn"],
      color: "bg-red-100 text-red-800"
    },
    {
      icon: <Settings className="text-3xl text-white" />,
      title: "Real-time Surveillance Systems",
      description: "Surveillance systems, automation, and real-time processing",
      tags: ["Python", "PyTorch", "TensorFlow","OpenCV"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section className="bg-[#1A2536] text-white py-16" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#A68A64] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the AI and machine learning spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="card-hover bg-[#222B3C] border border-white/10 shadow-md hover:shadow-xl transition-all"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-300 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <Badge key={tag} className={skill.color}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
