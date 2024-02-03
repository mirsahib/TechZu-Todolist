import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'Home',
        headerRight: () => (
          <Pressable>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </Pressable>
        ),
        headerShown: true,
        headerStyle: {
          // backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
