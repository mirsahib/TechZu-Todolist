import { Link, Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import Popover from 'react-native-popover-view';

export default function HomeLayout() {
  const touchable = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  const renderPopoverContent = () => (
    <View style={{ padding: 16 }}>
      <Link href={'/setting'} onPress={() => setShowPopover(false)}>
        <Text>Settings</Text>
      </Link>
      {/* Add your popover content here */}
    </View>
  );

  return (
    <>
      <Stack
        screenOptions={{
          headerTitle: 'Home',
          headerRight: () => (
            <Pressable
              ref={touchable}
              onPress={() => {
                console.log('show popover');
                setShowPopover(true);
              }}
            >
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
      <Popover
        from={touchable}
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(false)}
      >
        {renderPopoverContent()}
      </Popover>
    </>
  );
}
