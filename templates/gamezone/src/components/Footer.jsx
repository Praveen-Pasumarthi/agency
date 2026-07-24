import { Gamepad2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-purple-500" />
              <span className="font-display text-2xl font-bold">LEVEL UP</span>
            </div>
            <p className="text-gray-400 text-sm">The ultimate gaming destination in Visakhapatnam.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#games" className="hover:text-purple-400">Games</a></li>
              <li><a href="#pricing" className="hover:text-purple-400">Pricing</a></li>
              <li><a href="#party" className="hover:text-purple-400">Parties</a></li>
              <li><a href="#gallery" className="hover:text-purple-400">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 88862 59699</li>
              <li>Jagadamba Junction, Vizag</li>
              <li>Daily: 10AM - 10PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors text-sm font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors text-sm font-bold">
                WA
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Level Up Gaming Zone. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">Built with <Heart className="h-3 w-3 text-purple-500 fill-purple-500" /> by Praveen Dev</p>
        </div>
      </div>
    </footer>
  )
}
