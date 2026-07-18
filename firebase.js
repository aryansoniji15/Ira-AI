import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5sGu0QuOHfMibUTNk8YxHtLleQ8Yp5ag",
  authDomain: "ira-aiji15.firebaseapp.com",
  projectId: "ira-aiji15",
  storageBucket: "ira-aiji15.firebasestorage.app",
  messagingSenderId: "1066066437408",
  appId: "1:1066066437408:web:322afeae0d494c95e96345"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };