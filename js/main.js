$(document).ready(function () {
  $(".slider").slick({
    // bu togmalr uchun
    dots: true,

    // default holatda nechta slider turishi
    slidesToShow: 1,

    // bir next button ni bosganda nechta slider yurishi
    slidesToScroll: 1,

    // tezligi
    speed: 500,

    // slider lar qay tarizda harakat qilishi
    easing: "ease",

    // slider cheksiz ligi
    infinite: true,

    // slider qaysi slidan boshlashi kerak ligini belgilash
    initialSlide: 0,

    // sliderlar default ozgarib turish
    autoplay: true,

    //sliderlar default ozgarib turish vaqini belgilash
    autoplaySpeed: 2000,

    //silder hududiga bosganda tohtashi
    // pouseOnFocus: true
    //pouseOnHover: true
    // pouseOnDotsHover: true

    // mishka bilan click qilib sliderni surish ammo responsiv holatda yani tel va planshet larda ishlay
    // draggable: false,

    // responsive holatda scrol halt bilan otkazishni olib tashlash
    // swipe: false
  });
});

let count=1
if (window.screen.width==830) {
    count=2
}

$(document).ready(function () {
    $(".from-google__slider").slick({
      // bu togmalr uchun
      dots: true,
  
      // default holatda nechta slider turishi
      
    // default holatda nechta slider turishi
    slidesToShow: count,

    // bir next button ni bosganda nechta slider yurishi
    slidesToScroll: count,

    // tezligi
    speed: 500,

    // slider lar qay tarizda harakat qilishi
    easing: "ease",

    // slider cheksiz ligi
    infinite: true,

    // slider qaysi slidan boshlashi kerak ligini belgilash
    initialSlide: 0,

    // sliderlar default ozgarib turish
    autoplay: false,
  
      //sliderlar default ozgarib turish vaqini belgilash
      // autoplaySpeed: 500,
  
      //silder hududiga bosganda tohtashi
      // pouseOnFocus: true
      //pouseOnHover: true
      // pouseOnDotsHover: true
  
      // mishka bilan click qilib sliderni surish ammo responsiv holatda yani tel va planshet larda ishlay
      // draggable: false,
  
      // responsive holatda scrol halt bilan otkazishni olib tashlash
      // swipe: false
    });
  });
  


const elChooseItem = document.querySelectorAll(".choose-list__item")
const elChooseLink = document.querySelectorAll(".choose-list__link")
const elChooseWrapper = document.querySelectorAll(".choose-wrap__wrapper")

elChooseLink.forEach(function (links) {
  links.addEventListener("click", function (evt) {
    evt.preventDefault()

    elChooseLink.forEach(function (item) {
      item.classList.remove("choose-list__link--active")
      // item.classList.remove("choose-list__link--active")
    })

    links.classList.add("choose-list__link--active")

    elChooseWrapper.forEach(function (bookmark) {
      bookmark.classList.remove("choose-wrap__wrapper--active")
    })
    document
      .querySelector(links.getAttribute("href"))
      .classList.add("choose-wrap__wrapper--active")
  })
})

// NAVBAR 
const navBarOpenBtn = document.querySelector(".js-navbar-open-btn");
const navBarCloseBtn = document.querySelector(".js-navbar-close-btn");

// THEME 
const themeBtn = document.querySelector(".js-theme-btn");
const theme = localStorage.getItem("theme");

// LOGIN MODAL
const elModalOpenBtn = document.querySelector(".js-login-btn");
const elModalCloseBtn = document.querySelector(".js-login-modal-close");
const elModalPasswordIput =document.querySelector(".js-password-input");
const elModalPasswordShowBtn = document.querySelector(".js-show-password-btn")


// BRAND IMAGES
const elBrandLsit = document.querySelector(".js-brand-list");
const elBrandTemp = document.querySelector(".js-brand-template").content;

