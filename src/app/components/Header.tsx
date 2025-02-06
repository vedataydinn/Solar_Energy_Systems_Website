'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      {/* Üst bilgi şeridi */}
      <div className="bg-green-600 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm">
          <a href="tel:+905303204154" className="flex items-center text-white hover:text-green-200 mr-6">
            <span className="text-yellow-300 mr-1">📞</span>
            +90 (530) 320 4154  
          </a>
          <a href="mailto:info@gunespanel.com" className="flex items-center text-white hover:text-green-200">
            <span className="text-yellow-300 mr-1">✉️</span>
            info@gunespanel.com
          </a>
        </div>
      </div>

      {/* Ana header */}
      <div className="bg-green-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo ve Şirket Adı */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Şirket Logo"
                  width={50}
                  height={50}
                  className="object-contain rounded-full border-2 border-yellow-400"
                />
              </div>
              <div className="text-white font-bold text-2xl tracking-wide">
                Güneş Panel
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center">
              <ul className="flex items-center space-x-5">
                <li>
                  <Link 
                    href="/" 
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-500 transition-all duration-300 text-lg font-medium border border-green-400 hover:border-white"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/urunler" 
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-500 transition-all duration-300 text-lg font-medium border border-green-400 hover:border-white"
                  >
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projeler" 
                    className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-500 transition-all duration-300 text-lg font-medium border border-green-400 hover:border-white"
                  >
                    Projeler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/iletisim" 
                    className="bg-yellow-400 text-green-800 px-7 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg border-2 border-yellow-300 hover:border-white"
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