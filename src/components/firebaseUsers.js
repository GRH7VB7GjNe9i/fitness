import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { onAuthStateChanged} from "firebase/auth";

const addUserToFirestore = async () => {

  const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL
  });
};

auth.onAuthStateChanged(async (user) => {
  if (user) {
    await addUserToFirestore(user);
  }
});
