var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var loginBtn=document.getElementById('Login')
var massegeInputReq= document.getElementById('massegeInputReq')
var incorrect=document.getElementById('incorrect');

if(localStorage.getItem('userList') != null){
  var users=JSON.parse(localStorage.getItem('userList'));
} 

loginBtn.addEventListener('click',function(){
    console.log('ssssssssssss')
  login();

}) 
 function login(){

  if(signinEmail.value=="" || signinPassword.value==""){
    massegeInputReq.classList.remove('d-none');
  }else{
    if(existLocal()==true){

window.location='../home.html';
    }else{
      incorrect.classList.remove('d-none');
      massegeInputReq.classList.add('d-none');

    }
  }
  }



function existLocal(){
  for(var i=0;i<users.length;i++){
    if(signinEmail.value==users[i].email && signinPassword.value==users[i].password){
      localStorage.setItem('username',users[i].name);
      incorrect.classList.add('d-none');
      massegeInputReq.classList.add('d-none');

      return true;
    }else{
      incorrect.classList.remove('d-none');
      massegeInputReq.classList.add('d-none');

    }
  }
}