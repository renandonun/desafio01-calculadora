import { ButtonComponent } from './styles';

export default function Button( {label, onClick} ) {
  return (
    <ButtonComponent onClick={onClick}>
    {label}
    </ButtonComponent>
  )
}
