const inputs = document.querySelectorAll("input"); // select all inputs 

for (let input of inputs){
    input.addEventListener("input",(e)=>{
        console.log(e.target.value)
    })
}