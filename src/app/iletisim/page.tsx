'use client'

import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/solar-background.jpg"
          alt="İletişim Arka Plan"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Bize Ulaşın</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              Güneş enerjisi çözümleri için yanınızdayız
            </p>
          </div>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Sol Taraf - Şirket Bilgileri */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hakkımızda</h2>
              <p className="text-gray-600 leading-relaxed">
                2010 yılından bu yana güneş enerjisi sektöründe faaliyet gösteren firmamız, 
                sürdürülebilir enerji çözümleri konusunda Türkiye'nin önde gelen şirketlerinden biridir. 
                Deneyimli ekibimiz ve kaliteli ürün yelpazemiz ile müşterilerimize en iyi hizmeti 
                sunmaya devam ediyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Yenilenebilir enerji kaynaklarını kullanarak, çevre dostu ve sürdürülebilir 
                bir gelecek için çalışıyoruz. Müşterilerimize en yüksek kalitede güneş enerjisi 
                sistemleri sunarak, enerji bağımsızlığı yolunda güvenilir bir çözüm ortağı olmayı 
                hedefliyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Değerlerimiz</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Kalite</h3>
                  <p className="text-gray-600">En yüksek kalite standartlarında ürün ve hizmet</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Güven</h3>
                  <p className="text-gray-600">Şeffaf ve güvenilir iş ilişkileri</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Yenilikçilik</h3>
                  <p className="text-gray-600">Sürekli gelişim ve teknolojik yenilikler</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Sürdürülebilirlik</h3>
                  <p className="text-gray-600">Çevre dostu çözümler ve yaklaşımlar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İletişim Bilgileri */}
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">İletişim Bilgilerimiz</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefon</h3>
                    <p className="text-gray-600">+90 (530) 320 4154</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaEnvelope className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">E-posta</h3>
                    <p className="text-gray-600">info@gunespanel.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Adres</h3>
                    <p className="text-gray-600">Sarayatik, Hacı Hayri Cd., 23100 Merkez/Elazığ<br />Elazığ , Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Harita */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80 transform hover:scale-105 transition-transform duration-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.238327136369!2d39.223255!3d38.6706685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQwJzE0LjIiTiAzOcKwMTMnMjQuOCJF!5e0!3m2!1str!2str!4v1710164144811!5m2!1str!2str"

                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* WhatsApp İletişim */}
            <div className="bg-green-500 rounded-2xl shadow-lg p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Hızlı İletişim</h2>
                  <p>7/24 WhatsApp üzerinden bize ulaşabilirsiniz</p>
                </div>
                <a 
                  href="https://wa.me/905303204154" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-green-50 transition-colors"
                >
                  <FaWhatsapp size={24} />
                  <span>Mesaj Gönder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 