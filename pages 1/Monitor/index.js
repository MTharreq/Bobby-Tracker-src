import React, { useState, useCallback, useEffect } from 'react';
import {Switch, ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import database from "../../../firebas-config";
import { ref, onValue } from 'firebase/database';
import axios from 'axios';


const Monitor = ({ navigation }) => {

	// const onSelectSwitch = index => {
	// 	alert('Selected index: ' + index);
	// };

  //SWITCH FUNCTION
	const [isEnabled, setIsEnabled] = useState(true);
	const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const textValue = `${isSwitchOn ? 'On' : 'Off'}`;
  
  const handleSwitchToggle = () => {
    setIsEnabled(!isEnabled);
    setButtonDisabled(isEnabled);
    setIsSwitchOn(!isSwitchOn);
    
    axios.get('https://blynk.cloud/external/api/update?token=0hzt-vjn9roOTnqwBOLcjke3JdoAGCNM&v7='+textValue)
  };

	const [ldrKiri, setLdrKiri] = useState();
	const [ldrKanan, setLdrKanan] = useState();
	const [ldrAtas, setLdrAtas] = useState();
	const [ldrBawah, setLdrBawah] = useState();
	const [blueServo, setBlueServo] = useState();
	const [blackServo, setBlackServo] = useState();

  

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://blynk.cloud/external/api/get?token=0hzt-vjn9roOTnqwBOLcjke3JdoAGCNM&v0&v1&v2&v3&v5&v6')
        .then(response => {
          setLdrAtas(response.data.v0.toString());
          setLdrBawah(response.data.v1.toString());
          setLdrKanan(response.data.v2.toString());
          setLdrKiri(response.data.v3.toString());

          setBlueServo(parseInt(response.data.v5));
          setBlackServo(parseInt(response.data.v6));
      
          console.log(response.data);
          // console.log(text);
        })
        .catch(error => {
          console.log(error);
        });
      };
  
    // Fetch data initially
    fetchData();
  
    // Fetch data every one second
    const interval = setInterval(fetchData, 1000);
    
    // Clean up interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  let blueServoValue=parseInt(blueServo)
  let blackServoValue=parseInt(blackServo)
  
  //COUNTER
  const [count, setCount] = useState(() =>{
    console.log('run function')
    return 0;
  })
  // const [count, setCount] = useState(blackServo)
  function decrementCountBlue() {
    setCount(0)
    setCount(prevCount => prevCount + 5)
    blueServoValue = blueServoValue - count

    axios.get('https://blynk.cloud/external/api/update?token=0hzt-vjn9roOTnqwBOLcjke3JdoAGCNM&v5='+blueServoValue)
  }
  function incrementCountBlue() {
    setCount(0)
    setCount(prevCount => prevCount + 5)
    blueServoValue = blueServoValue + count

    axios.get('https://blynk.cloud/external/api/update?token=0hzt-vjn9roOTnqwBOLcjke3JdoAGCNM&v5='+blueServoValue)
  }

  function decrementCountBlack() {
    setCount(0)
    setCount(prevCount => prevCount + 5)
    blackServoValue = blackServoValue - count

    axios.get('https://blynk.cloud/external/api/update?token=0hzt-vjn9roOTnqwBOLcjke3JdoAGCNM&v6='+blackServoValue)
  }
  function incrementCountBlack() {
    setCount(0)
    setCount(prevCount => prevCount + 5)
    blackServoValue = blackServoValue + count

    axios.get('https://blynk.cloud/external/api/update?token=0hzt-vjn9roOTnqwBOLcjke3JdoAGCNM&v6='+blackServoValue)
  }
  

  //USING FIREBASE
	// useEffect(()=>{
	// 	const ldrPath = ref(database, 'ldr/');
	// 	onValue(ldrPath, (Snapshot) => {
	// 		const data = Snapshot.val();
	// 		console.log(data)
	// 		setLdrAtas(data.atas);
	// 		setLdrBawah(data.bawah);
	// 		setLdrKiri(data.kiri);
	// 		setLdrKanan(data.kanan);
	// 	})
        
	// 	const servoPath = ref(database, 'servo/');
	// 	onValue(servoPath, (Snapshot) => {
	// 		const data = Snapshot.val();
	// 		console.log(data)
	// 		setBlueServo(data.blue);
	// 		setBlackServo(data.black);
	// 	})
  //   }, []);


  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Monitor</Text>
      </View>

      {/* CONTENT */}
      <ScrollView style={styles.scrollView}>

        {/* LDR CONTAINER */}
        <View style={[styles.ldrContainer]}>
					<View style={styles.ldrChild}>
						<Text style={styles.ldrTitle}>LDR Kiri</Text>
						<Text style={styles.ldrSubtitle}>{ldrKiri}</Text>
					</View>
					<View style={styles.ldrChild}>
						<Text style={styles.ldrTitle}>LDR Atas</Text>
						<Text style={styles.ldrSubtitle}>{ldrAtas}</Text>
					</View>
					<View style={styles.ldrChild}>
						<Text style={styles.ldrTitle}>LDR Bawah</Text>
						<Text style={styles.ldrSubtitle}>{ldrBawah}</Text>
					</View>
					<View style={styles.ldrChild}>
						<Text style={styles.ldrTitle}>LDR Kanan</Text>
						<Text style={styles.ldrSubtitle}>{ldrKanan}</Text>
					</View>
        </View>

        {/* SERVO */}
        <View style={styles.servoContainer}>
					<View style={[styles.card, {backgroundColor: '#D2EFFF'}]}>
						<Text style={styles.cardTitle}>Blue Servo</Text>
						<Text style={styles.cardSubtitle}>{blueServo}°</Text>
					</View>
					<View style={[styles.card, {backgroundColor: '#D3D3D3'}]}>
						<Text style={styles.cardTitle}>Black Servo</Text>
						<Text style={styles.cardSubtitle}>{blackServo}°</Text>
					</View>
        </View>

        {/* SOLAR */}
        {/* <View style={[styles.solarContainer, styles.elevation, {color: "#FFF4D9"}]}>
					<View style={[styles.solarChild, {color: "#FFF4D9"}]}>
						<Text style={styles.cardTitle}>Tegangan Solar Panel</Text>
						<Text style={styles.cardSubtitle}>3.2 volt</Text>
					</View>
        </View> */}

        {/* MANUAL MODE */}
        <View>
          <View style={styles.manualMode}>
            <Text style={styles.h1}>Manual mode</Text>
            {/* <Text style={styles.h1}>{isSwitchOn.toString()}</Text> */}
            {/* <Text style={styles.h1}>{textValue}</Text> */}

            <Switch
              trackColor={{true: '#F5F7EF', false: 'grey'}}
              thumbColor={isEnabled ? '#B6D049' : '#f4f3f4'}
              value={isEnabled}
              onValueChange={handleSwitchToggle}
            />
          </View>

          {/* ROTATE BLUE SERVO */}
          <View>
            <Text style={styles.h2}>Rotate Blue Servo</Text>
          </View>
          <View style={[{flexDirection: 'row'}]}>
            <TouchableOpacity 
              style={[buttonDisabled ? styles.enabledButton : styles.disabledButton]} 
              onPress={decrementCountBlue}
              disabled={buttonDisabled}
            >
              <Text style={styles.buttonText}>-5°</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[buttonDisabled ? styles.enabledButton : styles.disabledButton]} 
              onPress={incrementCountBlue}
              disabled={buttonDisabled}
            >
              <Text style={styles.buttonText}>+5°</Text>
            </TouchableOpacity>
          </View>

          {/* ROTATE BLACK SERVO */}
          <View>
            <Text style={styles.h2}>Rotate Black Servo</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            
            <TouchableOpacity 
              style={[buttonDisabled ? styles.enabledButton : styles.disabledButton]} 
              onPress={decrementCountBlack}
              disabled={buttonDisabled}
            >
              <Text style={styles.buttonText}>-5°</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[buttonDisabled ? styles.enabledButton : styles.disabledButton]} 
              onPress={incrementCountBlack}
              disabled={buttonDisabled}
            >
              <Text style={styles.buttonText}>+5°</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Monitor;

