import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyByx4tL9vWMyTIoTimICuJUBCwY47vFexk",
  authDomain: "school-b708c.firebaseapp.com",
  databaseURL:
    "https://school-b708c-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "school-b708c",
  storageBucket: "",
  messagingSenderId: "497856359565",
  appId: "1:202550984392:web:f9211d5c4bf29240"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);
export const reference = ref(database);
export const eventRef = child(reference, "events");
