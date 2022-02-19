import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZifzTOO_d5m49xqN-qVhq05MN_XKcwy0',
  authDomain: 'house-marketplace-app-eshan.firebaseapp.com',
  projectId: 'house-marketplace-app-eshan',
  storageBucket: 'house-marketplace-app-eshan.appspot.com',
  messagingSenderId: '816593571321',
  appId: '1:816593571321:web:592f9ccb2adcdcb6854128',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
