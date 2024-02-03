import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

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
  const renderTaskCard = ({ item }) => (
    <View style={styles.taskCard}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskCard}
      />
      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {/* Your modal content goes here */}
          <View style={styles.modalContent}>
            {/* Your modal content goes here */}
            <Text>This is your modal content</Text>
            <Pressable onPress={toggleModal}>
              <Text>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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

  taskCard: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2, // Add elevation for shadow on Android
    width: '100%', // Make the card full width
  },
  taskText: {
    textAlign: 'left', // Align text to the left
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%', // Adjust the width as needed
    height: '30%', // Adjust the height as needed
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
