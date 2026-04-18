export default function MobileAppSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobil ilovada{' '}
              <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                har qayerda qulay
              </span>{' '}
              o'rganing!
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Android va iOS uchun optimallashtirilgan mobil ilova orqali istalgan joydan ta'lim oling
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Android & iOS qo'llab-quvvatlovi</h4>
                  <p className="text-gray-600 text-sm">Har ikkala platformada mukammal ishlaydi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Push ogohlantirishlar</h4>
                  <p className="text-gray-600 text-sm">Yangi topshiriqlar va e'lonlar haqida darhol xabardor bo'ling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Oflayn rejim</h4>
                  <p className="text-gray-600 text-sm">Internetga ulanmasdan ham materiallarni ko'ring</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Intuitiv interfeys va tezkor yuklanish</h4>
                  <p className="text-gray-600 text-sm">Sodda va tushunarli dizayn, yuqori tezlik</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>

              <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right - Mobile Preview */}
          <div className="relative">
            <div className="relative mx-auto" style={{maxWidth: '300px'}}>
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="bg-gray-900 h-7 rounded-b-3xl mx-auto" style={{width: '40%'}}></div>

                  {/* Screen Content */}
                  <div className="bg-gradient-to-br from-green-50 to-purple-50 px-6 py-8 min-h-[600px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Salom, Bekzod 👋</h3>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                    </div>

                    {/* Menu */}
                    <div className="space-y-3 mb-6">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-green-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">📚</div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-900">Topshiriqlar</div>
                            <div className="text-xs text-gray-600">5 ta yangi</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl">📝</div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-900">Grafik nazorат</div>
                            <div className="text-xs text-gray-600">3-may, 08:30</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📊</div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-900">Natijalar</div>
                            <div className="text-xs text-gray-600">O'rtacha: 89%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Card */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white shadow-xl">
                      <div className="text-sm mb-2">Umumiy o'zlashtirish</div>
                      <div className="text-3xl font-bold mb-2">89%</div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -left-6 top-1/4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="absolute -right-6 top-2/3 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce animation-delay-1000">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
