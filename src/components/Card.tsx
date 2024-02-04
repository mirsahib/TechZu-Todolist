import { Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
type CardProps = {
  item: {
    id: string;
    task: string;
  };
  userId: string;
  checkbtn?: React.ReactNode;
  deletebtn?: React.ReactNode;
};

export const Check = (item: CardProps) => {
  return (
    <Pressable onPress={() => console.log('check')} style={{}}>
      <AntDesign name="check" size={24} color="black" />
    </Pressable>
  );
};

export const Delete = (item: CardProps) => {
  return (
    <Pressable onPress={() => console.log('trash', item.item.id)} style={{}}>
      <EvilIcons name="trash" size={24} color="black" />
    </Pressable>
  );
};

const Card = (props: CardProps) => {
  const { item, userId, checkbtn, deletebtn } = props;
  console.log('🚀 ~ Card ~ item:', item);
  return (
    <Link
      href={{
        pathname: `/home/task/${item.id}`,
        params: { task: item.task },
      }}
      style={styles.taskCard}
    >
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 4,
        }}
      >
        <View style={{ width: 200, backgroundColor: 'orange' }}>
          <Text>{item.task}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '20%',
            backgroundColor: 'red',
          }}
        >
          {/* {checkbtn} */}
          {/* {deletebtn} */}
          {/* <Pressable onPress={() => console.log('check')} style={{}}>
            <AntDesign name="check" size={24} color="black" />
          </Pressable> */}
          <Pressable
            // onPress={() => console.log('trash', item.item.id)}
            style={{}}
          >
            <EvilIcons name="trash" size={24} color="black" />
          </Pressable>
        </View>
      </Pressable>
    </Link>
  );
};

export default Card;

const styles = StyleSheet.create({
  taskCard: {
    //flexDirection: 'row',
    //justifyContent: 'space-between',
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
