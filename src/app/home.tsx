import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Card from '../components/Card';
import AppModel from '../components/AppModal';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Sample list of tasks
  const tasks = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
    // Add more tasks as needed
  ];
  //@ts-ignore
  const renderTaskCard = ({ item }) => <Card {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskCard}
      />
      {/* modal */}
      <AppModel
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />

      {/* Plus Button */}
      <Pressable onPress={toggleModal} style={styles.plusButton}>
        <Text style={styles.plusButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: 'orange',
  },
  plusButton: {
    position: 'absolute',
    bottom: 16, // Adjust the distance from the bottom as needed
    right: 16, // Adjust the distance from the right as needed
    backgroundColor: 'blue', // Set your desired button background color
    borderRadius: 50, // To make it a circular button
    width: 56, // Set the desired width
    height: 56, // Set the desired height
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
  },
  plusButtonText: {
    color: 'white', // Set your desired button text color
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
  },
});
