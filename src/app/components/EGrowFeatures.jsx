import { Link2, BarChart3, Users, Zap, Shield, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Link2,
    title: "Smart Bio Links",
    description: "Create beautiful, customizable bio link pages that showcase all your important links in one place.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track clicks, views, and engagement with real-time analytics and detailed insights.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Understand your audience better with demographic data and behavior patterns.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures your links load instantly, keeping your audience engaged.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime to keep your links always accessible.",
    gradient: "from-pink-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Design your pages to match your brand with custom themes, colors, and layouts.",
    gradient: "from-blue-500 to-purple-500",
  },
];

export function EGrowFeatures() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools designed to help you grow your online presence and connect with your audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 bg-white/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
