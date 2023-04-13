import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    numberPrev,
    number,
    clean,
    positiveNegative,
    armNumber,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {numberPrev !== '0' && (
        <Text style={styles.smallResult}>{numberPrev}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={armNumber} />
        <ButtonCalc text="8" action={armNumber} />
        <ButtonCalc text="9" action={armNumber} />
        <ButtonCalc text="x" color="#FF9427" action={btnMultiply} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={armNumber} />
        <ButtonCalc text="5" action={armNumber} />
        <ButtonCalc text="6" action={armNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubstract} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={armNumber} />
        <ButtonCalc text="2" action={armNumber} />
        <ButtonCalc text="3" action={armNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" width action={armNumber} />
        <ButtonCalc text="." action={armNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
