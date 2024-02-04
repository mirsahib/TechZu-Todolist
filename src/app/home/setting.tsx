import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { useGetUser } from '../../hooks/useGetUser';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'expo-router';
const Setting = () => {
  const { user } = useGetUser();
  const router = useRouter();
  console.log('🚀 ~ Setting ~ user:', user);
  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };
  return (
    <View style={styles.container}>
      <View>
        {/* Display user information */}
        {/* <Image source={{ uri: '' }} style={styles.profileImage} /> */}
        <View style={styles.taskCard}>
          <Text style={styles.userInfoText}>{`Id: ${user?.uid} `}</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.userInfoText}>{`Email: ${user?.email} `}</Text>
        </View>
        {/* Logout button */}
        <Button title="Logout" onPress={() => handleLogout()} />
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
