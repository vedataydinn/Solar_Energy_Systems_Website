'use client'

export default function Iletisim() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    alert('Form gönderildi!')
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">İletişim</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">İletişim Bilgileri</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-semibold w-24">Adres:</span>
              <span>Teknoloji Mahallesi, Güneş Sokak No:123, İstanbul</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold w-24">Telefon:</span>
              <span>+90 (212) 555 0123</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold w-24">E-posta:</span>
              <span>info@gunesenerjisi.com</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">İletişim Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </main>
  )
} 