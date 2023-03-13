
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

function signUp(){
  var email = document.getElementById("signUpEmail");
  var password = document.getElementById("signUpPassword");
  var password_repeat = document.getElementById("passwordRepeat");

  if(password.value!= password_repeat.value){
    window.alert("Your passwords do not match")
  }else{
    firebase.auth().createUserWithEmailAndPassword(email, password).then((success) => {
      var user = firebase.auth().currentUser;
      var uid;
      if (user != null) {
          uid = user.uid;
      }
      //var firebaseRef = firebase.database().ref();
      //firebaseRef.child(uid).set(userData);
      window.alert("Succesfully Signed Up.Continue to sign in").then((value) => {
        
          window.location("signIn.html")
      });
  }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal({
          type: 'error',
          title: 'Error',
          text: "Error",
      })
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
