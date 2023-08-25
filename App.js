import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';

export default function App() {
  let isOperating;
  let evalAns;
  const [num, setNum] = useState('');
  const [dec, setDec] = useState(true);
  const [mult, setMult] = useState(false);
  const [add, setAdd] = useState(false);
  const [minus, setMinus] = useState(false);
  const [div, setDiv] = useState(false);
  const [exp, setExp] = useState(false);
  const [isAns, setisAns] = useState(false);
  const [ans, setAns] = useState('');
  const animation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
        }),
      ]),
      { resetBeforeIteration: true, iterations: Number.MAX_SAFE_INTEGER }
    ).start();
  });

  const color = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(142, 214, 197)', 'rgb(164, 94, 229)'],
  });

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  outputText = function () {
    if (num.length > 8) {
      myFontSize = (8 * windowWidth) / (5.2 * num.length);
      myTopMargin = windowHeight * 0.25 + myFontSize / 0.6382716;
      console.log(myTopMargin);
    } else {
      myFontSize = windowWidth / 5.2;
      myTopMargin = windowHeight * 0.25;
    }
    return {
      fontSize: myFontSize,
      color: 'white',
      textAlign: 'right',
      alignItems: 'baseline',
      marginTop: windowHeight * 0.25,
      marginRight: '3%',
    };
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#191919',
    },
    row: {
      flexDirection: 'row',
      width: windowWidth * 0.95,
      height: windowHeight * 0.12,
      marginLeft: '3%',
      marginRight: '3%',
    },

    square: {
      borderColor: '#8ED6C5',
      borderRadius: (windowWidth * 0.23) / 2,
      marginVertical: windowHeight * 0.01,
      marginHorizontal: windowWidth * 0.01,
      backgroundColor: '#191919',
      flex: 1,
      width: windowWidth * 0.23,
      height: windowHeight * 0.1,
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },

    operator: {
      flex: 1,
      borderColor: '#f1f0ef',
      borderRadius: (windowWidth * 0.23) / 2,
      marginVertical: windowHeight * 0.01,
      marginHorizontal: windowWidth * 0.01,
      backgroundColor: color,
      width: windowWidth * 0.23,
      height: windowHeight * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },

    text: {
      fontSize: windowHeight * 0.04,
      fontWeight: 'bold',
      color: '#f1f0ef',
      justifyContent: 'space-between',
    },

    topOpp: {
      flex: 1,
      borderColor: '#f1f0ef',
      borderRadius: (windowWidth * 0.23) / 2,
      marginVertical: windowHeight * 0.01,
      marginHorizontal: windowWidth * 0.01,
      backgroundColor: '#333333',
      marginTop: windowHeight * 0.01,
      width: windowWidth * 0.23,
      height: windowHeight * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },
  });

  const onPressNum = (param) => {
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + param);
  };

  const onPress0 = () => {
    //When 0 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 0);
  };
  const onPress1 = () => {
    //When 1 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 1);
  };
  const onPress2 = () => {
    //When 2 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 2);
    //console.log(output);
  };
  const onPress3 = () => {
    //When 3 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 3);
    //console.log(output);
  };
  const onPress4 = () => {
    //When 4 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 4);
  };
  const onPress5 = () => {
    //When 5 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 5);
  };
  const onPress6 = () => {
    //When 6 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 6);
  };
  const onPress7 = () => {
    //When 7 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 7);
  };
  const onPress8 = () => {
    //When 8 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 8);
  };
  const onPress9 = () => {
    //When 9 Touchable Opacity is Pressed
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    setisAns((isAns) => false);
    setNum((num) => num + 9);
  };
  const onPressAC = () => {
    //When AC Touchable Opacity is Pressed
    setNum((num) => '');
    setAns((ans) => '');
    setDec((dec) => true);
  };
  const onPressEXP = () => {
    //When EXP Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (num == '' || numDelete == '.' || numDelete == ')') {
      setExp((exp) => false);
    } else {
      if (isAns == true) {
        setNum((num) => ans);
        setAns((ans) => '');
        setisAns((isAns) => false);
      }

      if (
        numDelete == '+' ||
        numDelete == '-' ||
        numDelete == '÷' ||
        numDelete == '×' ||
        numDelete == '^'
      ) {
        setAdd((add) => false);
        setDiv((div) => false);
        setMult((mult) => false);
        setMinus((minus) => false);
        setNum((num) => num.substring(0, num.length - 1));
      }
      setExp((exp) => true);
      setDec((dec) => true);
      setNum((num) => num + '^');
    }
  };
  const onPressPlus = () => {
    //When Plus Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (num == '' || numDelete == '.' || numDelete == ')') {
      setAdd((add) => false);
    } else {
      if (isAns == true) {
        setNum((num) => ans);
        setAns((ans) => '');
        setisAns((isAns) => false);
      }

      if (
        numDelete == '+' ||
        numDelete == '^' ||
        numDelete == '-' ||
        numDelete == '÷' ||
        numDelete == '×'
      ) {
        setMinus((minus) => false);
        setDiv((div) => false);
        setMult((mult) => false);
        setExp((exp) => false);
        setNum((num) => num.substring(0, num.length - 1));
      }
      setAdd((add) => true);
      output = num + '+';
      setDec((dec) => true);
      setNum((num) => num + '+');
      //console.log(num);
    }
  };
  const onPressMinus = () => {
    //When Minus Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (num == '' || numDelete == '.' || numDelete == ')') {
      setMinus((minus) => false);
    } else {
      if (isAns == true) {
        setNum((num) => ans);
        setAns((ans) => '');
        setisAns((isAns) => false);
      }

      if (
        numDelete == '+' ||
        numDelete == '^' ||
        numDelete == '-' ||
        numDelete == '÷' ||
        numDelete == '×'
      ) {
        setAdd((add) => false);
        setDiv((div) => false);
        setMult((mult) => false);
        setExp((exp) => false);
        setNum((num) => num.substring(0, num.length - 1));
      }

      setMinus((minus) => true);
      output = num + '-';
      setDec((dec) => true);
      setNum((num) => num + '-');
    }
  };
  const onPressDiv = () => {
    //When Division Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (num == '' || numDelete == '.' || numDelete == ')') {
      setDiv((div) => false);
    } else {
      if (isAns == true) {
        setNum((num) => ans);
        setAns((ans) => '');
        setisAns((isAns) => false);
      }

      if (
        numDelete == '+' ||
        numDelete == '^' ||
        numDelete == '-' ||
        numDelete == '÷' ||
        numDelete == '×'
      ) {
        setAdd((add) => false);
        setMinus((minus) => false);
        setMult((mult) => false);
        setExp((exp) => false);
        setNum((num) => num.substring(0, num.length - 1));
      }

      setDiv((div) => true);
      output = num + '÷';
      setDec((dec) => true);
      setNum((num) => num + '÷');
    }
  };

  const onPressMult = () => {
    //When Multiplication Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (num == '' || numDelete == '.' || numDelete == ')') {
      setMult((mult) => false);
    } else {
      if (isAns == true) {
        setNum((num) => ans);
        setAns((ans) => '');
        setisAns((isAns) => false);
      }

      if (
        numDelete == '+' ||
        numDelete == '^' ||
        numDelete == '-' ||
        numDelete == '÷' ||
        numDelete == '×'
      ) {
        setAdd((add) => false);
        setMinus((minus) => false);
        setDiv((div) => false);
        setExp((exp) => false);
        setNum((num) => num.substring(0, num.length - 1));
      }
      setMult((mult) => true);
      output = num + '×';
      setDec((dec) => true);
      setNum((num) => num + '×');
      //console.log(output);
    }
  };
  const onPressDec = () => {
    //When Decimal Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (isAns == true) {
      setNum((num) => '');
      setAns((ans) => '');
    }
    if (numDelete !== '.') {
      if (dec == true) {
        setisAns((isAns) => false);
        setNum((num) => num + '.');
        setDec((dec) => false);
      }
    }
    //console.log(output);
  };
  const onPressChangeSign = () => {
    //When Negative Sign Touchable Opacity is Pressed
    if (
      mult == true ||
      add == true ||
      div == true ||
      minus == true ||
      exp == true
    ) {
      isOperating = true;
    }
    if (num == '') {
      isOperating = false;
    }
    const numDelete = num[num.length - 1];

    if (isAns == true) {
      setNum((num) => '(-)');
      setAns((ans) => '');
    } else {
      if (isAns == false) {
        if (isOperating == true) {
          if (
            numDelete == '+' ||
            numDelete == '^' ||
            numDelete == '÷' ||
            numDelete == '×' ||
            numDelete == '-'
          ) {
            setNum((num) => num + '(-)');
          }
        } else {
          if (isOperating == false) {
            setNum((num) => '(-)' + num);
          }
        }
      }
    }
    setisAns((isAns) => false);
  };
  const onPressDEL = () => {
    //When Delete Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (
      numDelete == '+' ||
      numDelete == '×' ||
      numDelete == '^' ||
      numDelete == '-' ||
      numDelete == '÷'
    ) {
      setAdd((add) => false);
      setMult((mult) => false);
      setMinus((minus) => false);
      setDiv((div) => false);
      setExp((exp) => false);
    }
    if (numDelete == '.') {
      setDec((dec) => true);
    }
    if (isAns != true && numDelete == ')') {
      setNum((num) => num.substring(0, num.length - 2));
    }
    if (isAns != true) {
      setNum((num) => num.substring(0, num.length - 1));
    }
    //console.log(output);
  };

  function replaceAll(phrase, searchValue, newValue) {
    return phrase.split(searchValue).join(newValue);
  }

  const onPressEQ2 = () => {
    //When Equal Touchable Opacity is Pressed
    const numDelete = num[num.length - 1];
    if (
      numDelete !== '+' &&
      numDelete !== '-' &&
      numDelete !== '×' &&
      numDelete !== '÷' &&
      numDelete !== '^' &&
      numDelete !== ')' &&
      numDelete !== '.' &&
      num !== ''
    ) {
      let evalNum = num;
      evalNum = replaceAll(evalNum, '×', '*');
      evalNum = replaceAll(evalNum, '÷', '/');
      evalNum = replaceAll(evalNum, '^', '**');
      evalNum = replaceAll(evalNum, '-(-)', '+');
      evalNum = replaceAll(evalNum, '(-)', '-');
      console.log(evalNum);
      console.log(num);
      evalAns = eval(evalNum);
      setAns((ans) => eval(evalNum));

      setNum((num) => num.replace(num, evalAns));

      if (isFinite(evalAns) == false) {
        setNum((num) => 'Error');
      }
      setisAns((isAns) => true);
      setAdd((add) => false);
      setMult((mult) => false);
      setDiv((div) => false);
      setExp((exp) => false);
      setMinus((minus) => false);
    }
  };
  const Square = ({ text }) => (
    <View style={styles.square}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
  const TopOpp = ({ text }) => (
    <View style={styles.topOpp}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, color: 'white', backgroundColor: '#191919' }}>
        <Text style={this.outputText()} numberOfLines={1}>
          {num}
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.topOpp} onPress={onPressAC}>
          <Text style={styles.text}> AC </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topOpp} onPress={onPressChangeSign}>
          <Text style={styles.text}> (-) </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.topOpp} onPress={onPressEXP}>
          <Text style={styles.text}> EXP </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDiv}>
          <Animated.View style={styles.operator}>
            <Text style={styles.text}> ÷ </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.square} onPress={onPress7}>
          <Text style={styles.text}> 7 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={onPress8}>
          <Text style={styles.text}> 8 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPress9}>
          <Text style={styles.text}> 9 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPlus}>
          <Animated.View style={styles.operator}>
            <Text style={styles.text}> + </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.square} onPress={onPress4}>
          <Text style={styles.text}> 4 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPress5}>
          <Text style={styles.text}> 5 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPress6}>
          <Text style={styles.text}> 6 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressMinus}>
          <Animated.View style={styles.operator}>
            <Text style={styles.text}> - </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.square} onPress={onPress1}>
          <Text style={styles.text}> 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPress2}>
          <Text style={styles.text}> 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPress3}>
          <Text style={styles.text}> 3 </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressMult}>
          <Animated.View style={styles.operator}>
            <Text style={styles.text}> × </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.square} onPress={onPressDEL}>
          <Text style={styles.text}> DEL </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPress0}>
          <Text style={styles.text}> 0 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.square} onPress={onPressDec}>
          <Text style={styles.text}> . </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressEQ2()}>
          <Animated.View style={styles.operator}>
            <Text style={styles.text}> = </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
