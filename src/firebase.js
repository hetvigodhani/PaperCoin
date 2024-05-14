import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLYoxVCrSRW80XAwQOaRNlCeOAUXirpkg",
  authDomain: "papercoin-28515.firebaseapp.com",
  databaseURL: "https://papercoin-28515-default-rtdb.firebaseio.com",
  projectId: "papercoin-28515",
  storageBucket: "papercoin-28515.appspot.com",
  messagingSenderId: "453756689615",
  appId: "1:453756689615:web:6c755e585c900f937debba",
  measurementId: "G-LN4XSSC67N"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth};