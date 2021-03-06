import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config ={

    apiKey: "AIzaSyB6E1NHW43c-3OEIMZkNLXdeet7SVkYfe0",
    authDomain: "react-ecomm-808d9.firebaseapp.com",
    projectId: "react-ecomm-808d9",
    storageBucket: "react-ecomm-808d9.appspot.com",
    messagingSenderId: "119807122291",
    appId: "1:119807122291:web:2c7858dc3f3abb3604c306",
    measurementId: "G-YZ2N42Q24B"
};

export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exits){
        const {displayName, email} =userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;