var config = {
  apiKey: "AIzaSyD94SWwZAiJ-wO3EdFyKUd2PxOFRnRS9Jg",
  authDomain: "patient-47a96.firebaseapp.com",
  databaseURL: "https://patient-47a96-default-rtdb.firebaseio.com",
  projectId: "patient-47a96",
  storageBucket: "",
  messagingSenderId: "1080833709367",
  appId: "1:1080833709367:web:7d0c5ce904f6bc0664f6b2",
  measurementId: "G-9LSZ9DGFRZ"
};



firebase.initializeApp(config);
var signInBtn = document.getElementById("signIn")

function signInPage(){
    window.location="signIn.html"
}

function about(){
  window.location="#about"
}
