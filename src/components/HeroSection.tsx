import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Code, Braces } from 'lucide-react';
import Button from './ui/Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400/80 to-dark-300/95"></div>
      
      {/* Animated Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code 
          className="absolute text-primary-600/20 animate-pulse-slow top-1/4 left-[10%]" 
          size={64} 
        />
        <Braces 
          className="absolute text-secondary-500/20 animate-pulse-slow top-1/3 right-[15%]" 
          size={48} 
        />
        <Code 
          className="absolute text-accent-500/20 animate-pulse-slow bottom-1/4 left-[20%]" 
          size={56} 
        />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col transition-all duration-700 ease-out delay-100">
            <div className={`transition-all duration-700 ease-out delay-100 ${animationClasses}`}>
              <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-500 text-sm font-medium mb-4">
                AI-Powered Code Generation
              </span>
            </div>
            
            <h1 className={`transition-all duration-700 ease-out delay-200 ${animationClasses} font-extrabold mb-6`}>
              <span className="block">Transform Your Ideas</span>
              <span className="gradient-text">Into Working Code</span>
            </h1>
            
            <p className={`transition-all duration-700 ease-out delay-300 ${animationClasses} text-xl text-white/80 mb-8 max-w-xl`}>
              CodeHarmony bridges the gap between your ideas and functional code. Simply describe what you want to build in natural language, and our AI generates production-ready code in seconds.
            </p>
            
            <div className={`transition-all duration-700 ease-out delay-400 ${animationClasses} flex flex-wrap gap-4`}>
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Play size={18} />}
              >
                Watch Demo
              </Button>
            </div>
            
            <div className={`transition-all duration-700 ease-out delay-500 ${animationClasses} mt-8 flex items-center gap-4`}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-dark-300 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-xs font-bold"
                  >
                    {/* User initial or avatar */}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-medium">1,000+</span> developers are coding smarter
              </p>
            </div>
          </div>
          
          {/* Right Column - Platform Interface Preview */}
          <div className={`transition-all duration-1000 ease-out delay-500 ${animationClasses}`}>
            <div className="relative rounded-xl overflow-hidden border border-dark-100 shadow-2xl shadow-primary-600/10">
              {/* Code Editor UI */}
              <div className="bg-dark-400 p-3 border-b border-dark-100 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error-500"></div>
                  <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                </div>
                <div className="text-xs font-mono text-white/50 ml-4">CodeHarmony IDE</div>
              </div>
              
              <div className="grid grid-cols-2 divide-x divide-dark-100">
                <div className="bg-dark-300 p-4">
                  <div className="text-xs font-mono text-white/50 mb-2">Input</div>
                  <div className="text-sm font-mono text-white/90 leading-relaxed">
                    Create a React component for a responsive navigation menu with a logo, links, and a mobile drawer.
                  </div>
                </div>
                <div className="bg-dark-400 p-4">
                  <div className="text-xs font-mono text-white/50 mb-2">Output</div>
                  <pre className="code-block text-xs">
                    <code className="language-jsx">
                      {`import React, { useState } from 'react';

// Responsive Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow">
      {/* Code implementation... */}
    </nav>
  );
};

export default Navbar;`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;