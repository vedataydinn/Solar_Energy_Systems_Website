'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Arka plan resmi */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/solar-background.jpg"
          alt="Güneş Enerjisi Arka Plan"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Navigasyon menüsü */}
      <nav className="relative z-10 p-6">
        <ul className="flex space-x-8 text-white font-semibold text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link href="/urunler" className="hover:text-yellow-400 transition-colors">
              Ürünler
            </Link>
          </li>
          <li>
            <Link href="/projeler" className="hover:text-yellow-400 transition-colors">
              Yapılan Projeler
            </Link>
          </li>
          <li>
            <Link href="/iletisim" className="hover:text-yellow-400 transition-colors">
              İletişim
            </Link>
          </li>
        </ul>
      </nav>

      {/* Ana sayfa içeriği */}
      <div className="relative z-10 text-white text-center pt-32">
        <h1 className="text-5xl font-bold mb-4">Güneş Enerjisi Çözümleri</h1>
        <p className="text-xl mb-24">Sürdürülebilir ve temiz enerji için doğru adres</p>

        {/* Ürün resimleri */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ürün 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/product1.jpg"
                alt="Ürün 1"
                width={400}
                height={600}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Güneş Panelleri</span>
              </div>
            </div>

            {/* Ürün 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/product2.jpg"
                alt="Ürün 2"
                width={400}
                height={600}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">İnvertör Sistemleri</span>
              </div>
            </div>

            {/* Ürün 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/product3.jpg"
                alt="Ürün 3"
                width={400}
                height={600}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Akü Sistemleri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
