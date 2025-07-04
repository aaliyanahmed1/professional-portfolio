export default function Footer() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Aaliyan Ahmed. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <button className="hover:text-accent transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-accent transition-colors">
              Terms of Service
            </button>
            <button 
              onClick={() => handleScroll("#contact")}
              className="hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
