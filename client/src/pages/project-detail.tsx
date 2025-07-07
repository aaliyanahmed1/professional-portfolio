import { useRoute } from "wouter";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <section className="min-h-screen bg-[#1A2536] text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-lg text-gray-300 mb-6 whitespace-pre-line">
          {project.fullDescription}
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-white/10 px-3 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.media?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Media</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.media.map((src, idx) => {
                const ext = src.split(".").pop()?.toLowerCase() ?? "";
                const isVideo = ["mp4", "webm", "ogg"].includes(ext);
                const isImage = ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext);

                if (isVideo) {
                  return (
                    <video
                      key={idx}
                      src={src}
                      controls
                      className="rounded shadow w-full"
                    />
                  );
                }

                if (isImage) {
                  return (
                    <img
                      key={idx}
                      src={src}
                      alt={`media-${idx}`}
                      className="rounded shadow w-full"
                    />
                  );
                }

                return (
                  <p key={idx} className="text-red-500">
                    Unsupported media type: {src}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {project.github && (
          <div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
