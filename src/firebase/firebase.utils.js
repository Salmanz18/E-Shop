import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD3uVVPpZfrcOPal4cfe0D56pK2fEvBIZE',
  authDomain: 'e-shop-7a269.firebaseapp.com',
  databaseURL: 'https://e-shop-7a269.firebaseio.com',
  projectId: 'e-shop-7a269',
  storageBucket: 'e-shop-7a269.appspot.com',
  messagingSenderId: '872994345964',
  appId: '1:872994345964:web:f49567c4b21aa0166de6c9',
  measurementId: 'G-HBFYD55384',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
