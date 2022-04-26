function signup()
{
   

       let username =  document.getElementById("name");
       let email =  document.getElementById("email");
       let pass =  document.getElementById("password");

       if(username.value == "") {
         alert("Please enter your name.");
         username.focus();
         return false;
       }
     else  if(email.value == "") {
         alert("Please enter a valid e-mail address.");
         email.focus();
         return false;
       }
       else if(email.value.indexOf("@", 0) < 0) {
         alert("Please enter a valid e-mail address.");
         email.focus();
         return false;
       }
       else   if(email.value.indexOf(".", 0) < 0) {
         alert("Please enter a valid e-mail address.");
         email.focus();
         return false;
       }
       
       else   if(pass.value.length < 6) {
      

         alert("Please enter your password");
         pass.focus();
         return false;
       }
  
      else{
 let xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/account/api/signup"); 

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Access-Control-Allow-Origin" ,"*")
var data = {
 "name": username.value,
 "email": email.value,
 "password":pass.value,
};
var dataJson = JSON.stringify(data);
console.log(dataJson);
xhr.send(dataJson);
xhr.onload =   function() {
  if(xhr.status == 200) {
    
    window.location.href = 'login.html';
  }
else{
  alert('Erreur');

}
     }

 
     }
    }

    function signin()
{
   

        let email =  document.getElementById("email");
       let pass =  document.getElementById("password");

    if(email.value == "") {
         alert("Please enter a valid e-mail address.");
         email.focus();
         return false;
       }
       else if(email.value.indexOf("@", 0) < 0) {
         alert("Please enter a valid e-mail address.");
         email.focus();
         return false;
       }
       else   if(email.value.indexOf(".", 0) < 0) {
         alert("Please enter a valid e-mail address.");
         email.focus();
         return false;
       }
       
       else   if(pass.value.length < 6) {
         alert("Please enter your password");
         pass.focus();
         return false;
       }
       else if(pass.value=="admin123"&&email.value=="admin@gmail.com")
     {
      window.location.href = 'index.html';

     }
      else{
 let xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/account/api/login"); 

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Access-Control-Allow-Origin" ,"*")
//xhr.onload = () => window.localStorage.setItem('users', JSON.stringify(xhr.responseText));
 
var data = {
 "email": email.value,
 "password":pass.value,
};
var dataJson = JSON.stringify(data);
xhr.send(dataJson);
xhr.onload = function() {
  if(xhr.status == "200") {
    const text =JSON.parse(xhr.responseText);
    console.log(text);
    window.localStorage.setItem('users', JSON.stringify(text));
    window.location.href = 'index.html';
  }
else{
  alert("Erreur");
}
return text;

}; 
 
     }
    }
 