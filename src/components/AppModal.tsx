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

type ModalProps = {
  isModalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const AppModel = (props: ModalProps) => {
  const { isModalVisible, setModalVisible } = props;
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
            style={styles.input}
            placeholder="Enter task"
            // Additional TextInput props can be added as needed
          />
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              // Handle adding the task
              setModalVisible(!isModalVisible);
            }}
          >
            <Text style={styles.modalButtonText}>Add Task</Text>
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
    width: '100%', // Adjust the width as needed
    height: '30%', // Adjust the height as needed
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    width: '80%',
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
