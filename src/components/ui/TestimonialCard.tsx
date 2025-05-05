import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  rating,
  image,
}) => {
  return (
    <div className="testimonial-card">
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={i < rating ? "fill-warning-500 text-warning-500" : "text-white/20"}
          />
        ))}
      </div>
      
      <blockquote className="mb-6">
        <p className="text-white/80 italic">"{content}"</p>
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-white/60 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;