const brandImgArr = [
  {
    url:"./images/ford.png",
    retina: "./images/ford.png 1x, ./images/ford@2x.png 2x",
    alt: "Ford" 
  },
  {
    url:"./images/nissan.png",
    retina: "./images/nissan.png 1x, ./images/nissan@2x.png 2x",
    alt: "Nissan" 
  },
  {
    url:"./images/toyota.png",
    retina: "./images/toyota.png 1x, ./images/toyota@2x.png 2",
    alt: "Toyota" 
  },
  {
    url:"./images/dodge.png",
    retina: "./images/dodge.png 1x, ./images/dodge@2x.png 2x",
    alt: "Dodge" 
  },
  {
    url:"./images/hyundai.png",
    retina: "./images/hyundai.png 1x, ./images/hyundai@2x.png 2x",
    alt: "Hyundai" 
  },
  {
    url:"./images/jeep.png",
    retina: "./images/jeep.png 1x, ./images/jeep@2x.png 2x",
    alt: "Jeep" 
  },
]
const brandImgArrLight = [
  {
    url:"./images/ford-white.png",
    retina: "./images/ford-white.png 1x, ./images/ford-white@2x.png 2x",
    alt: "Ford" 
  },
  {
    url:"./images/nissan-white.png",
    retina: "./images/nissan-white.png 1x, ./images/nissan-white@2x.png 2x",
    alt: "Nissan" 
  },
  {
    url:"./images/toyota-white.png",
    retina: "./images/toyota-white.png 1x, ./images/toyota-white@2x.png 2",
    alt: "Toyota" 
  },
  {
    url:"./images/dodge-white.png",
    retina: "./images/dodge-white.png 1x, ./images/dodge-white@2x.png 2x",
    alt: "Dodge" 
  },
  {
    url:"./images/hyundai-white.png",
    retina: "./images/hyundai-white.png 1x, ./images/hyundai-white@2x.png 2x",
    alt: "Hyundai" 
  },
  {
    url:"./images/jeep-white.png",
    retina: "./images/jeep-white.png 1x, ./images/jeep-white@2x.png 2x",
    alt: "Jeep" 
  },
]

const renderBrandImg = () => {
  elBrandLsit.innerHTML = "";
  const elBrandFrag = new DocumentFragment()
  if(localStorage.getItem("theme") == "light"){
    brandImgArr.forEach(item => {
      const elBrandTempClone = elBrandTemp.cloneNode(true)
      
      elBrandTempClone.querySelector(".js-brand-img").src = item.url;
      elBrandTempClone.querySelector(".js-brand-img").alt = item.alt;
      elBrandTempClone.querySelector(".js-brand-img").srcset = item.retina;
      elBrandFrag.appendChild(elBrandTempClone)
    })
  }
  else if(localStorage.getItem("theme") == "dark"){
    brandImgArrLight.forEach(item => {
      const elBrandTempClone = elBrandTemp.cloneNode(true)
      
      elBrandTempClone.querySelector(".js-brand-img").src = item.url;
      elBrandTempClone.querySelector(".js-brand-img").alt = item.alt;
      elBrandTempClone.querySelector(".js-brand-img").srcset = item.retina;
      elBrandFrag.appendChild(elBrandTempClone)
    })
  }
  else{
    brandImgArr.forEach(item => {
      const elBrandTempClone = elBrandTemp.cloneNode(true)
      
      elBrandTempClone.querySelector(".js-brand-img").src = item.url;
      elBrandTempClone.querySelector(".js-brand-img").alt = item.alt;
      elBrandTempClone.querySelector(".js-brand-img").srcset = item.retina;
      elBrandFrag.appendChild(elBrandTempClone)
    })
  }
  elBrandLsit.appendChild(elBrandFrag)
}
renderBrandImg()

if(theme == "dark"){
    document.body.classList.add("dark-mode")
}
else if(theme == "light"){
    document.body.classList.remove("dark-mode")
}

navBarOpenBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-bar-show");
})
navBarCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("nav-bar-show");
})

themeBtn.addEventListener("click", () => {
    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light")
    }
    else if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "dark")
    }
    renderBrandImg()
    document.body.classList.toggle("dark-mode");
});

elModalOpenBtn.addEventListener("click", () => {
    document.body.classList.add("show-login");
})
elModalCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("show-login");
})

elModalPasswordShowBtn.addEventListener("click", ()=> {
    if(elModalPasswordIput.type == "password"){
        elModalPasswordIput.type = "text";
        elModalPasswordShowBtn.classList.add("login-modal__showpassword--open")
    }
    else if(elModalPasswordIput.type == "text"){
        elModalPasswordIput.type = "password";
        elModalPasswordShowBtn.classList.remove("login-modal__showpassword--open")
    }
})



// BTN HTML ELEEMENT TO TOP SCROLL

const elBtn = document.querySelector("#myBtn")

elBtn.addEventListener("click", topFunction)

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block"
  } else {
    document.getElementById("myBtn").style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}