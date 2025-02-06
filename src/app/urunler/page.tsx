'use client'

export default function Urunler() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Ürünlerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Örnek ürün kartları */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Güneş Paneli</h2>
          <p className="text-gray-600">Yüksek verimli monokristal güneş panelleri</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">İnvertör</h2>
          <p className="text-gray-600">Güvenilir ve dayanıklı invertör sistemleri</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Akü Sistemleri</h2>
          <p className="text-gray-600">Uzun ömürlü enerji depolama çözümleri</p>
        </div>
      </div>
    </main>
  )
} 