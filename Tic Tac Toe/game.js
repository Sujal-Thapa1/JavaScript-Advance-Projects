let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("reset_btn");

let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]  
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const checkwinner=()=>{
    for(pattern of winPatterns){
        console.log(
            boxes[pattern[0]],
            boxes[pattern[1]],
            boxes[pattern[2]]);

    }
}