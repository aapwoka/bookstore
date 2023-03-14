
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

function checkUserFullName(){
  var userSurname = document.getElementById("userFullName").value;
  var flag = false;
  if(userSurname === ""){
      flag = true;
  }
  if(flag){
      document.getElementById("userFullNameError").style.display = "block";
  }else{
      document.getElementById("userFullNameError").style.display = "none";
  }
}
// xxxxxxxxxx User Surname Validation xxxxxxxxxx
function checkUserSurname(){
  var userSurname = document.getElementById("userSurname").value;
  var flag = false;
  if(userSurname === ""){
      flag = true;
  }
  if(flag){
      document.getElementById("userSurnameError").style.display = "block";
  }else{
      document.getElementById("userSurnameError").style.display = "none";
  }
}
// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkUserEmail(){
  var userEmail = document.getElementById("userEmail");
  var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var flag;
  if(userEmail.value.match(userEmailFormate)){
      flag = false;
  }else{
      flag = true;
  }
  if(flag){
      document.getElementById("userEmailError").style.display = "block";
  }else{
      document.getElementById("userEmailError").style.display = "none";
  }
}
// xxxxxxxxxx Password Validation xxxxxxxxxx
function checkUserPassword(){
  var userPassword = document.getElementById("userPassword");
  var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
  var flag;
  if(userPassword.value.match(userPasswordFormate)){
      flag = false;
  }else{
      flag = true;
  }    
  if(flag){
      document.getElementById("userPasswordError").style.display = "block";
  }else{
      document.getElementById("userPasswordError").style.display = "none";
  }
}

function signUp(){
  var userFullName = document.getElementById("userFullName").value;
  var userSurname = document.getElementById("userSurname").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
  var userFullNameFormate = /^([A-Za-z.\s_-])/;    
  var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

  var checkUserFullNameValid = userFullName.match(userFullNameFormate);
  var checkUserEmailValid = userEmail.match(userEmailFormate);
  var checkUserPasswordValid = userPassword.match(userPasswordFormate);

  if(checkUserFullNameValid == null){
      return checkUserFullName();
  }else if(userSurname === ""){
      return checkUserSurname();
  }else if(checkUserEmailValid == null){
      return checkUserEmail();
  }else if(checkUserPasswordValid == null){
      return checkUserPassword();
  }else{
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
          var user = firebase.auth().currentUser;
          var uid;
          if (user != null) {
              uid = user.uid;
          }
          var firebaseRef = firebase.database().ref();
          var userData = {
              userFullName: userFullName,
              userSurname: userSurname,
              userEmail: userEmail,
              userPassword: userPassword,
              userFb: "https://www.facebook.com/",
              userTw: "https://twitter.com/",
              userGp: "https://plus.google.com/",
              userBio: "User biography",
          }
          firebaseRef.child(uid).set(userData);
          window.alert("Succesfully Signed Up").then((value) => {
            
              
          });
      }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
      });
  }
}
function SignIn(){
  var email = document.getElementById("signEmail");
  var password = document.getElementById("signPassword");

  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    window.alert("succesfully signed in...")
    firebase.auth().onAuthStateChanged((SignedUser)=>{
      if(SignedUser){
        window.location("book_store.html")
      }
    })
  })

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
function signUpPage(){
  window.location="signUp.html"
}
function openTab(th){window.open(th.name,'_self');}
