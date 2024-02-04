import { useEffect, useState } from 'react';
import { Unsubscribe, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
interface Taskdoc {
  id: string;
  tasks: {
    id: string;
    task: string;
  };
}
type task = Taskdoc['tasks'];

export const getUserTasks = (userId: string) => {
  const [tasks, settasks] = useState<task[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined; // Declare the unsubscribe variable

    const getData = async () => {
      if (userId) {
        // Set up a listener for real-time updates
        unsubscribe = onSnapshot(collection(db, 'tasks'), (querySnapshot) => {
          const tasksArray: task[] = [];
          querySnapshot.forEach((doc) => {
            const taskData = doc.data() as Taskdoc;
            tasksArray.push(taskData.tasks);
          });
          settasks(tasksArray);
        });
      }
    };

    if (userId) {
      // Fetch tasks from Firebase Firestore
      getData();
    }

    // Clean up the listener when the component unmounts or userId changes
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userId]);

  return { tasks };
};
