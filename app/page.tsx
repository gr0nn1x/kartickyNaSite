"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronUp, ChevronDown, Menu, X, Shuffle, Trash2, Github, RotateCw } from "lucide-react"
import questionsData from "@/questions.json"
import { useMediaQuery } from "@/hooks/use-media-query"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectQuestions, setIncorrectQuestions] = useState<any[]>([])
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([])
  const [randomizedQuestions, setRandomizedQuestions] = useState<any[]>([])
  const [remainingQuestions, setRemainingQuestions] = useState<any[]>([])
  const [showIncorrectPanel, setShowIncorrectPanel] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Get unique categories from questions
  const categories = ["All Categories", ...new Set(questionsData.map((q) => q.okruh))]

  // Shuffle array function
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  useEffect(() => {
    // Check if there's a selected category from the wheel
    const wheelCategory = typeof window !== "undefined" ? localStorage.getItem("selectedCategory") : null
    if (wheelCategory) {
      setSelectedCategory(wheelCategory)
      localStorage.removeItem("selectedCategory") // Clear after use
    }

    if (selectedCategory === "All Categories" || selectedCategory === null) {
      setFilteredQuestions(questionsData)
    } else {
      setFilteredQuestions(questionsData.filter((q) => q.okruh === selectedCategory))
    }
  }, [selectedCategory])

  // When filtered questions change, randomize them
  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const shuffled = shuffleArray(filteredQuestions)
      setRandomizedQuestions(shuffled)
      setRemainingQuestions(shuffled)
      setCurrentQuestionIndex(0)
      setShowAnswer(false)
    }
  }, [filteredQuestions])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleCardClick = () => {
    setShowAnswer(!showAnswer)
  }

  const handleCorrectClick = () => {
    setScore(score + 1)
    goToNextQuestion()
  }

  const handleIncorrectClick = () => {
    // Reset score streak when incorrect
    setScore(0)
    // Add current question to incorrect questions list
    const currentQuestion = remainingQuestions[currentQuestionIndex]
    // Check if question is already in the list to avoid duplicates
    if (!incorrectQuestions.some((q) => q.otazka === currentQuestion.otazka)) {
      setIncorrectQuestions([...incorrectQuestions, currentQuestion])
      // Show the panel when a new incorrect question is added
      setShowIncorrectPanel(true)
    }
    goToNextQuestion()
  }

  const goToNextQuestion = () => {
    // Remove the current question from remaining questions
    const updatedRemaining = [...remainingQuestions]
    updatedRemaining.splice(currentQuestionIndex, 1)

    // If we've gone through all questions, reshuffle and start again
    if (updatedRemaining.length === 0) {
      const newShuffled = shuffleArray(filteredQuestions)
      setRandomizedQuestions(newShuffled)
      setRemainingQuestions(newShuffled)
      setCurrentQuestionIndex(0)
    } else {
      // Otherwise, update remaining questions and pick a random index
      setRemainingQuestions(updatedRemaining)
      setCurrentQuestionIndex(Math.floor(Math.random() * updatedRemaining.length))
    }

    setShowAnswer(false)
  }

  const reshuffleQuestions = () => {
    const newShuffled = shuffleArray(filteredQuestions)
    setRandomizedQuestions(newShuffled)
    setRemainingQuestions(newShuffled)
    setCurrentQuestionIndex(0)
    setShowAnswer(false)
  }

  const toggleIncorrectPanel = () => {
    setShowIncorrectPanel(!showIncorrectPanel)
  }

  const resetIncorrectQuestions = () => {
    setIncorrectQuestions([])
  }

  const navigateToWheel = () => {
    router.push("/wheel")
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-gray-100">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-700">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-gray-800 text-gray-200">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="font-semibold text-gray-100">Flashcard App</div>
        <div className="bg-gray-800 text-gray-100 px-3 py-1 rounded-md text-sm">Score: {score}</div>
      </div>

      {/* Sidebar */}
      <div
        className={`
        ${isMobile ? (sidebarOpen ? "block" : "hidden") : "block"}
        w-full md:w-64 border-r border-gray-700 bg-gray-800 z-10
        ${isMobile ? "absolute top-16 left-0 h-[calc(100vh-4rem)]" : "relative"}
        flex flex-col justify-between
      `}
      >
        <div>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`w-full text-left p-4 hover:bg-gray-700 ${
                selectedCategory === category ? "bg-gray-600 text-white" : "text-gray-300"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Wheel Button */}
        <div className="p-4 border-t border-gray-700">
          <Button
            onClick={navigateToWheel}
            className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 flex items-center justify-center gap-2"
          >
            <RotateCw size={16} />
            Spin Category Wheel
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 relative bg-gray-900">
        {/* Score and Shuffle Button for desktop */}
        <div className="hidden md:flex items-center justify-between absolute top-6 right-6 gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={reshuffleQuestions}
            className="flex items-center gap-2 bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700"
          >
            <Shuffle size={16} />
            Shuffle
          </Button>
          <div className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md">Score: {score}</div>
        </div>

        {remainingQuestions.length > 0 ? (
          <div className="flex flex-col items-center justify-center h-full mt-4 md:mt-0">
            <Card
              className="w-full max-w-2xl p-4 md:p-8 bg-gray-800 cursor-pointer border-gray-700"
              onClick={handleCardClick}
            >
              <div className="text-gray-400 mb-4">{remainingQuestions[currentQuestionIndex].okruh}</div>
              <div className="text-lg md:text-xl font-medium mb-8 text-center text-gray-100">
                {remainingQuestions[currentQuestionIndex].otazka}
              </div>
              {showAnswer ? (
                <div className="mt-8 text-center">
                  <p className="text-gray-200">{remainingQuestions[currentQuestionIndex].odpoved}</p>
                  <p className="text-sm text-gray-400 mt-2">Tap to hide answer</p>
                </div>
              ) : (
                <div className="text-center text-gray-400 mt-8">Tap to show answer</div>
              )}
            </Card>

            <div className="flex gap-4 mt-6">
              <Button variant="destructive" onClick={handleIncorrectClick} className="px-4 md:px-8">
                Incorrect
              </Button>
              <Button
                variant="default"
                onClick={handleCorrectClick}
                className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 md:px-8"
              >
                Correct
              </Button>
            </div>

            {/* Mobile Shuffle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={reshuffleQuestions}
              className="md:hidden flex items-center gap-2 mt-4 bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700"
            >
              <Shuffle size={16} />
              Shuffle Questions
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <p>No questions available for this category.</p>
          </div>
        )}

        <div className="absolute bottom-4 right-4 text-sm text-gray-400">
          Created by{" "}
          <Link
            href="https://github.com/gr0nn1x"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 inline-flex"
          >
            <Github size={14} />
            František Tesařík
          </Link>
        </div>

        {/* Incorrect Questions Panel */}
        {incorrectQuestions.length > 0 && (
          <div
            className={`
            fixed bottom-0 right-0 md:absolute md:bottom-16 md:right-4 
            w-full md:w-80 bg-gray-800 shadow-lg rounded-t-lg md:rounded-lg 
            overflow-hidden transition-all duration-300 ease-in-out border border-gray-700
            ${showIncorrectPanel ? "max-h-96" : "max-h-12"}
          `}
          >
            {/* Panel Header/Toggle Button */}
            <div className="w-full bg-red-600 text-white p-2 flex items-center justify-between">
              <button onClick={toggleIncorrectPanel} className="flex items-center gap-2 flex-1">
                <span>Incorrect ({incorrectQuestions.length})</span>
                {showIncorrectPanel ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
              </button>

              {/* Reset Button */}
              <button
                onClick={resetIncorrectQuestions}
                className="p-1 hover:bg-red-700 rounded-md transition-colors"
                title="Clear all incorrect questions"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* Panel Content */}
            <div
              className={`
              overflow-y-auto transition-all duration-300
              ${showIncorrectPanel ? "max-h-80" : "max-h-0"}
            `}
            >
              {incorrectQuestions.map((question, index) => (
                <div key={index} className="p-4 bg-gray-700 mb-2 border-b border-gray-600">
                  <div className="font-medium text-gray-200">{question.otazka}</div>
                  <div className="text-sm text-gray-400 mt-1">{question.odpoved}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

