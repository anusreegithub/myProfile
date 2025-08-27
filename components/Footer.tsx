import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            Made with <Heart size={16} className="text-red-500" /> by Anusree Pankan
          </p>
          <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
