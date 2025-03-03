'use client'


import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'

const urunler = [
  {
    id: 1,
    title: 'Güneş Paneli',
    description: 'Yüksek verimli ve dayanıklı güneş panelleri',
    image: '/güneşpanelleri.jpg',
    features: [
      'Yüksek enerji verimliliği',
      'UV ve hava koşullarına dayanıklı',
      '25 yıl ürün garantisi',
      'Kolay montaj sistemi'
    ]
  },
  {
    id: 2,
    title: 'Solar Ekipmanlar',
    description: 'Güneş enerjisi sistemleri için profesyonel ekipmanlar',
    image: '/solar ekipmanlar.jpg',
    features: [
      'Kaliteli malzeme',
      'Uzun ömürlü kullanım',
      'Kolay kurulum',
      'Teknik destek'
    ]
  },
  {
    id: 3,
    title: 'İnverterler',
    description: 'Güvenilir ve verimli inverter sistemleri',
    image: '/inverterler.jpg',
    features: [
      'Akıllı izleme sistemi',
      'Yüksek verimlilik',
      'Kompakt tasarım',
      'Sessiz çalışma'
    ]
  },
  {
    id: 4,
    title: 'Aküler',
    description: 'Uzun ömürlü enerji depolama çözümleri',
    image: '/aküler.jpg',
    features: [
      'Yüksek depolama kapasitesi',
      'Hızlı şarj özelliği',
      'Uzun kullanım ömrü',
      'Düşük bakım gereksinimi'
    ]
  },
  {
    id: 5,
    title: 'Şarj Kontrol Cihazları',
    description: 'Akıllı şarj kontrolü ile sistem verimliliğini maksimuma çıkarın',
    image: '/şarj kontrol cihazları.jpg',
    features: [
      'Otomatik şarj kontrolü',
      'Aşırı şarj koruması',
      'LCD ekran',
      'Uzaktan izleme'
    ]
  },
  {
    id: 6,
    title: 'Isı Pompası',
    description: 'Enerji verimli ısıtma ve soğutma çözümleri',
    image: '/ısı pompası.jpg',
    features: [
      'Yüksek enerji verimliliği',
      'Dört mevsim kullanım',
      'Akıllı kontrol sistemi',
      'Düşük işletme maliyeti'
    ]
  },
  {
    id: 7,
    title: 'Dalgıç Pompası',
    description: 'Güneş enerjili sulama ve su temini çözümleri',
    image: '/dalgıç pompası.jpg',
    features: [
      'Yüksek pompalama kapasitesi',
      'Dayanıklı malzeme',
      'Kolay kurulum',
      'Düşük bakım ihtiyacı'
    ]
  },
  {
    id: 8,
    title: 'Solar Paket Sistemler',
    description: 'Komple güneş enerjisi sistem çözümleri',
    image: '/solar paketler.jpg',
    features: [
      'Anahtar teslim kurulum',
      'Optimum sistem tasarımı',
      'Tüm ekipmanlar dahil',
      'Profesyonel montaj'
    ]
  },
  {
    id: 9,
    title: 'Montaj Sistemleri',
    description: 'Güneş panelleri için profesyonel montaj ekipmanları',
    image: '/solar ekipmanlar.jpg',
    features: [
      'Sağlam konstrüksiyon',
      'Kolay montaj',
      'Çatı ve zemin uyumlu',
      'Uzun ömürlü malzeme'
    ]
  }
]

export default function Urunler() {
  return (

    <>
      <Head>
        <title>Ürünler - Güneşpaneller.com</title>
        <meta name="description" content="Güneş panelleri ve diğer enerji ürünlerimiz hakkında bilgi edinin." />
        <meta name="keywords" content="güneş panelleri, güneş enerjisi, yenilenebilir enerji, güneş, panel, gunes, güneş pan" />
        <meta name="author" content="cengiz yargi" />
      </Head>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Ürünlerimiz</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">

          

            Güneş enerjisi sistemleri için ihtiyacınız olan ürünler tek bir çatı altında.

          </p>
        </div>
      </div>

      {/* Ürünler Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {urunler.map((urun) => (
            <div key={urun.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 md:h-64">
                <Image
                  src={urun.image}
                  alt={urun.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">{urun.title}</h2>
                <p className="text-gray-600 text-sm md:text-base mb-4">{urun.description}</p>
                <div className="space-y-2 mb-6">
                  {urun.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600 text-sm md:text-base">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base">
                    Detaylı Bilgi
                  </button>
                  <Link href="/iletisim" className="w-full border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors text-center text-sm md:text-base">
                    İletişime Geç
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Güneş Enerjisi Çözümleri için Bize Ulaşın
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors duration-300 text-lg font-medium"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>

    </>

  )
} 