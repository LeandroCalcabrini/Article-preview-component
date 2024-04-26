const btn = document.querySelectorAll(".btn"); 
const profile = document.querySelector(".profile");
const containerProfile = document.querySelector(".container-profile");
const ancho = window.matchMedia('(max-width:450px)');
console.log(ancho.matches);








function click(){
    if(ancho.matches === true){
        btn.forEach((e)=>{
            e.addEventListener("click",()=>{
                profile.style.display = "none";
                containerProfile.classList.add("mobile")
            })
    
        })
       
    }else{
        btn.forEach((e)=>{
            e.addEventListener("click",()=>{
                const share = document.querySelectorAll(".share")
                share.forEach((i)=>{
                    i.classList.toggle("active")
                })   
            })
        })
    }
}


click();

