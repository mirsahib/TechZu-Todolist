import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
type ModalProps = {
  isModalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  saveTask: () => void;
  taskText: string;
  onChangeTaskText: React.Dispatch<React.SetStateAction<string>>;
};
const AppModel = (props: ModalProps) => {
  const {
    isModalVisible,
    setModalVisible,
    taskText,
    onChangeTaskText,
    saveTask,
  } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setModalVisible(!isModalVisible);
      }}
      presentationStyle="overFullScreen"
    >
      <View style={styles.modalContainer}>
        {/* Your modal content goes here */}
        <View style={styles.modalContent}>
          {/* Your modal content goes here */}
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.input}
            placeholder="Enter task"
            onChangeText={(val) => {
              onChangeTaskText(val);
            }}
            value={taskText}
            // Additional TextInput props can be added as needed
          />
          <Pressable style={styles.modalButton} onPress={saveTask}>
            <MaterialIcons name="input" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AppModel;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flexDirection: 'row',
    width: '100%', // Adjust the width as needed
    height: '20%', // Adjust the height as needed
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    width: '70%',
    paddingHorizontal: 10,
  },
  modalButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
