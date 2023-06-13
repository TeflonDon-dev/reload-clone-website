const inputBtn = document.getElementById('inputText');
const subscribeBtn = document.getElementById('subscribeBtn');
const date = document.getElementById("date");

const year = new Date().getFullYear();
date.innerText=year

subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBtn.value) {
        alert('subscribed successfully 👍');
      return  inputBtn.value = '';


    } else {
        alert("please input an email");
     
    }
})

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex')
    }
    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);

}
document.addEventListener('DOMContentLoaded',initApp)