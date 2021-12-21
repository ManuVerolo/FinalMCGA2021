import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyChFdZnk4vfI-ASEarFB--ZbwvvcEhNKtc",
    authDomain: "catalogo-mcga.firebaseapp.com",
    projectId: "catalogo-mcga",
    storageBucket: "catalogo-mcga.appspot.com",
    messagingSenderId: "617491578499",
    appId: "1:617491578499:web:033892bba0a5309be1e5b6"
})

export const auth = app.auth();
export default app;