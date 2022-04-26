


  var storedNames = JSON.parse(window.localStorage.getItem("prod"));
 
  if(storedNames!=null)
  {
      var ShopNumber=storedNames.length;
  
  }
  else
  {
      var ShopNumber=0;
  
  }


  document.getElementById('shop').innerHTML=ShopNumber;

class Person {
    constructor(name="",img="",price=18,reviews=0){
        this.name=name;
        this.img=img;
        this.price=price;
        this.reviews=reviews;
    }
  }

 var user =window.localStorage.getItem("users");
 
 
var images = ['images/oussama.jpg','images/firase.jpg','images/cat-1.jpg','images/cat-2.jpg'];
var arrayImagesElement = document.getElementById("arrayImages");
//jwek behy 
oussama=new Person("oussama ghariani","images/oussama.jpg",24,256);
oussama1=new Person("oussama ghariani","images/firase.jpg",24,256);
/*  insert personnes   */
persons=[];
persons.push(oussama);
persons.push(oussama1);



function createImageNode(imgSrc) {
    var img = document.createElement('img');
    img.src = imgSrc;
    img.width = "100";
      
    return img;
}

storedNames.forEach(person => {

    arrayImagesElement.innerHTML+=
    ' <div class="swiper-slide"> '+
    ' <div class="slide"  > '+
     '<div id="img" class="image"> '+
      ' <img src="'+person.img+'" alt=""></img>'+
           ' </div>'+
            '<div class="icons">'+
                 
                 
            '</div>'+

        '<div class="content">'+
       
            '<h3>'+person.name+' </h3>'+
            '<div class="price">$15.99 <span>$'+person.price+' </span></div>'+
             +
       ' </div>'
  '  </div>'
'</div>';
    

});
 


var texttoken=JSON.parse(user);

/*if(texttoken==null)
{
    document.getElementById("menu-bar").style.display="none";
    document.getElementById("panier").style.display="none";
    document.getElementById("coeur").style.display="none";

}*/
if(texttoken!=null)
{
    var value2 = texttoken.user.email;
    var value1 =texttoken.user.name;
    document.getElementById("value1").innerHTML =value2;
    document.getElementById("value2").innerHTML =value1;
}
 
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

 


 
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});

 
var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
   
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
 
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

const produit=[
{name:'dulll',taille:'L'},
{name:'dant',taille:'L'},
{name:'dcc',taille:'m'},
{name:'pxx',taille:'S'},
{name:'nn',taille:'XS'},
{name:'fff',taille:'L'},
];
const search=document.getElementById('searchinput');
search.addEventListener('keyup',function()
{
    const input=search.value;
    

    const resultat=produit.filter(item=>item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    let suggestion='';

     if(input!=null)
    {
        resultat.forEach(resultatItem=>
            suggestion   +=
            `<div class="Size">${resultatItem.name}</div>`)
    }
    console.log(suggestion.length);
     document.getElementById('suggestions').innerHTML=suggestion;
});
var c=0;
function test()
{
   if(c==0)
   {
       document.getElementById("box").style.display="block";
       c=1;
   }
   else{
    document.getElementById("box").style.display="none";
    c=0;
   }
    
}