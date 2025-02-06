'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      {/* WhatsApp Sabit Buton */}
      <div className="fixed bottom-0 right-0 left-0 z-50">
        {/* Gradient Arka Plan */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none h-32 -top-32" />
        
        {/* WhatsApp Butonu */}
        <div className="container mx-auto px-4 pb-4 flex justify-end">
          <a
            href="https://wa.me/905303204154"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 hover:scale-105 animate-bounce"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
            }}
          >
            <FaWhatsapp size={28} className="animate-pulse" />
            <span className="font-semibold text-lg">WhatsApp ile Mesaj Gönderin</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Şirket Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">Güneş Panel</h3>
            <p className="text-gray-400 mb-4">
              Sürdürülebilir enerji çözümleri ile geleceğe yatırım yapın.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-green-500 transition-colors">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-green-500 transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-green-500 transition-colors">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-green-500 transition-colors">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-gray-400 hover:text-green-500 transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-green-500 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-green-500 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürünlerimiz */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ürünlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/urunler#solar" className="text-gray-400 hover:text-green-500 transition-colors">
                  Solar Ekipmanlar
                </Link>
              </li>
              <li>
                <Link href="/urunler#inverter" className="text-gray-400 hover:text-green-500 transition-colors">
                  İnverterler
                </Link>
              </li>
              <li>
                <Link href="/urunler#aku" className="text-gray-400 hover:text-green-500 transition-colors">
                  Aküler
                </Link>
              </li>
              <li>
                <Link href="/urunler#sarj" className="text-gray-400 hover:text-green-500 transition-colors">
                  Şarj Kontrol Cihazları
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-green-500" />
                <span className="text-gray-400">+90 555 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-green-500" />
                <span className="text-gray-400">info@gunespanel.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-500" />
                <span className="text-gray-400">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Güneş Panel. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </footer>
  )
} 