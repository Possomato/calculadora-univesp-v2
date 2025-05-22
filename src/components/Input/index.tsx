import { Container } from './styles.ts'

type InputProps = {
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ name, value, onChange, type }: InputProps) {
  return (
    <Container
      type={type}
      name={name}
      id={name}
      placeholder={name}
      value={value}
      onChange={onChange}
    ></Container>
  )
}
