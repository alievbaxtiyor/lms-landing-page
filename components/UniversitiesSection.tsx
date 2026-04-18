export default function UniversitiesSection() {
  const universities = [
    {
      name: "O'siyo Xalqaro universiteti",
      logo: "🎓"
    },
    {
      name: "O'zbekiston milliy universiteti Jizzax",
      logo: "🏛️"
    },
    {
      name: "Qo'qon davlat universiteti",
      logo: "📚"
    },
    {
      name: "Termiz davlat universiteti",
      logo: "🎯"
    },
    {
      name: "Toshkent amaliy fanlar universiteti",
      logo: "🔬"
    },
    {
      name: "Yangi Asr universiteti",
      logo: "✨"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Biz bilan rivojlanayotgan{' '}
            <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              15+ universitetlar
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Eng yirik ta'lim muassasalari bizning platformamizdan foydalanmoqda
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {universities.map((university, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{university.logo}</div>
                <p className="text-xs text-gray-600 font-medium leading-tight">
                  {university.name}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Asosiy xususiyatlar
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
