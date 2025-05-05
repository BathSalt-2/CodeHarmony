import React from 'react';
import { Star } from 'lucide-react';
import TestimonialCard from './ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "CodeHarmony cut our development time in half. The code it generates is clean, well-documented, and follows our team's coding standards. It's like having an extra senior developer on the team.",
      author: "Sarah Johnson",
      role: "Lead Developer, TechStream",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "As a startup founder with limited technical resources, CodeHarmony has been a game-changer. I can now implement features much faster and with fewer bugs than I could on my own.",
      author: "Michael Chen",
      role: "Founder, InnovatX",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "What impressed me most about CodeHarmony is how it learns our coding patterns and style. After a few projects, it was generating code that fit seamlessly with our existing codebase.",
      author: "Alex Rivera",
      role: "Senior Engineer, DevFlow",
      rating: 4,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      content: "I was skeptical about AI-generated code, but CodeHarmony proved me wrong. It doesn't just spit out generic solutions—it creates thoughtful, optimized code that's ready for production.",
      author: "Emily Wang",
      role: "CTO, BuildBetter",
      rating: 5,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="section-padding bg-dark-300">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Trusted by <span className="gradient-text">Developers</span> Worldwide
          </h2>
          <p className="text-white/70 text-lg">
            Thousands of developers and companies are using CodeHarmony to accelerate their workflow and build better software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-600/20 to-secondary-500/20 rounded-xl p-8 border border-primary-600/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <h3 className="text-4xl font-bold mb-2 gradient-text">10,000+</h3>
                <p className="text-white/70">Active Users</p>
              </div>
              <div className="p-4">
                <h3 className="text-4xl font-bold mb-2 gradient-text">5M+</h3>
                <p className="text-white/70">Lines of Code Generated</p>
              </div>
              <div className="p-4">
                <h3 className="text-4xl font-bold mb-2 gradient-text">95%</h3>
                <p className="text-white/70">Code Acceptance Rate</p>
              </div>
              <div className="p-4">
                <h3 className="text-4xl font-bold mb-2 gradient-text">15+</h3>
                <p className="text-white/70">Frameworks Supported</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-3xl font-medium mb-6">
            Join the thousands of developers who are coding smarter with CodeHarmony.
          </p>
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={24} className="fill-warning-500 text-warning-500" />
            ))}
          </div>
          <p className="text-white/70">
            Average rating of 4.9/5 from over 500 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;