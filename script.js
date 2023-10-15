let cartPopup = document.getElementById("cart__popup");
let cart = document.getElementById("cart--main");
let priceForOne = document.getElementById("p-f-1");
let productCount = document.getElementById("p-count");
let totalPrice = document.getElementById("p-total");
let cartDelete = document.getElementById("delete");
let checkout = document.getElementById("checkout");
let activeProductDisplay = document.getElementById("active__item");
let lightbox = document.getElementById("lightbox");
let closeX = document.getElementById("close");
let previous = document.getElementById("prev");
let next = document.getElementById("nxt");
let items = document.getElementsByClassName("items");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let addToCart = document.getElementById("add-cart");
let body = document.getElementById("body");
let popupHide = document.getElementById("hide");
let ifEmpty = document.getElementById("if-empty");
let menuClose = document.getElementById("menu_close");
let navMobile = document.getElementById("nav-mobile");
let menu = document.getElementById("menu");

addToCart.addEventListener("click", () => {
  if (domCount > 0) {
    if (cartPopup.classList.contains("hidden")) {
      cartPopup.classList.remove("hidden");
    } else if (priceForOne.innerHTML !== 0) {
      ifEmpty.style.display = "none";
      popupHide.style.display = "block";
    } else {
      cartPopup.classList.add("hidden");
    }

    productCount.innerHTML = domCount;
    totalPrice.innerHTML = ` $${domCount * 125}.00`;
    priceForOne.innerHTML = "$125.00";
  }

  // if (ifEmpty.classList.contains("hidden")) {
  //   popupHide.classList.add("hidden");
  //   ifEmpty.classList.remove("hidden");
  // } else {
  //   popupHide.classList.remove("hidden");
  //   ifEmpty.classList.add("hidden");
  // }
});

cart.addEventListener("click", () => {
  if (cartPopup.classList.contains("hidden")) {
    cartPopup.classList.remove("hidden");
  } else {
    cartPopup.classList.add("hidden");
  }

  if (
    priceForOne.innerHTML == 0
    // totalPrice.textContent == 0 &&
    // productCount.textContent == 0
  ) {
    popupHide.style.display = "none";
    ifEmpty.style.display = "block";
  } else if (priceForOne.innerHTML !== 0) {
    ifEmpty.style.display = "none";
    popupHide.style.display = "block";
  }

  // if (ifEmpty.classList.contains("hidden")) {
  //   popupHide.classList.add("hidden");
  //   ifEmpty.classList.remove("hidden");
  // } else {
  //   popupHide.classList.remove("hidden");
  //   ifEmpty.classList.add("hidden");
  // }
});

// light box

activeProductDisplay.addEventListener("click", () => {
  lightbox.style.display = "block";
  body.style.boxShadow = "inset 150px 150px 350px rgba(29, 26, 26, 0.253)";
});

closeX.addEventListener("click", () => {
  lightbox.style.display = "none";
  body.style.boxShadow = "none";
});

// end of lightbox

// counter

let count = document.getElementById("count");

let domCount = 0;

plus.addEventListener("click", () => {
  domCount++;
  count.innerHTML = domCount;
});

minus.addEventListener("click", () => {
  if (domCount <= 0) {
    domCount = 0;
  } else {
    domCount--;
  }
  count.innerHTML = domCount;
});

// lightbox

let src = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

var num = 0;
next.addEventListener("click", () => {
  num++;
  if (num >= src.length) {
    num = 0;
  }

  lightbox.style.background = `url(${src[num]})`;
  lightbox.style.backgroundSize = "contain";
  lightbox.style.transition = "all 0.4s";
});

previous.addEventListener("click", () => {
  num--;
  if (num < 0) {
    num = src.length - 1;
  }

  lightbox.style.background = `url(${src[num]})`;
  lightbox.style.backgroundSize = "contain";
  lightbox.style.transition = "all 0.4s";
});

items[0].addEventListener("click", () => {
  activeProductDisplay.style.background = `url(${src[0]})`;
  activeProductDisplay.style.backgroundSize = "100% 100%";
  activeProductDisplay.style.backgroundRepeat = "no-repeat";
  items[0].style.border = "3px solid hsl(26, 100%, 55%)";
  items[1].style.border = "none";
  items[2].style.border = "none";
  items[3].style.border = "none";
});
items[1].addEventListener("click", () => {
  activeProductDisplay.style.background = `url(${src[1]})`;
  activeProductDisplay.style.backgroundSize = "100% 100%";
  activeProductDisplay.style.backgroundRepeat = "no-repeat";
  items[1].style.border = "3px solid hsl(26, 100%, 55%)";
  items[0].style.border = "none";
  items[2].style.border = "none";
  items[3].style.border = "none";
});

items[2].addEventListener("click", () => {
  activeProductDisplay.style.background = `url(${src[2]})`;
  activeProductDisplay.style.backgroundSize = "100% 100%";
  items[2].style.border = "3px solid hsl(26, 100%, 55%)";
  activeProductDisplay.style.backgroundRepeat = "no-repeat";
  items[0].style.border = "none";
  items[1].style.border = "none";
  items[3].style.border = "none";
});

items[3].addEventListener("click", () => {
  activeProductDisplay.style.background = `url(${src[3]})`;
  activeProductDisplay.style.backgroundSize = "100% 100%";
  activeProductDisplay.style.backgroundRepeat = "no-repeat";
  items[3].style.border = "3px solid hsl(26, 100%, 55%)";
  items[2].style.border = "none";
  items[1].style.border = "none";
  items[0].style.border = "none";
});

menuClose.addEventListener("click", () => {
  navMobile.style.transform = "scale(0)";
  navMobile.style.transition = "all 0.4s";
});

menu.addEventListener("click", () => {
  navMobile.style.transform = "scale(1)";
});
