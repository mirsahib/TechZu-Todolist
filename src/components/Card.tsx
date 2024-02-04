import { Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

type CardProps = {
  item: {
    id: string;
    task: string;
  };
  userId: string;
  checkbtn?: React.ReactNode;
  deletebtn?: React.ReactNode;
};

export const Check = (props: CardProps) => {
  const { item, userId } = props;
  const router = useRouter();

  const handleCheck = async () => {
    console.log('check', item.id);
    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      where('tasks.id', '==', item.id),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      await updateDoc(doc.ref, {
        'tasks.completed': true,
      });
    });
    router.navigate('/home');

    // console.log('🚀 ~ handleCheck ~ q:', q);
  };

  return (
    <Pressable onPress={handleCheck} style={{}}>
      <AntDesign name="check" size={24} color="black" />
    </Pressable>
  );
};

export const Delete = (props: CardProps) => {
  const { item, userId } = props;
  const router = useRouter();

  const handleDelete = async () => {
    console.log('check', item.id);
    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', userId),
      where('tasks.id', '==', item.id),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
    router.navigate('/home');
  };
  return (
    <Pressable onPress={() => handleDelete()}>
      <EvilIcons name="trash" size={24} color="black" />
    </Pressable>
  );
};

const Card = (props: CardProps) => {
  const { item, userId, checkbtn, deletebtn } = props;
  const router = useRouter();
  // console.log('🚀 ~ Card ~ item:', item);
  const navigateToTask = () => {
    router.navigate({
      pathname: `/home/task/${item.id}`,
      params: { task: item.task, userId: userId },
    });
  };
  return (
    <View style={styles.taskCard}>
      <Pressable onPress={() => navigateToTask()}>
        <View style={{}}>
          <Text>{item.task}</Text>
        </View>
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '20%',
        }}
      >
        {checkbtn}
        {deletebtn}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2, // Add elevation for shadow on Android
    //width: '100%', // Make the card full width
  },
  taskText: {
    textAlign: 'left', // Align text to the left
  },
});
