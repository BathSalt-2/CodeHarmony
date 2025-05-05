import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: number | string;
  period: string;
  features: PricingFeature[];
  ctaText: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  period,
  features,
  ctaText,
  ctaVariant,
  popular = false,
}) => {
  return (
    <div className={`pricing-card relative ${popular ? 'border-primary-600 shadow-xl shadow-primary-600/10' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          {typeof price === 'number' ? (
            <>
              <span className="text-3xl font-bold">${price}</span>
              {period && <span className="text-white/70 ml-1">{period}</span>}
            </>
          ) : (
            <span className="text-3xl font-bold">{price}</span>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <Button variant={ctaVariant} fullWidth>
          {ctaText}
        </Button>
      </div>
      
      <div className="mt-auto">
        <h4 className="font-medium text-sm mb-4">What's included:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-success-500 mr-2 shrink-0" />
              ) : (
                <X size={18} className="text-white/30 mr-2 shrink-0" />
              )}
              <span className={feature.included ? "text-white/90" : "text-white/50"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;