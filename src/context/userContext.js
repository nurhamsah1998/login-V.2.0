import { createContext, useEffect, useState, useContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [eror, setEror] = useState('');

  useEffect(() => {
    setLoading(true);
    const unsubcribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setEror('');
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  const registerUser = (email, name, password) => {
    ///
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => console.log(res))
      .catch((er) => setEror(er.message))
      .finally(() => setLoading(false));
  };
  const userLogIn = (email, password) => {
    ///
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((er) => setEror(er.message))
      .finally(() => setLoading(false));
  };
  const userLogOut = () => {
    ///
    signOut(auth);
  };
  const forgotPassword = (email) => {
    ///
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    eror,
    registerUser,
    userLogIn,
    forgotPassword,
    userLogOut,
  };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
