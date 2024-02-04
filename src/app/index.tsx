import { Redirect } from 'expo-router';
import { Text } from 'react-native';

const Index = () => {
  const auth = false;

  return <>{auth ? <Redirect href="/home" /> : <Redirect href="/login" />}</>;
};
export default Index;
