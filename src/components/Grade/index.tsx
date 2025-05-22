import { Container } from './styles'

type gradeProps = {
  subject: string
  finalGrade: string
  onRemove: () => void
}

export function Grade({ subject, finalGrade, onRemove }: gradeProps) {
  return (
    <Container>
      <span>
        {subject}: {finalGrade}
      </span>
      <button onClick={onRemove}>X</button>
    </Container>
  )
}
