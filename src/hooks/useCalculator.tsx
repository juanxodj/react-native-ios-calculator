import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [numberPrev, setNumberPrev] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperator = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setNumberPrev('0');
  };

  const armNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // Evaluar si es otro cero, y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // Evitar 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = number;
    if (number.includes('-')) {
      negativo = '-';
      numeroTemp = number.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumber(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberWithPrev = () => {
    if (number.endsWith('.')) {
      setNumberPrev(number.slice(0, -1));
    } else {
      setNumberPrev(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberWithPrev();
    lastOperator.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberWithPrev();
    lastOperator.current = Operators.multiply;
  };

  const btnSubstract = () => {
    changeNumberWithPrev();
    lastOperator.current = Operators.substract;
  };

  const btnAdd = () => {
    changeNumberWithPrev();
    lastOperator.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(numberPrev);

    switch (lastOperator.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }

    setNumberPrev('0');
  };

  return {
    numberPrev,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    armNumber,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  };
};
