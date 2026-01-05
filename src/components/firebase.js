import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "Add you api key",
  authDomain: "community-b73eb.firebaseapp.com",
  projectId: "community-b73eb",
  storageBucket: "community-b73eb.firebasestorage.app",
  messagingSenderId: "987563481937",
  appId: "1:987563481937:web:44eca69b90914349d25170",
  measurementId: "G-Q23846L19D"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  // Auth initialization
const googleProvider = new GoogleAuthProvider();  // Google auth provider
const db = getFirestore(app);  // Firestore initialization
const storage = getStorage(app);
// Export the Firebase services for use in other components
export { auth, googleProvider, db , storage };

