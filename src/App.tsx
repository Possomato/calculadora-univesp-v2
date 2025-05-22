import './App.css'
import { useState } from 'react'

import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {
  const [disciplina, setDisciplina] = useState('')
  const [notaAva, setNotaAva] = useState('')
  const [notaProva, setNotaProva] = useState('')
  const [result, setResult] = useState<number | null>(null)

  function handleButton() {
    const calculation = Number(notaAva) * 0.4 + Number(notaProva) * 0.6
    setResult(calculation)
  }

  return (
    <>
      <h1>Calculadora UNIVESP</h1>
      <Input
        type="text"
        name="Disciplina"
        value={disciplina}
        onChange={(e) => setDisciplina(e.target.value)}
      />
      <Input
        type="number"
        name="Média AVA"
        value={notaAva}
        onChange={(e) => setNotaAva(e.target.value)}
      />
      <Input
        type="number"
        name="Prova Regular"
        value={notaProva}
        onChange={(e) => setNotaProva(e.target.value)}
      />
      <Button title="Calcular" onClick={handleButton} />
      {result !== null && (
        <div>
          <h2>{disciplina}</h2>
          <span>Nota final: {result}</span>
        </div>
      )}
    </>
  )
}

export default App
