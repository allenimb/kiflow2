"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, RotateCcw, Sparkles } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "How do you typically react when facing unexpected challenges?",
    options: [
      { text: "I feel overwhelmed and need time to process", type: "reflective" },
      { text: "I jump into action immediately", type: "active" },
      { text: "I analyze the situation before deciding", type: "analytical" },
      { text: "I seek support from others", type: "social" },
    ],
  },
  {
    id: 2,
    question: "What helps you decompress after a stressful day?",
    options: [
      { text: "Quiet time alone with my thoughts", type: "reflective" },
      { text: "Physical activity or exercise", type: "active" },
      { text: "Planning and organizing for tomorrow", type: "analytical" },
      { text: "Talking with friends or family", type: "social" },
    ],
  },
  {
    id: 3,
    question: "When you're under pressure, what's your biggest struggle?",
    options: [
      { text: "Racing thoughts that won't stop", type: "reflective" },
      { text: "Feeling restless and unable to sit still", type: "active" },
      { text: "Overthinking every possible outcome", type: "analytical" },
      { text: "Feeling isolated or misunderstood", type: "social" },
    ],
  },
  {
    id: 4,
    question: "What type of guidance would help you most?",
    options: [
      { text: "Mindfulness and breathing techniques", type: "reflective" },
      { text: "Quick, actionable stress-relief exercises", type: "active" },
      { text: "Data-driven insights about my patterns", type: "analytical" },
      { text: "Community support and shared experiences", type: "social" },
    ],
  },
]

const profiles = {
  reflective: {
    title: "The Mindful Observer",
    description:
      "You process stress internally and benefit from quiet reflection. KiFlow's guided meditations and journaling prompts will help you transform racing thoughts into clarity and calm.",
    color: "from-teal-500 to-cyan-500",
    icon: "🧘",
  },
  active: {
    title: "The Dynamic Doer",
    description:
      "You channel stress through action and movement. KiFlow's quick stress-relief exercises and active mindfulness techniques will help you release tension and regain focus.",
    color: "from-orange-500 to-amber-500",
    icon: "⚡",
  },
  analytical: {
    title: "The Strategic Thinker",
    description:
      "You approach stress with logic and planning. KiFlow's pattern tracking and data-driven insights will help you understand your triggers and build systematic resilience.",
    color: "from-kiflow-blue to-kiflow-purple",
    icon: "🎯",
  },
  social: {
    title: "The Connected Heart",
    description:
      "You thrive with support and connection. KiFlow's community features and guided conversations will help you feel understood and build your support network.",
    color: "from-pink-500 to-rose-500",
    icon: "💜",
  },
}

export function StressProfileQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleAnswer = (type: string, optionIndex: number) => {
    setSelectedOption(optionIndex)
    setTimeout(() => {
      const newAnswers = [...answers, type]
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        setShowResult(true)
      }
    }, 300)
  }

  const getResult = () => {
    const counts: Record<string, number> = {}
    answers.forEach((type) => {
      counts[type] = (counts[type] || 0) + 1
    })
    const maxType = Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0]
    return profiles[maxType as keyof typeof profiles]
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setSelectedOption(null)
  }

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100

  if (showResult) {
    const result = getResult()
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Card className="overflow-hidden border-none shadow-2xl">
          <div className={`bg-gradient-to-r ${result.color} p-8 text-white text-center`}>
            <span className="text-6xl mb-4 block">{result.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Your Stress Profile</h3>
            <p className="text-xl md:text-2xl font-semibold opacity-90">{result.title}</p>
          </div>
          <div className="p-8 bg-white">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{result.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={resetQuiz}
                variant="outline"
                className="flex-1 gap-2 bg-transparent border-kiflow-blue text-kiflow-blue hover:bg-kiflow-blue/10"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </Button>
              <Button
                asChild
                className="flex-1 gap-2 bg-kiflow-blue text-white hover:bg-kiflow-blue/90"
              >
                <a href="https://apps.apple.com/us/app/kiflow/id6608984760" target="_blank" rel="noopener noreferrer">
                  <Sparkles className="w-4 h-4" />
                  Get KiFlow Free
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border-none shadow-2xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-kiflow-blue to-kiflow-purple transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 bg-white">
          {/* Question counter */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex gap-1.5">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i <= currentQuestion ? "bg-kiflow-blue" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-kiflow-dark">
            {questions[currentQuestion].question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.type, index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${
                  selectedOption === index
                    ? "border-kiflow-blue bg-kiflow-blue/5"
                    : "border-gray-200 hover:border-kiflow-blue/50 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedOption === index
                      ? "border-kiflow-blue bg-kiflow-blue"
                      : "border-gray-300 group-hover:border-kiflow-blue"
                  }`}
                >
                  {selectedOption === index && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <span className="flex-1 text-kiflow-dark font-medium">{option.text}</span>
                <ArrowRight
                  className={`w-5 h-5 transition-all ${
                    selectedOption === index
                      ? "opacity-100 translate-x-0 text-kiflow-blue"
                      : "opacity-0 -translate-x-2 text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
