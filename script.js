const container = document.querySelector("#container");
function makingRows(n){
    const parentContainer = document.createElement("div");
    parentContainer.setAttribute("class","parentContainer");
    container.appendChild(parentContainer);
    const item = [];
    for (let i=0; i<n; i++){
        item[i]= document.createElement("div");
        item[i].setAttribute("class","item");
        parentContainer.appendChild(item[i]);
    }
    

}
function makingColumns(n){
    for(let i=0; i<n; i++){
        makingRows(n);
    }

}
const reset = document.querySelector("#Reset");
function resetbutton () {
    let numbers = prompt("Enter the number of squares");
    makingRows(numbers);
    makingColumns(numbers);

}
reset.addEventListener("click",resetbutton);
resetbutton();

const item = document.querySelectorAll(".item");
console.log(item);
console.log(item.length);

for (let i=0; i<item.length; i++){
    item[i].addEventListener("mouseenter", () => item[i].setAttribute("style","backGround: black"));
    item[i].addEventListener("click", ()=> item[i].setAttribute("style","backGround: white"));
}

