
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzH-sha47XkpxfQSkj2LjezrA3RLVYfew",
  authDomain: "simple-claims-portal-7dfb3.firebaseapp.com",
  projectId: "simple-claims-portal-7dfb3",
  storageBucket: "simple-claims-portal-7dfb3.appspot.com",
  messagingSenderId: "1057792525656",
  appId: "1:1057792525656:web:7b44428febc5f96123512d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore();



const carSelect = document.getElementById("carSelect");

async function fetchCarModels() {
  try {
    const carsSnapshot = await getDocs(collection(db, "Cars"));
    carsSnapshot.forEach((carDoc) => {
      const carModel = carDoc.data().Model;
      const option = document.createElement("option");
      option.text = carModel;
      option.value = carModel;
      carSelect.add(option);
    });
  } catch (error) {
    console.error("Error fetching car models:", error);
  }
}

fetchCarModels();








const auth=getAuth(firebase)
const GoogleAuthProvider=new GoogleAuthProvider()
const loginBtn=document.querySelector('.login')