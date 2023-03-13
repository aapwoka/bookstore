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
