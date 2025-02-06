'use client'

export default function Projeler() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Yapılan Projeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Örnek proje kartları */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Villa Güneş Enerjisi Sistemi</h2>
            <p className="text-gray-600 mb-4">500m² villa için 10kW güneş enerjisi sistemi kurulumu</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>30 adet güneş paneli</li>
              <li>2 adet invertör</li>
              <li>Akıllı enerji yönetim sistemi</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Fabrika Enerji Sistemi</h2>
            <p className="text-gray-600 mb-4">Endüstriyel tesis için 100kW güneş enerjisi sistemi</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>250 adet güneş paneli</li>
              <li>5 adet endüstriyel invertör</li>
              <li>İzleme ve raporlama sistemi</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
} 