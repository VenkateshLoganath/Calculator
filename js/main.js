
const screen = document.querySelector("form input");
const btns = document.querySelectorAll(".btn");

const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const cval = document.querySelector(".btn-cval");
const cdval = document.querySelector(".btn-dval");

btns.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
      let value = e.target.dataset.num; 
      screen.value += value;

    });
})

equal.addEventListener("click", (e)=>{
    if(screen.value === ""){
        screen.value = "";
    }else{
        let answer = eval(screen.value );
        screen.value = answer;
    }
})

clear.addEventListener("click", (e)=>{
    screen.value = "";
})
cval.addEventListener("click" ,(e)=>{
    let dval  =  screen.value.toString().slice(0,-1);
    screen.value = dval;
})

cdval.addEventListener("click" ,(e)=>{
    
    screen.value = "0";
})