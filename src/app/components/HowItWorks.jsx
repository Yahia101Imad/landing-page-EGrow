import { UserPlus, FileText, BarChart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Account",
    description: "Sign up in seconds to access all Crise tools and features. No credit card required.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Add CRises Data",
    description: "Input key information about your CRises to get a full, detailed analysis.",
  },
  {
    icon: BarChart,
    number: "03",
    title: "Track Progress",
    description: "Monitor results and follow recommendations to make fast, informed decisions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            From signup to success in just minutes. No technical skills required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -translate-x-1/2"></div>
                )}
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-xl shadow-purple-100/50 mb-6 border-2 border-purple-100 relative z-10">
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <Icon className="w-12 h-12 text-purple-600" />
                  </div>
                  
                  <div className="text-6xl font-bold text-purple-100 mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-2xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
