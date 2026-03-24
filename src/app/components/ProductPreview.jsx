import { ImageWithFallback } from "./ux/ImageWithFallback";
import { TrendingUp, Eye, MousePointer, Users } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Crisis Management Preview */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Crisis Dashboard
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Your Central{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Crisis Hub
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manage CRises efficiently, track progress, and turn challenges into opportunities with Crise. Fully customizable dashboards and insights tailored for you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Unlimited Crisis Tracking</h4>
                  <p className="text-gray-600">Monitor as many CRises as needed with no restrictions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Customizable Dashboards</h4>
                  <p className="text-gray-600">Arrange charts, alerts, and reports to fit your workflow.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mobile Friendly</h4>
                  <p className="text-gray-600">Access your crisis hub anytime, anywhere, on any device.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-purple-200/50 shadow-2xl p-8 max-w-sm mx-auto">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1573495612937-d3b112c5a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                      alt="Crisis Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">@CriseDashboard</h3>
                  <p className="text-sm text-white/80 mb-6">Crisis Management Platform</p>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                  <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                  <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                  <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Analytics Dashboard Preview */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-2xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
                    <Eye className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-bold mb-1">12.5K</div>
                    <div className="text-sm text-white/80">Total CRises Monitored</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
                    <MousePointer className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-bold mb-1">8.2K</div>
                    <div className="text-sm text-white/80">Actions Taken</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Weekly Overview</span>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Analytics Dashboard
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Data-Driven{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get real-time analytics and detailed insights into how CRises are handled, helping you make informed decisions and optimize your strategies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Monitoring</h4>
                  <p className="text-gray-600">Track CRises and actions as they happen in real-time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Global Overview</h4>
                  <p className="text-gray-600">See where CRises occur and how they are managed worldwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Export Reports</h4>
                  <p className="text-gray-600">Download detailed reports for deeper analysis and decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}