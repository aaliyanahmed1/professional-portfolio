import { Eye, Brain, MessageCircle, Cloud, TrendingUp, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Eye className="text-3xl" />,
      title: "Computer Vision",
      description: "YOLO, OpenCV, object detection, tracking, and real-time vision systems",
      tags: ["YOLO", "OpenCV", "Object Detection"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Brain className="text-3xl" />,
      title: "Machine Learning",
      description: "Deep Learning with CNNs, RNNs, Transformers, and neural networks",
      tags: ["CNNs", "RNNs", "Transformers"],
      color: "bg-green-100 text-green-800"
    },
    {
      icon: <MessageCircle className="text-3xl" />,
      title: "NLP & LLMs",
      description: "Fine-tuning BERT, GPT, Whisper, and building conversational AI",
      tags: ["BERT", "GPT", "Whisper"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: <Cloud className="text-3xl" />,
      title: "AI Deployment",
      description: "FastAPI, Docker, REST APIs, and cloud deployment solutions",
      tags: ["FastAPI", "Docker", "REST APIs"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: <TrendingUp className="text-3xl" />,
      title: "Data Science",
      description: "pandas, NumPy, scikit-learn, matplotlib for data analysis",
      tags: ["pandas", "NumPy", "scikit-learn"],
      color: "bg-red-100 text-red-800"
    },
    {
      icon: <Settings className="text-3xl" />,
      title: "Real-time Systems",
      description: "Surveillance systems, automation, and real-time processing",
      tags: ["Python", "PyTorch", "TensorFlow"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the AI and machine learning spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardContent className="p-6">
                <div className="text-accent mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{skill.title}</h3>
                <p className="text-slate-600 mb-4">{skill.description}</p>
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
