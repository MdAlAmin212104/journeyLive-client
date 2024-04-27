import { GoogleAuthProvider,FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FirebaseConfigaration/FirebaseAuth';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)


      const googleProvider = new GoogleAuthProvider();
      const facebookProvider = new FacebookAuthProvider();
      const githubProvider = new GithubAuthProvider();
      



      const singUpWithEmailPassword = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      } 
      const singInWithEmailPassword = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }

      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }
      const facebookLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, facebookProvider)
      }
      const githubLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, githubProvider)
      }


      const logOut = () => {
            setLoading(true);
            return signOut(auth)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setLoading(false);
                  setUser(currentUser)
            })

            return () => {
                  unsubscribe();
            }
      }, []);





      const userInfo = {
            singInWithEmailPassword,
            singUpWithEmailPassword, 
            user,
            logOut,
            googleLogin,
            facebookLogin,
            githubLogin,
            loading,
            updateUserProfile,
      }


      return (
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;