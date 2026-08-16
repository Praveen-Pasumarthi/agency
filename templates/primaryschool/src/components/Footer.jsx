import { GraduationCap, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="font-display text-2xl font-bold">SUNSHINE</span>
            </div>
            <p className="text-gray-400 text-sm">Nurturing young minds for a brighter tomorrow since 2010.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#programs" className="hover:text-blue-400">Programs</a></li>
              <li><a href="#facilities" className="hover:text-blue-400">Facilities</a></li>
              <li><a href="#why-us" className="hover:text-blue-400">Why Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 98765 43210</li>
              <li>Banjara Hills, Hyderabad</li>
              <li>Mon - Sat: 8AM - 3PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors text-sm font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors text-sm font-bold">
                WA
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Sunshine Primary School. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">Built with <Heart className="h-3 w-3 text-blue-400 fill-blue-400" /> by Praveen Dev</p>
        </div>
      </div>
    </footer>
  )
}
