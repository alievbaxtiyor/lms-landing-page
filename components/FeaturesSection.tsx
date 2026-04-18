export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-green-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kurslarni yaratish va{' '}
            <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              boshqarish oson
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LMS.uz sizga kerakli barcha vositalarni bir joyda taqdim etadi
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              {/* Dashboard Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dashboard</h3>
                  <p className="text-sm text-gray-500">Umumiy ko'rinish</p>
                </div>
              </div>

              {/* Sidebar Menu */}
              <div className="flex gap-6 mb-6">
                <div className="space-y-2 min-w-[140px]">
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg font-medium text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Asosiy sahifa
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Dars jadvali
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Fanlar
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    O'qituvchilar
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Natijalar
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 space-y-3">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-900">Topshiriqlar</span>
                      <span className="text-xs px-2 py-1 bg-purple-200 text-purple-700 rounded-full font-semibold">5 ta</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div className="text-xs text-purple-600 mt-1">3-may, 08:30</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-900">Test</span>
                      <span className="text-xs px-2 py-1 bg-green-200 text-green-700 rounded-full font-semibold">Faol</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <div className="text-xs text-green-600 mt-1">3-may, 08:30</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-900">Yangi topshiriq</span>
                      <span className="text-xs px-2 py-1 bg-blue-200 text-blue-700 rounded-full font-semibold">Kutilmoqda</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">5-may, 09:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-1">89%</div>
              <div className="text-sm opacity-90">O'zlashtirish darajasi</div>
            </div>
          </div>

          {/* Right - Features List */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interaktiv video kurslar</h3>
                <p className="text-gray-600">Video darslarni yuklang, tahrirlang va talabalar bilan ulashing. HD sifat va tez yuklanish.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Testlar va baholash</h3>
                <p className="text-gray-600">Avtomatik test tizimi, online imtihonlar va real-time natijalar. Turli formatdagi savollar.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Topshiriqlar va deadlinelar</h3>
                <p className="text-gray-600">Topshiriqlarni rejalashtiring, muddatlar belgilang va avtomatik eslatmalar yuboring.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Elektron resurslar</h3>
                <p className="text-gray-600">Kitoblar, maqolalar, prezentatsiyalar va boshqa materiallarni bitta joyda saqlang.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Avtoproktoring</h3>
                <p className="text-gray-600">Sun'iy intellekt yordamida imtihonlar vaqtida yuzni va audio tahlil orqali avtomatik nazorat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
