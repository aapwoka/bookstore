
function showUploadForm(){
    document.getElementById("uploadForm").style.display="block";
}



var fileSelector = document.getElementById("fileSelector");
var fileItem;
var fileName;
function getBook(e){
fileItem = e.target.files[0]
fileName = fileItem.name
console.log(fileItem)
}

function submitFile(){

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      var uid = firebaseUser.uid
      console.log(uid)
        const storageRef = firebase.storage().ref(uid)
        const booksRef = storageRef.child("myBooks"+fileName)
        booksRef.put(fileItem)
      }
      })
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
function checkUserSUEmail(){
    var userEmail = document.getElementById("userSUEmail");
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

function signUp(){
    var userEmail = document.getElementById("userSUEmail").value;
    var userPassword = document.getElementById("userSUPassword").value;
  
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
    var checkUserEmailValid = userEmail.match(userEmailFormate);
    

if(checkUserEmailValid == null){
        return checkUserSUEmail();
    }else{
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref();

            window.alert("Succesfully Signed Up.Continue to sign In...").then((value) => {
              window.location="signIn.html"
                
                } 
            )
    })
    
}
}

function home(){
  window.location="index.html"
  }
  function feedback(){
  window.location="#feedbacks"
  }
function ProfilePage(){
  window.location="profile.html"
}
 function Search(){
    var searchOnline = document.getElementById("searchOnline")
    if (searchOnline.value===""){
      window.alert("Please input a valid book")
    }else{
      window.open("https://" + "google.com/search?q=" + searchOnline.value +" "+ "pdf download", '_self')
    }
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
  function signInPage(){
    window.location="signIn.html"
  }
  function openTab(th){window.open(th.name,'_self');}

// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}

// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     

    var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);

    if(checkUserEmailValid == null){
        return checkUserSIEmail();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword)
        .then((success) => {
            window.alert("Succesfully Signed In")
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                  window.location = 'index.html'; //After successful login, user will be redirected
                }
        })

        })
        
}
}


function signOut(){
   
            
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'signIn.html'; //After successful login, user will be redirected to profile.html
          window.alert("Succesfully Signed Out")
        }
    
      });

}


   
   

function deleteBook(id){
var mybook = document.getElementById("mybook1")
mybook.innerHTML = ` `;
}
