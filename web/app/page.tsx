export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                To<span className="text-purple-400">Moviee</span>
              </h1>
            </div>
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">Movies</a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">TV Shows</a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">Trending</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Your Next
              <span className="block text-purple-400">Favorite Movie</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore millions of movies and TV shows. Get personalized recommendations 
              and stream your favorites anytime, anywhere.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for movies, TV shows, actors..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Start Watching
              </button>
              <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Browse Library
              </button>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Action", icon: "⚡", color: "from-red-500 to-orange-500" },
              { name: "Comedy", icon: "😄", color: "from-yellow-500 to-red-500" },
              { name: "Drama", icon: "🎭", color: "from-blue-500 to-purple-500" },
              { name: "Sci-Fi", icon: "🚀", color: "from-green-500 to-blue-500" },
              { name: "Horror", icon: "👻", color: "from-purple-500 to-red-500" },
              { name: "Romance", icon: "💕", color: "from-pink-500 to-red-500" },
              { name: "Thriller", icon: "🔥", color: "from-gray-500 to-red-500" },
              { name: "Documentary", icon: "📹", color: "from-teal-500 to-blue-500" },
            ].map((category) => (
              <div
                key={category.name}
                className={`bg-gradient-to-br ${category.color} p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-white font-semibold">{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h3 className="text-2xl font-bold text-white mb-8">Trending Now</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[2/3] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="text-white font-bold text-lg">Movie {i + 1}</div>
                  </div>
                  <div className="text-white text-sm font-medium">Popular Movie Title</div>
                  <div className="text-gray-400 text-xs">2024 • Action</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">
                To<span className="text-purple-400">Moviee</span>
              </h4>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for discovering and streaming the latest movies and TV shows.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Browse</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Popular Movies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TV Shows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Top Rated</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SID — U.S.–Indonesia Capital Bridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
