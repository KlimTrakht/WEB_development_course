import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyApgtIgSVYC6Izb26JNyLzCSITq1uWV9ks",
  authDomain: "kps-hw.firebaseapp.com",
  databaseURL: "https://kps-hw-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "kps-hw",
  storageBucket: "",
  messaginSenderId: "122965348680",
  appId: "1:122965348680:web:b6e79fba36b19c49cbe37d",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);
export const reference = ref(database);
export const eventRef = child(reference, "events");
