import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';

const SingleTask = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  // params;
  //@ts-ignore
  const { task, userId, id } = params;
  console.log('🚀 ~ SingleTask ~ params:', task, id, userId);
  // console.log('🚀 ~ SingleTask ~ item:', item.task);
  //@ts-ignore
  const [taskText, setTaskText] = useState('');

  // useEffect(() => {
  //   setTaskText(task as string);
  // }, [params]);

  const handleEdit = async () => {
    // Implement your edit logic here
    console.log('Edit button pressed');
    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      where('tasks.id', '==', id),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      await updateDoc(doc.ref, {
        'tasks.task': taskText,
      });
    });
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={task as string}
        style={styles.textInput}
        multiline
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.editButton} onPress={handleEdit}>
          <Text>Save</Text>
        </Pressable>
        <View style={styles.verticalDivider} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    minHeight: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    padding: 8,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  verticalDivider: {
    width: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  completeButton: {
    padding: 8,
    backgroundColor: 'lightgreen',
    borderRadius: 5,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: 'lightcoral',
    borderRadius: 5,
    marginLeft: 8,
  },
});

export default SingleTask;