const styles = StyleSheet.create({
  //CONTAINER
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  
  //HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 28,
    fontWeight: '500',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
  
  //LDR MEDIUM CHIP
  ldrContainer: {
    backgroundColor: '#F5F7EF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 16,
    paddingVertical: 8,
  },
  ldrChild: {
    // borderWidth: 1,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  ldrTitle: {
    color: 'grey',
    fontSize: 14,
  },
  ldrSubtitle: {
    color: 'black',
    fontSize: 18,
  },
  
  //SERVO CARD
  servoContainer: {
    // backgroundColor: 'red',
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  // MANUAL MODE


  //==OTHER COMPONENTS==//
  //CARD
  card: {
    width: 175,
    height: 100,
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'black',
    fontSize: 16,
  },
  cardSubtitle: {
    color: 'black',
    fontSize: 26,
    fontWeight: 500,
  },
  
  enabledButton: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 10,
  },
  disabledButton: {
    flex: 1,
    backgroundColor: '#B6D049',
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 10,
  },
  
  //b
  button: {
    flex: 1,
    marginTop: 30,
    // width: '80%',
    backgroundColor: '#B6D049',
    borderRadius: 50,
    paddingVertical: 12,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  //c
	// card: {
  //   backgroundColor: 'white',
  //   borderRadius: 8,
  //   paddingVertical: 45,
  //   paddingHorizontal: 25,
  //   width: '100%',
  //   marginVertical: 10,
  // },
  elevation: {
    elevation: 20,
	},

  //d
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#CDC5C5',
  },

  //h
  h1: {
    color: '#372F2F',
    fontSize: 22,
    fontFamily: 'PlusJakartaSans_400Regular'
  },
  h2: {
    marginTop: 20,
    marginBottom: 10,

    textAlign: 'center',
    color: 'grey',
    fontSize: 18,
    fontWeight: '400',
  },

  //i
 
  //l

  //m
  manualMode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  //p

  //s
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -1,
    paddingTop: 20,
    flexDirection: 'row',
  },
  subtitle: {
    color: '#7D7676',
    fontSize: 14,
  },
  solarContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  solarChild: {
    backgroundColor: '#D2EFFF',
    width: 160,
    height: 80,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },

  //t
  teganganContainer: {
    justifyContent: 'center',
  },
  teganganChild: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
		color: 'black'
  },
});
