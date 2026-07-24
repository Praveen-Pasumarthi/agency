import { Baby, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Baby className="h-8 w-8 text-orange-400" />
              <span className="font-display text-2xl font-bold">FUNLAND</span>
            </div>
            <p className="text-gray-400 text-sm">Where kids explore, learn, and have fun!</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#activities" className="hover:text-orange-400">Activities</a></li>
              <li><a href="#pricing" className="hover:text-orange-400">Pricing</a></li>
              <li><a href="#birthday" className="hover:text-orange-400">Birthdays</a></li>
              <li><a href="#safety" className="hover:text-orange-400">Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 79899 37705</li>
              <li>Maddilapalem, Vizag</li>
              <li>Daily: 11AM - 9PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-sm font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-sm font-bold">
                WA
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 FunLand Kids Play Zone. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">Built with <Heart className="h-3 w-3 text-orange-400 fill-orange-400" /> by Praveen Dev</p>
        </div>
      </div>
    </footer>
  )
}
