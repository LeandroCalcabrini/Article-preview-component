const btn = document.querySelectorAll(".btn");

btn.forEach((e)=>{
    e.addEventListener("click",()=>{
        const share = document.querySelectorAll(".share")
        share.forEach((i)=>{
            i.classList.toggle("active")
        })   
    })
})