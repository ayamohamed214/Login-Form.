
//   ------------------------signup--------------
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword') 
var massegeInputReq = document.getElementById('massegeInputReq')
var alreadyExist= document.getElementById('alreadyExist')
var Success = document.getElementById('Success')
var singUpBtn =document.getElementById("singUpBtn")

var users = []




if (localStorage.getItem("userList") != null) {
  users = JSON.parse(localStorage.getItem("userList"));

}


function existLocalData(){
  for(var i =0; i< users.length ;i++){
    if(users[i].email == signupEmail.value){
      alreadyExist.classList.remove('d-none');
      Success.classList.add('d-none');
      massegeInputReq.classList.add('d-none');
  return true;
    }
  
  }
  }
  
  
  singUpBtn.addEventListener('click',function(){
    console.log('jssssss')
    singUp();
  }) 
  
  
  
//                         signup


  function singUp(){
  if (signupName.value=="" || signupEmail.value=="" || signupPassword.value=="" ){
    
    massegeInputReq.classList.remove('d-none');
   }
   
   else{
     if( users.length==0 ){
    var userInfo={
   name:signupName.value,
   email:signupEmail.value,
   password:signupPassword.value
  }
  users.push(userInfo);
  console.log(users);
  localStorage.setItem('userList',JSON.stringify(users));
  clearData();
  Success.classList.remove('d-none');
   massegeInputReq.classList.add('d-none');
   alreadyExist.classList.add('d-none');
  }
  else{
    if(existLocalData()==true){
      alreadyExist.classList.remove('d-none');
      massegeInputReq.classList.add('d-none');
      Success.classList.add('d-none');
  
    }else{
      var userInfo={
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value
       }
       users.push(userInfo);
       console.log(users);
       localStorage.setItem('user',JSON.stringify(users));
       clearData();
       Success.classList.remove('d-none');
       massegeInputReq.classList.add('d-none');
       alreadyExist.classList.add('d-none');
    }
  }
   }
  }
  
   //*  clear
  function clearData(){
    signupName.value="";
    signupEmail.value="";
    signupPassword.value="";
  }
  




//    //                                    regex

// var nameRegex = /^\w{3,}(\s+\w+)*$/;
// var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// var passWordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
// var nameMassege =document.getElementById('nameFunction')
// var emailMassege =document.getElementById('emailFunction')
// var passMassege =document.getElementById('passFunction')

// signupName.addEventListener("input", function () {
//   validateName(signupName, nameRegex);
//   });
//   signupEmail.addEventListener("input", function () {
//     validateEmail(signupEmail, emailRegex);
//   });
//   signupPassword.addEventListener("input", function () {
//     validatePassWord(signupPassword, passWordRegex);
//   });
//   function validateName() {
// var text = signupName.value 

//     var testRegex = regex;
//     if (testRegex.test(element.value)) {
//       element.classList.add("is-valid");
//       element.classList.remove("is-invalid");
//       nameMassege.classList.add("d-none");
// return true
  
//     } else { //not valid
//       element.classList.add("is-invalid");
//       element.classList.remove("is-valid");
//       nameMassege.classList.remove("d-none");
//       return false;
//     }


//   }
//   function validateEmail(e) {
//     var text = signupEmail.value 

//     var testRegex = regex;
//     if (testRegex.test(element.value)) {
//       element.classList.add("is-valid");
//       element.classList.remove("is-invalid");
//       emailMassege.classList.add("d-none");
//       return true
  
//     } else { //not valid
//       element.classList.add("is-invalid");
//       element.classList.remove("is-valid");
//       emailMassege.classList.remove("d-none");
//       return false;
//     }


//   }
//   function validatePassWord() {
//     var text = signupPassword.value 

//     var testRegex = regex;
//     if (testRegex.test(element.value)) {
//       element.classList.add("is-valid");
//       element.classList.remove("is-invalid");
//       passMassege.classList.add("d-none");
//       return true
  
//     } else { //not valid
//       element.classList.add("is-invalid");
//       element.classList.remove("is-valid");
//       passMassege.classList.remove("d-none");
//       return false;
//     }


//   }


