"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import questionsData from "@/questions.json"
import { useRouter } from "next/navigation"

export default function WheelPage() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [spinning, setSpinning] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories from questions
  const categories = [...new Set(questionsData.map((q) => q.okruh))]

  // Colors for the wheel
  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#8AC24A",
    "#607D8B",
    "#E91E63",
    "#3F51B5",
  ]

  // Update the drawWheel function to separate the wheel and pointer
  const drawWheel = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 10

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw wheel segments
    const anglePerSegment = (2 * Math.PI) / categories.length

    categories.forEach((category, index) => {
      const startAngle = index * anglePerSegment
      const endAngle = (index + 1) * anglePerSegment

      // Draw segment
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      // Fill segment
      ctx.fillStyle = colors[index % colors.length]
      ctx.fill()

      // Add text
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(startAngle + anglePerSegment / 2)
      ctx.textAlign = "right"
      ctx.fillStyle = "#fff"
      ctx.font = "bold 14px Arial"

      // Truncate long category names
      let displayText = category
      if (displayText.length > 12) {
        displayText = displayText.substring(0, 10) + "..."
      }

      ctx.fillText(displayText, radius - 20, 5)
      ctx.restore()
    })

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI)
    ctx.fillStyle = "#333"
    ctx.fill()
  }

  // Update the drawPointer function to place the arrow on the right side pointing to the center
  const drawPointer = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 10

    // Position the arrow on the right side of the wheel
    const arrowX = centerX + radius + 20 // 20px away from the wheel edge

    // Draw the arrow pointing left (toward the center of the wheel)
    ctx.beginPath()
    // Arrow tip (pointing to the wheel)
    ctx.moveTo(centerX + radius, centerY)
    // Arrow tail (right side)
    ctx.lineTo(arrowX + 15, centerY - 15)
    ctx.lineTo(arrowX + 15, centerY + 15)
    ctx.closePath()

    // Fill with red color
    ctx.fillStyle = "#FF0000"
    ctx.fill()

    // Add a white outline for better visibility
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 2
    ctx.stroke()
  }

  // Update the useEffect to draw both wheel and pointer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = Math.min(window.innerWidth * 0.8, 500)
    canvas.width = size
    canvas.height = size

    drawWheel(ctx, canvas.width, canvas.height)
    drawPointer(ctx, canvas.width, canvas.height)
  }, [categories])

  // Update the spinWheel function to only rotate the wheel, not the pointer
  const spinWheel = () => {
    if (spinning) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setSpinning(true)
    setSelectedCategory(null)

    // Random number of rotations (3-5 full rotations)
    const rotations = 3 + Math.random() * 2

    // Random angle within the selected segment
    const finalAngle = rotations * 2 * Math.PI + Math.random() * 2 * Math.PI

    // Animation duration (3-5 seconds)
    const duration = 3000 + Math.random() * 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for slowing down
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOut(progress)

      // Current angle
      const angle = easedProgress * finalAngle

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Save context state
      ctx.save()

      // Move to center, rotate wheel, then move back
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(angle)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)

      // Draw rotated wheel
      drawWheel(ctx, canvas.width, canvas.height)

      // Restore context to draw pointer without rotation
      ctx.restore()

      // Draw pointer (not rotated)
      drawPointer(ctx, canvas.width, canvas.height)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Determine which segment is selected based on the right side of the wheel
        const segmentAngle = (2 * Math.PI) / categories.length
        const normalizedAngle = (finalAngle + Math.PI / 2) % (2 * Math.PI) // Adjust for right side
        const selectedIndex = Math.floor(normalizedAngle / segmentAngle) % categories.length
        const selected = categories[(categories.length - selectedIndex) % categories.length]

        setSelectedCategory(selected)
        setSpinning(false)
      }
    }

    animate()
  }

  const goToCategory = () => {
    if (selectedCategory) {
      // Store selected category in localStorage to use it on the main page
      localStorage.setItem("selectedCategory", selectedCategory)
      router.push("/")
    }
  }

  const goBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <Button
          variant="outline"
          onClick={goBack}
          className="mb-6 bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Flashcards
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Category Wheel</h1>
          <p className="text-gray-400">Spin the wheel to randomly select a category</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <canvas ref={canvasRef} className="border-4 border-gray-700 rounded-full shadow-lg" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={spinWheel}
              disabled={spinning}
              className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-8 py-6 text-lg"
            >
              {spinning ? "Spinning..." : "Spin the Wheel"}
            </Button>

            {selectedCategory && (
              <div className="text-center">
                <p className="text-xl mb-2">Selected Category:</p>
                <p className="text-2xl font-bold text-blue-400 mb-4">{selectedCategory}</p>
                <Button onClick={goToCategory} className="bg-blue-600 hover:bg-blue-500">
                  Study This Category
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

