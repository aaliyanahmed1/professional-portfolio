import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { SiLinkedin, SiFiverr, SiGithub } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-hero-gradient text-primary-foreground py-16" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your AI vision to life? Let's discuss your project and create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Mail className="text-accent text-xl" />
                <span>aaliyanahmedrajput@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-accent text-xl" />
                <span>+92 3130457996</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-accent text-xl" />
                <span>Available for Remote Work</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open("https://www.linkedin.com/in/aaliyan-ahmad-rao-4b387a27b", "_blank")}
                className="bg-primary hover:bg-primary/90 vibrant-glow"
              >
                <SiLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                onClick={() => window.open("https://github.com/aaliyanahmed1", "_blank")}
                className="bg-accent hover:bg-accent/90"
              >
                <SiGithub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button 
                onClick={() => window.open("/attached_assets/AALIYAN-AHMED_1751667000088.pdf", "_blank")}
                className="gradient-bg text-white hover:opacity-90"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          <div>
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectType" className="text-white">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-vision">Computer Vision</SelectItem>
                        <SelectItem value="nlp-chatbots">NLP & Chatbots</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                        <SelectItem value="ai-deployment">AI Deployment</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 min-h-[100px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-cyan-600"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
