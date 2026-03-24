import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Unlimited links",
      "Basic analytics",
      "Mobile optimized",
      "Custom bio page",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious creators",
    features: [
      "Everything in Free",
      "Advanced analytics",
      "Custom domains",
      "Remove EGrow branding",
      "Priority support",
      "Detailed insights",
      "Export data",
      "Custom themes",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that works best for you. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-2xl shadow-purple-100/50 bg-white' 
                  : 'border-2 border-gray-200 bg-white/60 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-10">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-purple-100' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-purple-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}