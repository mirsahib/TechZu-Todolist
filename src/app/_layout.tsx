import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'Home',
        headerRight: () => <Text>Right</Text>,
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
