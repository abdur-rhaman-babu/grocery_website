// search-Form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginUser.classList.remove('active')
}

// shopping-cart
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =()=>{
    shoppingCart.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    loginUser.classList.remove('active')
}

// user
let loginUser = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick =()=>{
    loginUser.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
}

// navbar
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginUser.classList.remove('active')
}

// window 
window.onscroll =()=>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginUser.classList.remove('active')
}


