import React from 'react';
import { Code2, Twitter, Linkedin, Github, Youtube, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Footer = () => {
  return (
    <footer className="bg-dark-400 pt-16 border-t border-dark-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={32} className="text-primary-600" />
              <span className="text-xl font-bold">CodeHarmony</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transform your ideas into working code with the power of AI. 
              CodeHarmony bridges the gap between natural language and functional code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Integrations</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Changelog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Press</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">API Docs</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 pb-6 border-t border-dark-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} CodeHarmony. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-600/20 via-secondary-500/20 to-accent-500/20 border-t border-primary-600/20">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your coding workflow?</h3>
              <p className="text-white/70">Join thousands of developers coding smarter, not harder.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;