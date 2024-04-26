import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../FirebaseConfigaration/FirebaseAuth';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)


      const singUpWithEmailPassword = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      } 
      const singInWithEmailPassword = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }
      
      const userInfo = {
            singInWithEmailPassword,
            singUpWithEmailPassword, 
      }


      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;