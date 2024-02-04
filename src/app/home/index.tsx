import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import AppModel from '../../components/AppModal';
import { useGetUser } from '../../hooks/useGetUser';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getUserTasks } from '../../hooks/useGetTask';
import { generateId } from '../../utils/generateId';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const { user } = useGetUser();
  const { tasks } = getUserTasks(user?.uid ?? '');
  console.log('🚀 ~ Home ~ user:', user?.uid);

  const handleTaskSubmit = async () => {
    console.log(task);
    setModalVisible(!isModalVisible);
    const id = generateId();
    console.log('🚀 ~ handleTaskSubmit ~ id:', id);
    const docRef = await addDoc(collection(db, 'tasks'), {
      tasks: { id: id, task: task },

      userId: user?.uid,
    });
    console.log('Document written with ID: ', docRef.id);
    setTask('');
  };

  //@ts-ignore
  const renderTaskCard = ({ item }) => <Card {...item} />;

  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTaskCard}
        />
      ) : (
        <Text style={styles.emptyTaskBar}>Task list is empty</Text>
      )}
      {/* modal */}
      <AppModel
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        taskText={task}
        onChangeTaskText={setTask}
        saveTask={handleTaskSubmit}
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
  emptyTaskBar: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
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
