import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Creative Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-green-50"></div>

        {/* Animated Wave Patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#9FE870" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg className="absolute top-0 right-0 w-full h-auto opacity-20 transform rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#9FE870" fillOpacity="0.2" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,170.7C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        {/* Animated Blobs */}
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(159, 232, 112, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(159, 232, 112, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary-200 rounded-2xl transform rotate-45 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-4 border-primary-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-100 rounded-lg transform rotate-12 opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-green-300 transform -rotate-12 opacity-15"></div>
      </div>

      <div className="relative flex-1 flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-gray-900">Ta'limni yangi</span>
            <span className="block bg-gradient-to-r from-primary-dark via-primary to-green-500 bg-clip-text text-transparent">
              bosqichga
            </span>
            <span className="block text-gray-900">olib chiqing!</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            LMS.uz — Oliy ta'lim muassasalari, o'qituvchilar va talabalar uchun mo'ljallangan zamonaviy onlayn ta'limni boshqarish platformasi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#demo"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Bepul sinab ko'ring
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="#features"
              className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              Batafsil ma'lumot
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>15+ universitet</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bepul sinov</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 qo'llab-quvvatlash</span>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="relative z-10">
          <div className="relative">
            {/* Dashboard Screenshot */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero/hero.png"
                alt="LMS Dashboard Preview"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-90">Universitetlar</div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Universities Logos Section - Bottom */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 z-10">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Ishonch bildirgan universitetlar</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center">
          {[
            { name: 'Adabiyot', src: '/images/logosUnivers/adabiyot.jpg' },
            { name: 'ADTI', src: '/images/logosUnivers/adti.jpg' },
            { name: 'BXU', src: '/images/logosUnivers/bxu.jpg' },
            { name: 'CSU', src: '/images/logosUnivers/csu.jpg' },
            { name: 'FDU', src: '/images/logosUnivers/fdu.jpg' },
            { name: 'OXU', src: '/images/logosUnivers/oxu.jpg' },
            { name: 'QDU', src: '/images/logosUnivers/qdu.jpg' },
            { name: 'Renesans', src: '/images/logosUnivers/renesans.jpg' },
            { name: 'TDU', src: '/images/logosUnivers/tdu.jpg' },
          ].map((university, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
            >
              <div className="relative w-full h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={university.src}
                  alt={university.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
