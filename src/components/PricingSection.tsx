import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './ui/Button';
import PricingCard from './ui/PricingCard';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for trying out CodeHarmony',
      price: 0,
      period: 'forever',
      ctaText: 'Get Started',
      ctaVariant: 'outline',
      features: [
        { text: '100 code generations per month', included: true },
        { text: 'Basic language model', included: true },
        { text: 'Web snippet generation', included: true },
        { text: 'Community support', included: true },
        { text: 'Mobile app development', included: false },
        { text: 'API integration', included: false },
        { text: 'Priority support', included: false },
      ]
    },
    {
      id: 'basic',
      name: 'Basic',
      description: 'For individual developers and small projects',
      price: 19,
      period: 'per month',
      ctaText: 'Start 7-Day Trial',
      ctaVariant: 'secondary',
      features: [
        { text: '1,000 code generations per month', included: true },
        { text: 'Standard language model', included: true },
        { text: 'Web, mobile, and backend code', included: true },
        { text: 'Email support', included: true },
        { text: 'Project organization', included: true },
        { text: 'API integration', included: false },
        { text: 'Priority support', included: false },
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For professional developers and teams',
      price: 49,
      period: 'per month',
      ctaText: 'Start 7-Day Trial',
      ctaVariant: 'primary',
      popular: true,
      features: [
        { text: 'Unlimited code generations', included: true },
        { text: 'Advanced language model', included: true },
        { text: 'All code types and frameworks', included: true },
        { text: 'Priority support', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'API integration', included: true },
        { text: 'Custom templates', included: true },
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: 'Custom',
      period: '',
      ctaText: 'Contact Sales',
      ctaVariant: 'outline',
      features: [
        { text: 'Everything in Pro plan', included: true },
        { text: 'Enterprise-grade security', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom API limits', included: true },
        { text: 'SSO integration', included: true },
        { text: 'Custom model training', included: true },
        { text: 'SLA guarantees', included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-dark-400">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-white/70 text-lg">
            Choose the plan that works best for you or your team. All plans come with a 7-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              ctaText={plan.ctaText}
              ctaVariant={plan.ctaVariant}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        <div className="mt-16 p-6 bg-dark-300 rounded-xl border border-dark-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Need something more specific?
          </h3>
          <p className="text-white/70 mb-6">
            Our enterprise plans offer advanced features, additional security, and custom API limits. Let's discuss how CodeHarmony
            can meet your organization's specific needs.
          </p>
          <Button variant="primary">Contact Our Sales Team</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;