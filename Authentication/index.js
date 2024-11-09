const express = require ('express');
const app = express();
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
app.use(express.json());
const app1 = initializeApp(firebaseConfig);

const auth = getAuth();
signInWithEmailAndPassword(auth,email,password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

app.listen(3000);