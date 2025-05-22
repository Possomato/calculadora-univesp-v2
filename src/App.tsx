import './App.css'
import { useState } from 'react'
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {
  const [subject, setSubject] = useState('') // disciplina
  const [avaGrade, setAvaGrade] = useState('') // notaAva
  const [examGrade, setExamGrade] = useState('') // notaProva

  const [grades, setGrades] = useState<Array<{
    subject: string;
    avaGrade: number;
    examGrade: number;
    finalGrade: number;
  }>>(() => {
    const data = localStorage.getItem('UnivespGrades')
    try {
      const parsed = data ? JSON.parse(data) : []
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })

  const handleCalculate = () => { 
    const calculation = Number(avaGrade) * 0.4 + Number(examGrade) * 0.6

    const newGrade = {
      subject,
      avaGrade: Number(avaGrade),
      examGrade: Number(examGrade),
      finalGrade: Number(calculation.toFixed(2)) 
    }

    const updatedGrades = [...grades, newGrade]
    setGrades(updatedGrades)
    localStorage.setItem('UnivespGrades', JSON.stringify(updatedGrades))
  }

  return (
    <>
      <h1>Calculadora UNIVESP</h1>
      <Input
        type="text"
        name="Disciplina" 
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        type="number"
        name="Média AVA" 
        value={avaGrade}
        onChange={(e) => setAvaGrade(e.target.value)}
      />
      <Input
        type="number"
        name="Prova Regular" 
        value={examGrade}
        onChange={(e) => setExamGrade(e.target.value)}
      />
      <Button title="Calcular" onClick={handleCalculate} />
      {grades.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
            {grades.map((grade, index) => (
              <li key={index}>
                <strong>{grade.subject}:</strong> Nota final: {grade.finalGrade.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App
