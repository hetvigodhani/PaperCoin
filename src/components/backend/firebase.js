const { getDatabase, ref, get, child, update } = require("firebase/database");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyBLYoxVCrSRW80XAwQOaRNlCeOAUXirpkg",
    authDomain: "papercoin-28515.firebaseapp.com",
    projectId: "papercoin-28515",
    storageBucket: "papercoin-28515.appspot.com",
    messagingSenderId: "453756689615",
    appId: "1:453756689615:web:6c755e585c900f937debba",
    measurementId: "G-LN4XSSC67N"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
module.exports = db;