import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import Popover from 'react-native-popover-view';
import { AntDesign } from '@expo/vector-icons';
const HomeLayout = () => {
  const touchable = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <Drawer
        screenOptions={{
          headerRight(props) {
            return (
              <Pressable ref={touchable} onPress={() => setShowPopover(true)}>
                <AntDesign name="user" size={24} color="black" />
              </Pressable>
            );
          },
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="task/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Task',
            title: 'Task',
          }}
        />
        <Drawer.Screen
          name="task/[id]" // This is the name of the page and must match the url from root
          options={{
            // drawerHideStatusBarOnOpen: true,
            drawerItemStyle: { display: 'none' },
            headerTitle(props) {
              return <Text>Single Task</Text>;
            },
            //drawerLabel: 'Single Task',
          }}
        />
        <Drawer.Screen
          name="setting" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Setting',
            title: 'Setting',
          }}
        />
      </Drawer>
      <Popover
        from={touchable}
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(false)}
      >
        <Pressable onPress={() => console.log('logout')}>
          <Text style={{ padding: 10 }}>Logout</Text>
        </Pressable>
      </Popover>
    </>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
