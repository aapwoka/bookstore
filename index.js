var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};



firebase.initializeApp(config);
var signInBtn = document.getElementById("signIn")

function signInPage(){
    window.location="signIn.html"
}

function about(){
  window.location="#about"
}
