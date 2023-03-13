var signInBtn = document.getElementById("signIn")
//var searchOnline = "Kiyosaki";//document.getElementById("searchOnline").value;

function signInPage(){
    window.location="signIn.html"
}

function Search(){
  var searchOnline = document.getElementById("searchOnline")
  if (searchOnline.value===""){
    window.alert("Please input a valid book")
  }else{
    window.open("https://" + "google.com/search?q=" + searchOnline.value +" "+ "pdf download", '_self')
  }
}
function home(){
window.location="book_store.html"
}
function feedback(){
window.location="#feedbacks"
}

function about(){
  window.location="#about"
}
function ReadBook(th){
window.open(th.name,'_self');
}
function openTab(th){window.open(th.name,'_self');}var config = {
    apiKey: "AIzaSyD94SWwZAiJ-wO3EdFyKUd2PxOFRnRS9Jg",
    authDomain: "patient-47a96.firebaseapp.com",
    databaseURL: "https://patient-47a96-default-rtdb.firebaseio.com",
    projectId: "patient-47a96",
    storageBucket: "patient-47a96.appspot.com",
    messagingSenderId: "1080833709367",
    appId: "1:1080833709367:web:7d0c5ce904f6bc0664f6b2",
    measurementId: "G-9LSZ9DGFRZ"
  };
  
  
  
  firebase.initializeApp(config);

var signInBtn = document.getElementById("signIn")
//var searchOnline = "Kiyosaki";//document.getElementById("searchOnline").value;

function signInPage(){
    window.location="signIn.html"
}

function Search(){
  var searchOnline = document.getElementById("searchOnline")
  if (searchOnline.value===""){
    window.alert("Please input a valid book")
  }else{
    window.open("https://" + "google.com/search?q=" + searchOnline.value +" "+ "pdf download", '_self')
  }
}
function home(){
window.location="book_store.html"
}
function feedback(){
window.location="#feedbacks"
}

function about(){
  window.location="#about"
}
function ReadBook(th){
window.open(th.name,'_self');
}
function openTab(th){window.open(th.name,'_self');}
