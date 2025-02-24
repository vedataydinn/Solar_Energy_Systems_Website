'use client'


import Head from 'next/head';
import Image from 'next/image'

const projeler = [
  
  {
    id: 1,
    title: "Tarımsal Sulama Projesi",
    description: "Solar Enerji ile Tarımsal Sulama Sistemi",
    image: "/proje1.jpg",
    detaylar: [
      "Yüksek verimli güneş paneli teknolojisi",
      "Derin kuyularda kullanılabilen dalgıç pompa",
      "Otomatik sulama ve su yönetim sistemi",
      "Uzaktan izleme ve kontrol sistemi"
    ]
  },
  
  {
    id: 2,
    title: "Tarımsal Sulama Projesi",
    description: "Güneş Enerjisi Destekli Sulama Çözümü",
    image: "/proje2.jpg",
    detaylar: [
      "Yüksek verimli güneş paneli teknolojisi",
      "Gelişmiş su pompa sistemi",
      "Otomatik sulama zamanlama ve kontrol",
      "Verimli su yönetimi için sensör tabanlı sistem"
    ]
  },
  
  {
    id: 3,
    title: "Tarımsal Sulama Projesi",
    description: "Solar Enerji ile Sürdürülebilir Tarım Sulama",
    image: "/proje3.jpg",
    detaylar: [
      "Güneş enerjisi ile çalışan pompa sistemi",
      "Akıllı sulama yönetim yazılımı",
      "Su tasarrufu sağlayan teknolojiler",
      "Enerji verimliliği artırıcı çözümler"
    ]
  },  


  {
    id: 4,
    title: "On-Grid Çatı Sistemi",
    description: "On-Grid Solar Enerji Sistemi",
    image: "/proje4.jpg",
    detaylar: [
      "Yüksek verimli güneş paneli teknolojisi",
      "On-Grid enerji entegrasyonu",
      "Kesintisiz enerji sağlamak için hibrit sistem",
      "Enerji verimliliği artırıcı yönetim sistemi"
    ]
  },
  
  {
    id: 5,
    title: "On-Grid Çatı Sistemi",
    description: "On-Grid Solar Enerji Sistemi",
    image: "/proje5.jpg",
    detaylar: [
      "On-Grid güneş paneli sistemi",
      "Isı pompası ve enerji entegrasyonu",
      "Akıllı iklim kontrol ve sulama sistemi",
      "Tam otomasyon ve uzaktan izleme sistemi"
    ]
  },
  {
    id: 6,
    title: "Mobil GES Sistemi",
    description: "Solar Aydınlatma Sistemi",
    image: "/proje6.jpg",
    detaylar: [
      "Yüksek verimli güneş paneli teknolojisi",
      "LED aydınlatma sistemi",
      "Akıllı kontrol ünitesi",
      "Enerji depolama ve izleme sistemi"
    ]
  },
  
  {
    id: 7,
    title: "Mobil GES Sistemi",
    description: "Çatı Solar Enerji Sistemi",
    image: "/proje7.jpg",
    detaylar: [
      "On-Grid güneş paneli entegrasyonu",
      "Merkezi inverter sistemi",
      "Sıcak su üretim desteği",
      "Enerji verimliliği artırıcı çözümler"
    ]
  },
  
  {
    id: 8,
    title: "Mobil GES Sistemi",
    description: "Tam Entegre Solar Enerji Sistemi",
    image: "/proje8.jpg",
    detaylar: [
      "On-Grid güneş paneli sistemi",
      "Ev otomasyon entegrasyonu",
      "Akıllı tüketim kontrolü",
      "Mobil izleme ve yönetim sistemi"
    ]
  },
  
  {
    id: 9,
    title: "Mobil GES Sistemi",
    description: "Endüstriyel Solar Enerji Sistemi",
    image: "/proje9.jpg",
    detaylar: [
      "Yüksek kapasiteli güneş paneli entegrasyonu",
      "Çoklu inverter sistemi",
      "SCADA entegrasyonu",
      "Endüstriyel enerji yönetim çözümleri"
    ]
  },
  
  {
    id: 10,
    title: "Mobil GES Sistemi",
    description: "Hibrit Solar Enerji Sistemi",
    image: "/proje10.jpg",
    detaylar: [
      "Yüksek verimli güneş paneli sistemi",
      "Sulama ve aydınlatma entegrasyonu",
      "Akü depolama ve enerji yönetim sistemi",
      "Bağımsız enerji üretim çözümleri"
    ]
  }
  
  
]

export default function Projeler() {
  return (

    <>
    <Head>
      <title>Projeler - Güneşpaneller.com</title>
      <meta name="description" content="Güneş enerjisi projelerimiz hakkında bilgi edinin." />
      <meta name="keywords" content="projeler, güneş enerjisi, enerji çözümleri" />
      <meta name="author" content="cengiz yargi" />
    </Head>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Yaptığımız Projeler</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Türkiye'nin dört bir yanında başarıyla tamamladığımız güneş enerjisi projelerimiz
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

    </>
  )
} 