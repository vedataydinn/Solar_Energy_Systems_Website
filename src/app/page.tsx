'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/solar ekipmanlar.jpg',
      title: 'Solar Ekipmanlar',
    },
    {
      id: 2,
      image: '/inverterler.jpg',
      title: 'İnvertör Sistemleri',
    },
    {
      id: 3,
      image: '/aküler.jpg',
      title: 'Akü Sistemleri',
    },
    {
      id: 4,
      image: '/şarj kontrol cihazları.jpg',
      title: 'Şarj Kontrol Sistemleri',
    },
    {
      id: 5,
      image: '/ısı pompası.jpg',
      title: 'Isı Pompası Sistemleri',
    },
    {
      id: 6,
      image: '/dalgıç pompası.jpg',
      title: 'Dalgıç Pompa Sistemleri',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (slides.length - 2))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Ana İçerik */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-[90vh] relative">
          {/* Arka plan resmi */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/solar-background.jpg"
              alt="Güneş Enerjisi Arka Plan"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Ana sayfa içeriği */}
          <div className="relative z-10 text-white text-center pt-12">
            <h1 className="text-6xl font-extrabold mb-4 text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-pulse">
              Güneş Enerjisi Çözümleri
            </h1>
            <p className="text-2xl mb-8 text-black font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Sürdürülebilir ve temiz enerji için doğru adres
            </p>
          </div>

          {/* Kayan Ürün Resimleri */}
          <div className="max-w-7xl mx-auto px-4 overflow-hidden mt-16">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
              {slides.map((slide) => (
                <div 
                  key={slide.id}
                  className="min-w-[33.33%] px-4"
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={600}
                      className="object-cover w-full h-[350px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">{slide.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İkinci bölüm - Ürün detayları */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Tüm Ürünlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Detaylı Ürün 1 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/solar ekipmanlar.jpg"
                    alt="Solar Ekipmanlar"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Solar Ekipmanlar</h3>
                  <p className="text-gray-600 mb-4">Güneş enerjisi sistemleri için yüksek kaliteli ekipman çözümleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 2 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/şarj kontrol cihazları.jpg"
                    alt="Şarj Kontrol Cihazları"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Şarj Kontrol Cihazları</h3>
                  <p className="text-gray-600 mb-4">Akıllı şarj kontrolü ile sistem verimliliğini maksimuma çıkarın</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 3 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/ısı pompası.jpg"
                    alt="Isı Pompası"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Isı Pompası</h3>
                  <p className="text-gray-600 mb-4">Verimli ısıtma ve soğutma için yenilikçi ısı pompası sistemleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 4 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/dalgıç pompası.jpg"
                    alt="Dalgıç Pompası"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dalgıç Pompası</h3>
                  <p className="text-gray-600 mb-4">Güneş enerjili sulama sistemleri için özel dalgıç pompa çözümleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 5 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/aküler.jpg"
                    alt="Aküler"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Aküler</h3>
                  <p className="text-gray-600 mb-4">Uzun ömürlü ve yüksek performanslı enerji depolama çözümleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 6 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/inverterler.jpg"
                    alt="İnverterler"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">İnverterler</h3>
                  <p className="text-gray-600 mb-4">Yüksek verimli ve güvenilir inverter sistemleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 7 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/solar ekipmanlar.jpg"
                    alt="Solar Ekipmanlar"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Solar Ekipmanlar</h3>
                  <p className="text-gray-600 mb-4">Güneş enerjisi sistemleri için profesyonel ekipman çözümleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 8 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/şarj kontrol cihazları.jpg"
                    alt="Şarj Kontrol Cihazları"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Şarj Kontrol Cihazları</h3>
                  <p className="text-gray-600 mb-4">Akıllı şarj yönetimi ve sistem optimizasyonu</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

              {/* Detaylı Ürün 9 */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/ısı pompası.jpg"
                    alt="Isı Pompası"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Isı Pompası</h3>
                  <p className="text-gray-600 mb-4">Enerji tasarruflu ısıtma ve soğutma sistemleri</p>
                  <Link href="/urunler" className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Bilgi →</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Proje Aşamaları Bölümü */}
        <section className="bg-gradient-to-b from-white to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Proje Aşamalarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plan */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900">1</div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Plan</h3>
                  <p className="text-gray-600">Projenizin detaylı planlaması ve enerji ihtiyaç analizi yapılır.</p>
                  <div className="mt-6 group-hover:animate-bounce">
                    <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="mt-8 rounded-lg overflow-hidden">
                    <Image
                      src="/plan.jpg"
                      alt="Planlama Aşaması"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Proje */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900">2</div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Proje</h3>
                  <p className="text-gray-600">Sistem tasarımı ve ekipman seçimi ile projeniz hazırlanır.</p>
                  <div className="mt-6 group-hover:animate-bounce">
                    <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="mt-8 rounded-lg overflow-hidden">
                    <Image
                      src="/proje.jpg"
                      alt="Proje Aşaması"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Anahtar Teslim */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900">3</div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Anahtar Teslim</h3>
                  <p className="text-gray-600">Kurulum, test ve devreye alma işlemleri tamamlanır.</p>
                  <div className="mt-6 group-hover:animate-bounce">
                    <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <div className="mt-8 rounded-lg overflow-hidden">
                    <Image
                      src="/teslim.jpg"
                      alt="Anahtar Teslim Aşaması"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
