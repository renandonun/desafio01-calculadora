import { useState } from 'react';
import Button from './components/Button'
import Input from './components/Input'
import { Container, Content, Row } from './styles';

export default function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');

  function handleOnclear() {
    setCurrentNumber('0');
    setOperator('');
  }

  function handleAddNumber(number) {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`)
  }

  function handleSumNumber() {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
    }
  }

  function handleSubNumber() {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
    }
  }

  function handleMultiplicationNumber() {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
    }
  }

  function handleDivisionNumber() {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
    }
  }

  function handleResult() {
    if(firstNumber !== '' && operator !== '' && currentNumber !== '') {
      switch (operator) {
        case '+':
          handleSumNumber();
        break;
        case '-':
          handleSubNumber();
        break;
        case '*':
          handleMultiplicationNumber();
        break;
        case '/':
          handleDivisionNumber();
        break;
        default:
        break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='C' onClick={() => handleOnclear()} />
          <Button label='/' onClick={() => handleDivisionNumber()} />
          <Button label='x' onClick={() => handleMultiplicationNumber()} />
          <Button label='-' onClick={() => handleSubNumber()} />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='+' onClick={() => handleSumNumber()} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='.' onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='=' onClick={() => handleResult()} />
        </Row>
        <Row>
          <Button label='0' onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

