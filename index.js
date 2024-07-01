// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full Name Validation xxxxxxxxxx

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
    // check email
    if(firebaseUser){
      var uid = firebaseUser.uid
      console.log(uid)
        const storageRef = firebase.storage().ref(uid)
        const booksRef = storageRef.child("myBooks"+fileName)
        booksRef.put(fileItem)
      }
      })
}
//function uploadFiles() {
//  const url = 'https://httpbin.org/post';
  //const method = 'post';

  //const xhr = new XMLHttpRequest();

  //const data = new FormData(form);
  //var data = "tryAndError"
  //xhr.open(method, url);
  //xhr.send(data);
    
    //var user = firebase.auth().currentUser;
   // var firebaseRef = firebase.database().ref();
   // var userRef = firebaseRef.child("myBookLIst")
   // userRef.set(data)
//}


const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
}


function handleSubmit(event) {
  event.preventDefault();

  uploadFiles();
  renderFilesMetadata();
}

function uploadFiles() {
  var url = 'https://httpbin.org/post';
  var formData = new FormData(form);

   var fetchOptions = {
    method: 'post',
    body: formData
  };
  console.log(fetchOptions)

   fetch(url, fetchOptions);
   var firebaseRef = firebase.database().ref();
   var userRef = firebaseRef.child("myBookLIst")
   userRef.push(fetchOptions)
}

const fileNum = document.getElementById("fileNum");

function renderFilesMetadata(fileList) {
  fileNum.textContent = fileList.length;
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
// xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
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
  window.location="book_store.html"
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
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userSIPassword.value.match(userSIPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
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
                  window.location = 'book_store.html'; //After successful login, user will be redirected
                }
        })

        })
        
}
}
    
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var userPfFullName = document.getElementById("userPfFullName").innerHTML;
    var userPfSurname = document.getElementById("userPfSurname").innerHTML;
    var userPfFb = document.getElementById("userPfFb").getAttribute("href");
    var userPfTw = document.getElementById("userPfTw").getAttribute("href");
    var userPfGp = document.getElementById("userPfGp").getAttribute("href");
    var userPfBio = document.getElementById("userPfBio").innerHTML;
    document.getElementById("userFullName").value = userPfFullName; 
    document.getElementById("userSurname").value = userPfSurname; 
    document.getElementById("userFacebook").value = userPfFb; 
    document.getElementById("userTwitter").value = userPfTw; 
    document.getElementById("userGooglePlus").value = userPfGp; 
    document.getElementById("userBio").value = userPfBio; 
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let userFullName = document.getElementById("userFullName").value 
    let userSurname = document.getElementById("userSurname").value 
    let userFacebook = document.getElementById("userFacebook").value 
    let userTwitter = document.getElementById("userTwitter").value 
    let userGooglePlus = document.getElementById("userGooglePlus").value 
    let userBio = document.getElementById("userBio").value
    var userFullNameFormate = /^([A-Za-z.\s_-])/; 
    var checkUserFullNameValid = userFullName.match(userFullNameFormate);
    if(checkUserFullNameValid == null){
        return checkUserFullName();
    }else if(userSurname === ""){
        return checkUserSurname();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref();
        var userData = {
            userFullName: userFullName,
            userSurname: userSurname,
            userFb: userFacebook,
            userTw: userTwitter,
            userGp: userGooglePlus,
            userBio: userBio,
        }
        firebaseRef.child(uid).set(userData);
     window.alert("Profile Saved Succesfully")
  

     
     .then((value) => {
            setTimeout(function(){
                document.getElementById("profileSection").style.display = "block";

                document.getElementById("editProfileForm").style.display = "none";
            }, 1000)
        });
    }
}
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
   
            
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'book_store.html'; //After successful login, user will be redirected to profile.html
          window.alert("Succesfully Signed Out")
        }
    
      });

}

var BOOKLIB = []



//Book selection for upload
  function loadLocalBook(){
    var input = document.getElementById("inputed")
    input.addEventListener("change",getFile)
    input.click()
    console.log("working")
  }

   function getFile(evt){
    var bookTitle = document.getElementById("bookTitle").value
    var bookAuthor = document.getElementById("bookAuthor").value
    let reader = new FileReader()
    reader.onload = () =>{
        let url = reader.result
        console.log(url)
        console.log(bookTitle)
        console.log(bookAuthor)
        //do whatever with the url(insert to local storage)
       if(bookTitle===""){
            window.alert("Please enter the title of the book")
        }if (bookAuthor==="") {
            window.alert("Please enter the title of the book")
        } else {
            var book = {
               Title: bookTitle,
               Author:bookAuthor,
               book:url
            }
        //firebase insertion of selected book
      var user = firebase.auth().currentUser;
      var uid;
      if(user!=null){
        uid=user.uid;
      }
      var firebaseRef = firebase.database().ref()

      firebaseRef.child('users/' + uid).push(book)
        } 

    }
    reader.readAsDataURL(evt.target.files[0])
   }

   
   

function deleteBook(id){
var mybook = document.getElementById("mybook1")
mybook.innerHTML = ` `;
}
