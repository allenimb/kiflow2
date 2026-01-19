import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, Brain, Shield, ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="w-20" />
          <nav className="flex items-center gap-8">
            <a className="transition-colors text-gray-600 hover:text-kiflow-blue" href="#features">
              Features
            </a>
            <a className="transition-colors text-gray-600 hover:text-kiflow-blue" href="#how-it-works">
              How It Works
            </a>
            <a className="transition-colors text-gray-600 hover:text-kiflow-blue" href="#quiz">
              Take Quiz
            </a>
            <a className="transition-colors text-gray-600 hover:text-kiflow-blue" href="#testimonials">
              Testimonials
            </a>
          </nav>
          <div className="w-20" />
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-2 md:pt-4 pb-6 md:pb-8 px-4 container mx-auto">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <div className="mb-2 flex items-center gap-3">
              <Image
                alt="KiFlow - Shift stress. Learn to Flow."
                width={260}
                height={87}
                className="h-auto"
                src="/images/kiflow-logo-tagline.png"
              />
              <Image
                alt="KiFu Mascot"
                width={100}
                height={100}
                className="h-auto"
                src="/images/kifu-mascot.webp"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-kiflow-blue mb-2 text-center text-balance">
              Smarter Stress Relief—
              <span className="italic">Powered by AI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-3 text-center max-w-2xl">
              Turn stress into strength with KiFlow&apos;s personalized daily guidance. Get calm. Stay strong. Grow daily.
            </p>
            <div className="relative w-full max-w-md h-[320px] mb-3">
              <Image
                alt="KiFlow App - Transform Stress into Resilience and Creativity"
                fill
                className="object-contain"
                src="/images/kiflow-screens.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
                href="https://apps.apple.com/us/app/kiflow/id6608984760"
              >
                <Image
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="object-contain"
                  src="/images/app-store-button.jpeg"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
                href="https://play.google.com/store/apps/details?id=com.kibiz.kiflow&utm_source=na_Med"
              >
                <Image
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="object-contain"
                  src="/images/google-play-store-logo.png"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-10 bg-kiflow-light px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-kiflow-blue">How KiFlow Helps You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 pt-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-kiflow-blue/10 p-3 rounded-full mb-3">
                      <Compass className="h-8 w-8 text-kiflow-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-kiflow-dark">Identify Stress Triggers</h3>
                    <p className="text-gray-600">Gain clarity on what&apos;s fueling your stress reactions.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 pt-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-kiflow-purple/10 p-3 rounded-full mb-3">
                      <Brain className="h-8 w-8 text-kiflow-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-kiflow-dark">Shift into Growth Mindset</h3>
                    <p className="text-gray-600">Reframe challenges and turn stress into fuel for personal growth.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 pt-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-kiflow-green/10 p-3 rounded-full mb-3">
                      <Shield className="h-8 w-8 text-kiflow-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-kiflow-dark">Build Resilience Every Day</h3>
                    <p className="text-gray-600">Strengthen emotional fitness with daily guided practices.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-10 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-kiflow-blue">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-kiflow-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 text-xl font-bold text-kiflow-blue">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-kiflow-dark">Discover What&apos;s Holding You Back</h3>
                <p className="text-gray-600">
                  KiFlow helps you uncover stress triggers with mindful reflection and smart guidance.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-kiflow-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 text-xl font-bold text-kiflow-purple">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-kiflow-dark">
                  Get Personalized Insights from KiFu, Your AI Coach
                </h3>
                <p className="text-gray-600">
                  Receive clear, actionable steps tailored to your needs—right when you need them.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-kiflow-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 text-xl font-bold text-kiflow-green">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-kiflow-dark">Shift into Flow and Take Action</h3>
                <p className="text-gray-600">
                  Follow simple daily practices to bounce back, stay calm, and feel empowered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stress Profile Quiz Section */}
        <section id="quiz" className="py-16 bg-kiflow-light px-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiflow-blue text-white rounded-full mb-4">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">Free Assessment</span>
              </div>
              <h2 className="text-3xl font-bold text-kiflow-blue mb-3">Discover Your Stress Profile</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Understand how you process stress and get personalized recommendations from KiFlow.
              </p>
              <a
                href="https://www.stressshifter.com/quiz-landing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-kiflow-blue hover:bg-kiflow-blue/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Take 2-min Quiz
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-10 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-kiflow-blue">What Our Users Say</h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">
                      &ldquo;KiFlow helped me understand my stress patterns like never before. The AI coaching feels like
                      having a therapist in my pocket.&rdquo;
                    </p>
                    <p className="font-semibold text-kiflow-dark">Sarah M.</p>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">
                      &ldquo;I&apos;ve tried many wellness apps, but KiFlow&apos;s personalized approach actually made a
                      difference in my daily life.&rdquo;
                    </p>
                    <p className="font-semibold text-kiflow-dark">James L.</p>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">
                      &ldquo;The daily practices are quick but powerful. I feel more resilient and in control of my
                      emotions.&rdquo;
                    </p>
                    <p className="font-semibold text-kiflow-dark">Emma K.</p>
                    <p className="text-sm text-gray-500">Entrepreneur</p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-kiflow-blue text-kiflow-blue hover:bg-kiflow-blue/10 bg-transparent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-kiflow-blue text-kiflow-blue hover:bg-kiflow-blue/10 bg-transparent"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-kiflow-blue to-kiflow-purple text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Stress Less and Thrive More?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
              Download KiFlow today and start your journey toward resilience and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
                href="https://apps.apple.com/us/app/kiflow/id6608984760"
              >
                <Image
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="object-contain"
                  src="/images/app-store-button.jpeg"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
                href="https://play.google.com/store/apps/details?id=com.kibiz.kiflow&utm_source=na_Med"
              >
                <Image
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="object-contain"
                  src="/images/google-play-store-logo.png"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-kiflow-dark text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Image alt="KiFlow Logo" width={40} height={40} className="h-auto" src="/images/kifu-mascot.webp" />
              <span className="font-bold text-xl">KiFlow</span>
            </div>
            <p className="text-center text-gray-400">© 2025 KiFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
