//Hamburger Menu In Small Screen Size
const bars=document.querySelector('.toggle-icon')
const list =document.querySelector('header ul')
bars.addEventListener('click' ,()=>{
    list.classList.toggle('active')
})