const openBtn=document.querySelector('.openBtn')
const closeBtn=document.querySelector('.closeBtn')
const modalContainer=document.querySelector('.modalContainer')

openBtn.addEventListener('click',function(){
    modalContainer.classList.add('openModal')
})
closeBtn.addEventListener('click',function(){
    modalContainer.classList.remove('openModal')
})