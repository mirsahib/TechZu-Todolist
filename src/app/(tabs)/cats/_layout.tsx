import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
};
export default Layout;
