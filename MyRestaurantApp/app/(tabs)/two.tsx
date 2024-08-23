import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert, ImageBackground, Text, View } from 'react-native';

export default function TabTwoScreen() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleReservation = () => {
    if (name && date && time && guests) {
      Alert.alert('Reservation Confirmed', `Thank you ${name}, your reservation for ${guests} guests on ${date} at ${time} is confirmed.`);
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/pizza.jpg')} // נתיב לתמונת הרקע
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Reserve a Table</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Time (HH:MM)"
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Guests"
          value={guests}
          onChangeText={setGuests}
          keyboardType="numeric"
        />
        <Button title="Reserve" onPress={handleReservation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
