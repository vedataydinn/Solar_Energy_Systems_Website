'use client'

import Image from 'next/image'

const projeler = [
  {
    id: 1,
    title: "Villa Güneş Enerji Sistemi",
    description: "10kW Çatı Üzeri Güneş Enerji Sistemi",
    image: "/proje1.jpg",
    detaylar: [
      "30 adet yüksek verimli güneş paneli",
      "Akıllı inverter sistemi",
      "Uzaktan izleme sistemi",
      "Yıllık 15.000 kWh üretim"
    ]
  },
  {
    id: 2,
    title: "Fabrika Enerji Sistemi",
    description: "250kW Endüstriyel Güneş Enerji Sistemi",
    image: "/proje2.jpg",
    detaylar: [
      "750 adet güneş paneli",
      "Merkezi inverter sistemi",
      "Enerji izleme ve yönetim sistemi",
      "Yıllık 375.000 kWh üretim"
    ]
  },
  {
    id: 3,
    title: "Tarımsal Sulama Projesi",
    description: "30kW Solar Pompa Sistemi",
    image: "/proje3.jpg",
    detaylar: [
      "90 adet güneş paneli",
      "Dalgıç pompa sistemi",
      "Otomatik sulama kontrolü",
      "Günlük 200 ton su kapasitesi"
    ]
  },
  {
    id: 4,
    title: "Otel Güneş Enerjisi",
    description: "100kW Hibrit Sistem",
    image: "/proje4.jpg",
    detaylar: [
      "300 adet güneş paneli",
      "Akü depolama sistemi",
      "Kesintisiz enerji",
      "Yıllık 150.000 kWh üretim"
    ]
  },
  {
    id: 5,
    title: "Sera Otomasyon",
    description: "15kW Akıllı Sera Sistemi",
    image: "/proje5.jpg",
    detaylar: [
      "45 adet güneş paneli",
      "Isı pompası entegrasyonu",
      "Akıllı iklim kontrolü",
      "Tam otomasyon sistemi"
    ]
  },
  {
    id: 6,
    title: "Belediye Aydınlatma",
    description: "50kW Solar Aydınlatma Sistemi",
    image: "/proje6.jpg",
    detaylar: [
      "150 adet güneş paneli",
      "LED aydınlatma sistemi",
      "Akıllı kontrol ünitesi",
      "Enerji depolama sistemi"
    ]
  },
  {
    id: 7,
    title: "Spor Kompleksi",
    description: "75kW Çatı GES",
    image: "/proje7.jpg",
    detaylar: [
      "225 adet güneş paneli",
      "Merkezi inverter sistemi",
      "Sıcak su desteği",
      "Yıllık 112.500 kWh üretim"
    ]
  },
  {
    id: 8,
    title: "Akıllı Ev Sistemi",
    description: "5kW Tam Entegre Sistem",
    image: "/proje8.jpg",
    detaylar: [
      "15 adet güneş paneli",
      "Ev otomasyon entegrasyonu",
      "Akıllı tüketim kontrolü",
      "Mobil izleme sistemi"
    ]
  },
  {
    id: 9,
    title: "Sanayi Tesisi",
    description: "500kW Endüstriyel GES",
    image: "/proje9.jpg",
    detaylar: [
      "1500 adet güneş paneli",
      "Çoklu inverter sistemi",
      "SCADA entegrasyonu",
      "Yıllık 750.000 kWh üretim"
    ]
  },
  {
    id: 10,
    title: "Çiftlik Projesi",
    description: "40kW Hibrit Sistem",
    image: "/proje10.jpg",
    detaylar: [
      "120 adet güneş paneli",
      "Sulama ve aydınlatma",
      "Akü depolama sistemi",
      "Tam bağımsız enerji"
    ]
  }
]

export default function Projeler() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Yaptığımız Projeler</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Türkiye&apos;nin dört bir yanında başarıyla tamamladığımız güneş enerjisi projelerimiz
          </p>
        </div>
      </div>

      {/* Projeler Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projeler.map((proje) => (
            <div 
              key={proje.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={proje.image}
                  alt={proje.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold px-4 text-center">{proje.description}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{proje.title}</h2>
                <div className="space-y-2">
                  {proje.detaylar.map((detay, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detay}
                    </div>
                  ))}
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
            Siz de Güneş Enerjisi Projenizi Hayata Geçirin
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz, ihtiyaçlarınıza özel çözümler sunmak için hazır.
          </p>
          <a 
            href="/iletisim" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors duration-300 text-lg font-medium"
          >
            Bizimle İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  )
} 