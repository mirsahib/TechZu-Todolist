import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const SignUp = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
