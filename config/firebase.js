import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABzsCDndMzfzMJTs1JS6zZ1PfJrjTfeug",
  authDomain: "iotprojektas.firebaseapp.com",
  projectId: "iotprojektas",
  storageBucket: "iotprojektas.appspot.com",
  messagingSenderId: "642381903343",
  appId: "1:642381903343:web:b0677fb89af751b0fb321a",
  measurementId: "G-JHJD2ZS5PP"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
