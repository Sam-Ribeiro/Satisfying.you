import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR5SI5AXLzk-Lo52icQC57awZoyec3Pjc",
  authDomain: "satisfying-you-cca0c.firebaseapp.com",
  projectId: "satisfying-you-cca0c",
  storageBucket: "satisfying-you-cca0c.firebasestorage.app",
  messagingSenderId: "904299106494",
  appId: "1:904299106494:web:06821c8381adfc151eceef",
  measurementId: "G-VHGTG9MMC2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth_mod = getAuth(app)

export { auth_mod, app };
