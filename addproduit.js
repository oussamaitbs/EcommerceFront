function save()
{
   

       let username =  document.getElementById("name");
       let desc =  document.getElementById("desc");
       let price =  document.getElementById("price");
       let stock =  document.getElementById("stock");
       let image =  document.getElementById("imag");

       if(username.value == "") {
         alert("Please enter your name.");
         username.focus();
         return false;
       }
     else  if(desc.value == "") {
         alert("Please enter a desx");
         email.focus();
         return false;
       }
     
       else   if(price.value =="") {
      

         alert("Please enter price");
         pass.focus();
         return false;
       }
       else   if(stock.value =="") {
      

        alert("Please enter stock");
        pass.focus();
        return false;
      }
   

      else{
 let xhr = new XMLHttpRequest();
xhr.open("POST", "localhost:8000/product/create"); 

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Access-Control-Allow-Origin" ,"*")
var data = {
  
  
        "libelle":"ggggggg",
        "Rate":123456,
        "Nbreview":123456,
        "Description" :"123456",
         "Price":5,
         "PriceAf":6, 
         "Categorie":"sss",
         "Nbstock":88,
         //"productImage":"ousss.png"
     
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