import { GraduationCap, Briefcase, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/attached_assets/WhatsApp Image 2025-07-05 at 01.22.16_55149d4a_1751666978183.jpg"
              alt="Professional headshot of AI engineer Aaliyan Ahmed"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">AI Engineer | Computer Vision Specialist</h3>
            <p className="text-lg text-slate-600 mb-6">
              I hold a Bachelor's degree in Artificial Intelligence (BS AI) and have dedicated over 3 years to 
              mastering the art and science of AI engineering. My journey has been marked by continuous learning 
              and practical application of cutting-edge technologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="text-accent text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Education</h4>
                  <p className="text-slate-600">Bachelor's in Artificial Intelligence (BS AI)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Briefcase className="text-accent text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Experience</h4>
                  <p className="text-slate-600">3+ years as AI Engineer (freelance)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Trophy className="text-accent text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Projects Delivered</h4>
                  <p className="text-slate-600">Multiple successful AI projects for global clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
