import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SARD India</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Sony Audio Research & Development - Your trusted partner for engineering excellence across Sony's global product lines.
            </p>
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#journey" className="text-sm text-white/70 hover:text-white transition-colors">Our Journey</a></li>
              <li><a href="#technical" className="text-sm text-white/70 hover:text-white transition-colors">Technical Excellence</a></li>
              <li><a href="#domains" className="text-sm text-white/70 hover:text-white transition-colors">Domain Excellence</a></li>
              <li><a href="#devices" className="text-sm text-white/70 hover:text-white transition-colors">Device Excellence</a></li>
            </ul>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Verticals</h4>
            <ul className="space-y-2">
              <li><a href="#verticals" className="text-sm text-white/70 hover:text-white transition-colors">Sony Interactive Entertainment</a></li>
              <li><a href="#verticals" className="text-sm text-white/70 hover:text-white transition-colors">Sony Semiconductor Solutions</a></li>
              <li><a href="#verticals" className="text-sm text-white/70 hover:text-white transition-colors">Sony Home Entertainment</a></li>
              <li><a href="#verticals" className="text-sm text-white/70 hover:text-white transition-colors">Sony Imaging Products</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Sony India Software Centre Pvt. Ltd.</li>
              <li>Bangalore, Karnataka</li>
              <li>India</li>
              <li><a href="mailto:sard.india@sony.com" className="hover:text-white transition-colors">sard.india@sony.com</a></li>
              <li><a href="tel:+918040408000" className="hover:text-white transition-colors">+91 80 4040 8000</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {currentYear} Sony India Software Centre Pvt. Ltd. All rights reserved.
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
