// RecruitmentPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const clubrec = ({ navigation }) => {
  const [selectedClub, setSelectedClub] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleJoinClub = () => {
    if (!selectedClub.trim() || !rollNumber.trim()) {
      Alert.alert('Error', 'Please enter both club name and roll number');
      return;
    }

    // Add logic to handle club joining with selectedClub and rollNumber
    console.log(`Joined ${selectedClub} with Roll Number: ${rollNumber}`);

    // Optionally, navigate to another screen or perform additional actions
    // navigation.navigate('AnotherScreen');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Club Recruitment Page</Text>

      <Text style={{ fontSize: 18, marginTop: 8 }}>Select Club:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8, paddingLeft: 8 }}
        placeholder="Enter Club Name"
        value={selectedClub}
        onChangeText={(text) => setSelectedClub(text)}
      />

      <Text style={{ fontSize: 18, marginTop: 8 }}>Enter Roll Number:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8, paddingLeft: 8 }}
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChangeText={(text) => setRollNumber(text)}
        keyboardType="numeric"
      />

      <Button title="Join Club" onPress={handleJoinClub} />
    </View>
  );
};

export default clubrec;
