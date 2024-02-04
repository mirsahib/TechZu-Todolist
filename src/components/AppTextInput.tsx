import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

type AppTextInputProps = {
  control: any;
  errors: any;
};

const AppTextInput = ({ control, errors }: AppTextInputProps) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(val) => field.onChange(val)}
            value={field.value}
          />
        )}
        name="email"
        rules={{ required: 'You must enter your email' }}
      />
      {errors.email && <Text>{errors.email.message}</Text>}
    </>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
