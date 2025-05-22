import {Container} from './styles.ts'

type InputProps = {
  title?: string;
  onClick: () => void
};

export function Button({title, onClick}: InputProps){
  return(
    <Container onClick={onClick}>
      {title}
    </Container>
  )
}