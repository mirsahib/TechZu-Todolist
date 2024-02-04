import { Link, Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { Drawer } from 'expo-router/drawer';

export default function HomeLayout() {
  const touchable = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

// screenOptions={{
//   headerTitle: 'Home',
//   headerRight: () => (
//     <Pressable
//       ref={touchable}
//       onPress={() => {
//         console.log('show popover');
//         setShowPopover(true);
//       }}
//     >
//       <Entypo name="dots-three-vertical" size={24} color="black" />
//     </Pressable>
//   ),
//   headerShown: true,
//   headerStyle: {
//     // backgroundColor: 'blue',
//   },
//   headerTintColor: 'white',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }}
