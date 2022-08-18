const preLoader=document.querySelector('.preLoader')
const button=document.querySelector('.button')
const video=document.querySelector('video')


window.addEventListener('load',function(){
    preLoader.classList.add('hidePreLoader')
})

button.addEventListener('click',function(){
    if(!button.classList.contains('slide'))
    {
        button.classList.add('slide')
        video.pause()
    }
    else{
        button.classList.remove('slide')
        video.play()
    }
})