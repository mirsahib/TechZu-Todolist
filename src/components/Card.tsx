import { Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CardProps = {
  id: string;
  title: string;
};
const Card = (item: CardProps) => {
  return (
    <View style={styles.taskCard}>
      <Text>{item.title}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '20%',
        }}
      >
        <Pressable
          onPress={() => {
            console.log('trash', item.id);
          }}
          style={{}}
        >
          <EvilIcons name="trash" size={24} color="black" />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('check');
          }}
          style={{}}
        >
          <AntDesign name="check" size={24} color="black" />
        </Pressable>
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
    width: '100%', // Make the card full width
  },
  taskText: {
    textAlign: 'left', // Align text to the left
  },
});
