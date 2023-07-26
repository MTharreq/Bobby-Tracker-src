<View>
<View style={styles.manualMode}>
  <Text style={styles.h1}>Manual mode</Text>
  <Text>{textValue}</Text>
  <Switch
    value={isEnabled}
    onValueChange={handleSwitchToggle}
  />
</View>

{/* ROTATE BLUE SERVO */}
<View>
  <Text>Rotate Blue Servo</Text>
  <TouchableOpacity></TouchableOpacity>
</View>
<View style={{flex: 1, flexDirection: 'row'}}>
  <TouchableOpacity 
    style={[buttonDisabled ? styles.disabledButton : styles.enabledButton]} 
    onPress={() => navigation.navigate('MainApp')}
    disabled={buttonDisabled}
  >
    <Text style={styles.buttonText}>-5°</Text>
  </TouchableOpacity>
  
  <TouchableOpacity 
    style={[buttonDisabled ? styles.disabledButton : styles.enabledButton]} 
    onPress={() => navigation.navigate('MainApp')}
    disabled={buttonDisabled}
  >
    <Text style={styles.buttonText}>+5°</Text>
  </TouchableOpacity>
</View>

{/* ROTATE BLACK SERVO */}
<View>
  <Text>Rotate Black Servo</Text>
  <TouchableOpacity></TouchableOpacity>
</View>
<View style={{flex: 1, flexDirection: 'row'}}>
  <TouchableOpacity 
    style={[buttonDisabled ? styles.disabledButton : styles.enabledButton]} 
    onPress={decrementCount}
    disabled={buttonDisabled}
    // onClick={decrementCount}
  >
  <Text style={styles.buttonText}>-5°</Text>
  </TouchableOpacity>
  <Text>{parseInt(blackServo)+count}</Text>
  <TouchableOpacity 
    style={[buttonDisabled ? styles.disabledButton : styles.enabledButton]} 
    onPress={incrementCount}
    disabled={buttonDisabled}
    // onClick={incrementCount}
  >
    <Text style={styles.buttonText}>+5°</Text>
  </TouchableOpacity>
</View>
</View>