import { InputContainer } from './styles'

const Input = ({value}) => {
  return (
    <InputContainer>
    <input disabled value={value} style={{ color: 'black' }} />
    </InputContainer>
  );
}

export default Input;
