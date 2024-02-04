import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useGetUser } from '../../../hooks/useGetUser';
import { getUserTasks } from '../../../hooks/useGetTask';
import Card, { Check, Delete } from '../../../components/Card';

const Task = () => {
  const { user } = useGetUser();
  const { tasks } = getUserTasks(user?.uid ?? '');
  //@ts-ignore
  const renderTaskCard = ({ item }) => (
    <Card
      item={item}
      userId={user?.uid ?? ''}
      checkbtn={<Check item={item} userId={user?.uid ?? ''} />}
      deletebtn={<Delete item={item} userId={user?.uid ?? ''} />}
    />
  );
  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTaskCard}
        />
      ) : (
        <Text style={styles.emptyTaskBar}>Task list is empty</Text>
      )}
      {/* modal */}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: 'orange',
  },
  emptyTaskBar: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
});
