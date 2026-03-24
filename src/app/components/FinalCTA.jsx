import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Join 10,000+ CRise managers today</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
            Ready to Manage Your
            <br />
            CRises Effectively?
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the power of CRise—track, analyze, and optimize your CRises like never before.
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="h-14 px-6 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white/50"
              />
              <Button 
                size="lg" 
                className="h-14 px-8 bg-white text-purple-600 hover:bg-gray-100 font-semibold group whitespace-nowrap"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10K+</div>
              <div className="text-sm opacity-80">Active CRise Managers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">2M+</div>
              <div className="text-sm opacity-80">CRises Tracked</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">150+</div>
              <div className="text-sm opacity-80">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}