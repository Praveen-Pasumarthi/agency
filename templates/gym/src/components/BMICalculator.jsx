import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function BMICalculator() {
  const [ref, isInView] = useInView(0.1)
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState(null)

  const calculate = (e) => {
    e.preventDefault()
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w) return
    const bmi = w / (h * h)
    let category = ''
    let color = ''
    if (bmi < 18.5) { category = 'Underweight'; color = 'text-blue-500' }
    else if (bmi < 25) { category = 'Normal'; color = 'text-green-500' }
    else if (bmi < 30) { category = 'Overweight'; color = 'text-yellow-500' }
    else { category = 'Obese'; color = 'text-red-500' }
    setResult({ bmi: bmi.toFixed(1), category, color })
  }

  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
            BMI Calculator
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl mt-3 dark:text-white tracking-wider">
            KNOW YOUR BODY
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={calculate}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-xl shadow-black/5 dark:shadow-black/20"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium dark:text-gray-300 mb-2">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="170"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300 mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-brand text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-brand-dark transition-all duration-300"
          >
            Calculate BMI
          </button>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Your BMI</p>
              <p className="text-5xl font-bold dark:text-white">{result.bmi}</p>
              <p className={`text-lg font-semibold mt-2 ${result.color}`}>{result.category}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                {result.category === 'Normal'
                  ? 'Great! Keep up the good work.'
                  : 'Let us help you reach your ideal weight. Start a free trial today!'}
              </p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
