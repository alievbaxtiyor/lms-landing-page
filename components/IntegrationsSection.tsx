export default function IntegrationsSection() {
  const integrations = [
    {
      name: 'HEMIS',
      description: 'Universitet boshqaruv tizimi bilan to\'liq integratsiya',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Zoom va Microsoft Teams',
      description: 'Onlayn darslar uchun video konferensiya',
      icon: '📹',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Sun\'iy intellekt texnologiyalari',
      description: 'AI yordamida test va topshiriqlarni avtomatlashtirish',
      icon: '🤖',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Elektron kutubxona',
      description: 'Raqamli kitoblar va resurslar bazasi',
      icon: '📚',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const analytics = [
    {
      title: 'Talabalar va xodimlar bazasi',
      description: 'To\'liq ma\'lumotlar va statistika',
      icon: '👥',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Baholash tizimi va reytinglar',
      description: 'Avtomatik baholash va progress tracking',
      icon: '⭐',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const teaching = [
    {
      title: 'Dars jadvali va davomat',
      description: 'Avtomatik davomat va jadval boshqaruvi',
      icon: '📅',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Elektron jurnal',
      description: 'Real-time baholar va natijalar',
      icon: '📝',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Faoliyat monitoringi',
      description: 'Talabalar va o\'qituvchilar faoliyatini kuzatish',
      icon: '📊',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Qayta o\'qish funksiyasi',
      description: 'Avtomatik akademik qarzdorlikni boshqarish',
      icon: '🔄',
      color: 'from-red-500 to-red-600'
    }
  ];

  const advantages = [
    {
      title: 'Yuqori darajadagi xavfsizlik',
      description: 'SSL shifrlash va ma\'lumotlar himoyasi',
      icon: '🔒',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Moslashuvchan va mobil dizayn',
      description: 'Har qanday qurilmada qulay ishlash',
      icon: '📱',
      color: 'from-violet-500 to-violet-600'
    },
    {
      title: 'Kuchli nazorat tizimi',
      description: 'To\'liq monitoring va boshqaruv',
      icon: '⚡',
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Yagona boshqaruv paneli',
      description: 'Barcha funksiyalar bir joyda',
      icon: '🎯',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Integrations */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Integratsiyalar
              </span>
            </h2>
            <p className="text-lg text-gray-600">Eng mashhur platformalar bilan integratsiya</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:scale-105">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tahlil va{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                ma'lumotlar
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {analytics.map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Features */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O'qitishdagi{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                qulayliklar
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teaching.map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-pink-300 transition-all duration-300 hover:scale-105">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Qo'shimcha{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                afzalliklar
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:scale-105">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
