import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SARD INDIA</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Sony's premier R&D center delivering world-class engineering solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#domains" className="text-sm text-white/70 hover:text-white transition-colors">Domains</a></li>
              <li><a href="#case-studies" className="text-sm text-white/70 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#connect" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Domains</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/70">PlayStation</li>
              <li className="text-sm text-white/70">Television</li>
              <li className="text-sm text-white/70">Camera</li>
              <li className="text-sm text-white/70">Emerging Tech</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {currentYear} Sony India Software Centre. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
