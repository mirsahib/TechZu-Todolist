import { Redirect } from 'expo-router';
import { Text } from 'react-native';

const Index = () => {
  const auth = true;

  return <>{auth ? <Redirect href="/home" /> : <Redirect href="/login" />}</>;
};
export default Index;
