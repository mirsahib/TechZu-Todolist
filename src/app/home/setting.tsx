import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* Display user information */}
        {/* <Image source={{ uri: '' }} style={styles.profileImage} /> */}
        <View style={styles.taskCard}>
          <Text style={styles.userInfoText}>{`Name: `}</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.userInfoText}>{`Email: `}</Text>
        </View>
        {/* Logout button */}
        <Button title="Logout" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2, // Add elevation for shadow on Android
    width: '100%', // Make the card full width
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
