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
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');
var signInBtn = document.getElementById("signIn")

function signInPage(){
    window.location="signIn.html"
}
function home(){
window.location="book_store.html"
}
function feedback(){
window.location="#feedbacks"
}
function collection(){
window.location="collection.html"
}
function about(){
  window.location="#about"
}
function openTab(th){
  window.open(th.name,'_self');
}
function signIn(){
}
