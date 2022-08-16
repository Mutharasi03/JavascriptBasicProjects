let count=0;
const value=document.querySelector(".content")
const buttons=document.querySelectorAll('.btn')
buttons.forEach(function(btn){
btn.addEventListener('click',(e)=>{

    const currentButton=e.currentTarget.classList;
    if(currentButton.contains("increase"))
    {
     count++  
    }
    else if(currentButton.contains("decrease")) {
    count--;
    }
    else{
        count=0;
    }
    value.textContent=count;
}
)})