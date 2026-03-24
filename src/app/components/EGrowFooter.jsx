import TwitterIcon from '@mui/icons-material/twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/linkedin';
import YoutubeIcon from '@mui/icons-material/youtube';


export function EGrowFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                EGrow
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Grow your online presence with powerful bio links and analytics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <TwitterIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <InstagramIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <LinkedinIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <YoutubeIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 EGrow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
