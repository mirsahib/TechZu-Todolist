import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const SingleTask = () => {
  const router = useLocalSearchParams();
  console.log('🚀 ~ SingleTask ~ router:', router);
  // console.("🚀 ~ SingleTask ~ router:", router)
  return (
    <View>
      <Text>SingleTask: {router.id}</Text>
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({});
