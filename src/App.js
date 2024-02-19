import { Container, Content, Row } from "./styles";
import { useState } from 'react';

import Input  from "./components/Input";
import Button from "./components/Button";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator(null);
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (prev === '0' ? String(number) : prev + number));
  };

  const handleSumNumbers = () => {
    performOperation('+');
  };

  const handleSubtractNumbers = () => {
    performOperation('-');
  };

  const handleMultiplyNumbers = () => {
    performOperation('*');
  };

  const handleDivideNumbers = () => {
    performOperation('/');
  };

  const performOperation = (nextOperator) => {
    if (firstNumber === '0' || !operator) {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperator(nextOperator);
    } else {
      const result = calculateResult(operator, firstNumber, currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber(String(result));
      setOperator(nextOperator);
    }
  };

  const handleEquals = () => {
    if (operator) {
      const result = calculateResult(operator, firstNumber, currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperator(null);
    }
  };

  const calculateResult = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return Number(num1) + Number(num2);
      case '-':
        return Number(num1) - Number(num2);
      case '*':
        return Number(num1) * Number(num2);
      case '/':
        return Number(num1) / Number(num2);
      default:
        return 0;
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
            <Button label="*" onClick={handleMultiplyNumbers}/>
            <Button label="/" onClick={handleDivideNumbers}/>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="." />
          </Row>                              
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handleSubtractNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </ Content>
    </Container>
  );
}

export default App;
