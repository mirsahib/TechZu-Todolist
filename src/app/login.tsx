import React, { useState } from 'react';
import { Stack } from 'expo-router';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Pressable,
} from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCreateAccount, setToggleCreateAccount] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login pressed', email, password);
  };

  const handleCreateAccount = () => {
    setToggleCreateAccount(!toggleCreateAccount);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>
        {toggleCreateAccount ? 'Create Account' : 'Login'}
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      {/* name container */}
      {toggleCreateAccount && (
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.nameInput}
            placeholder="First Name"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Last Name"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      )}

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      {/* Login Button */}
      <Button
        title={toggleCreateAccount ? 'Create Account' : 'Login'}
        onPress={handleLogin}
      />

      {/* Create Account Section */}
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>
          {toggleCreateAccount
            ? 'Already have an account?'
            : "Don't have an account?"}
        </Text>
        <Pressable onPress={handleCreateAccount}>
          <Text style={styles.createAccountButton}>
            {toggleCreateAccount ? 'Login' : 'Create Account'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  nameInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 8,
  },

  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountText: {
    marginRight: 8,
  },
  createAccountButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
