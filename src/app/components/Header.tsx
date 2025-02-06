'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      {/* Üst bilgi şeridi */}
      <div className="bg-green-600 py-2 px-2 md:px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] md:text-sm">
          {/* Kayan Yazı */}
          <div className="flex-1 overflow-hidden mr-4">
            <div className="animate-marquee whitespace-nowrap text-white">
              <span className="inline-block">🌞 Güneş enerjisi ile geleceğe yatırım yapın!</span>
              <span className="inline-block mx-8">🌱 Doğa dostu enerji çözümleri</span>
              <span className="inline-block">💡 Profesyonel ekibimizle yanınızdayız</span>
              <span className="inline-block mx-8">⚡ Enerji maliyetlerinizi düşürün</span>
              <span className="inline-block">🏭 Endüstriyel ve bireysel çözümler</span>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="flex items-center flex-shrink-0">
            <a href="tel:+905303204154" className="flex items-center text-white hover:text-yellow-300 transition-colors duration-300 mr-2 md:mr-4">
              <span className="text-yellow-300 mr-1">📞</span>
              +90 (530) 320 4154
            </a>
            <a href="mailto:info@gunespanel.com" className="flex items-center text-white hover:text-yellow-300 transition-colors duration-300">
              <span className="text-yellow-300 mr-1">✉️</span>
              info@gunespanel.com
            </a>
          </div>
        </div>
      </div>

      {/* Ana header */}
      <div className="bg-green-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo ve Şirket Adı */}
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Şirket Logo"
                  width={30}
                  height={30}
                  className="object-contain rounded-full border-2 border-yellow-400 md:w-[40px] md:h-[40px] hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-white font-bold text-base md:text-xl leading-tight tracking-wide">
                <div>Güneş</div>
                <div>Panel</div>
              </div>
            </div>

            {/* Mobil Navigation */}
            <nav className="flex md:hidden">
              <ul className="flex space-x-2.5">
                <li>
                  <Link 
                    href="/" 
                    className="block bg-green-600 text-white px-3 py-2 rounded hover:bg-yellow-400 hover:text-green-800 hover:scale-105 transition-all duration-300 text-xs font-medium text-center border border-green-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-300/50"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/urunler" 
                    className="block bg-green-600 text-white px-3 py-2 rounded hover:bg-yellow-400 hover:text-green-800 hover:scale-105 transition-all duration-300 text-xs font-medium text-center border border-green-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-300/50"
                  >
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projeler" 
                    className="block bg-green-600 text-white px-3 py-2 rounded hover:bg-yellow-400 hover:text-green-800 hover:scale-105 transition-all duration-300 text-xs font-medium text-center border border-green-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-300/50"
                  >
                    Projeler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/iletisim" 
                    className="block bg-yellow-400 text-green-800 px-3 py-2 rounded hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300 text-xs font-medium text-center border border-yellow-300 hover:border-green-400 shadow-lg hover:shadow-green-600/50"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link 
                    href="/" 
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-green-800 hover:scale-105 transition-all duration-300 text-lg font-medium border border-green-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-300/50"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/urunler" 
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-green-800 hover:scale-105 transition-all duration-300 text-lg font-medium border border-green-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-300/50"
                  >
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projeler" 
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-green-800 hover:scale-105 transition-all duration-300 text-lg font-medium border border-green-400 hover:border-yellow-300 shadow-lg hover:shadow-yellow-300/50"
                  >
                    Projeler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/iletisim" 
                    className="bg-yellow-400 text-green-800 px-5 py-3 rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300 text-lg font-medium border-2 border-yellow-300 hover:border-green-400 shadow-lg hover:shadow-green-600/50"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 