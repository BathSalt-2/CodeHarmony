import React from 'react';
import { Sparkles, MoveRight, Smartphone, Workflow, Users, Wand2, Zap, Code2 } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Sparkles className="text-primary-500" size={24} />,
      title: "VibeCodeAI",
      description: "Our proprietary AI understands your intent and coding style, producing consistent and personalized code that matches your project's needs."
    },
    {
      id: 2,
      icon: <Smartphone className="text-secondary-500" size={24} />,
      title: "Mobile Optimization",
      description: "Generate responsive, mobile-first code that works flawlessly across all devices and screen sizes without additional tweaking."
    },
    {
      id: 3,
      icon: <Zap className="text-accent-500" size={24} />,
      title: "Production Ready",
      description: "Get code that's optimized for performance, accessibility, and best practices — ready to ship without extensive refactoring."
    },
    {
      id: 4,
      icon: <Users className="text-warning-500" size={24} />,
      title: "Collaborative Coding",
      description: "Share your projects, iterate together, and maintain a consistent codebase across your entire team."
    },
    {
      id: 5,
      icon: <Code2 className="text-success-500" size={24} />,
      title: "Multi-Framework Support",
      description: "Generate code for popular frameworks including React, Vue, Angular, Next.js, and many more."
    },
    {
      id: 6,
      icon: <Wand2 className="text-error-500" size={24} />,
      title: "Intelligent Refactoring",
      description: "Transform legacy code into modern, maintainable solutions with our AI-powered refactoring capabilities."
    }
  ];

  return (
    <section id="features" className="section-padding bg-dark-400">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">Powerful Features</span> for Modern Development
          </h2>
          <p className="text-white/70 text-lg">
            CodeHarmony combines natural language processing with deep programming knowledge to provide
            an unparalleled code generation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#demo" className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium">
            See it in action
            <MoveRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;