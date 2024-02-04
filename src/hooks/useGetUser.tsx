import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { User } from 'firebase/auth';
export const useGetUser = () => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('🚀 ~ onAuthStateChanged ~ user:', user.uid);
      }
      setUser(user);
    });

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, []);

  return { user };
};
