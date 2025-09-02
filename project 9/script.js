let randomColor = document.getElementById("change");
let changeClassName = document.getElementById("changeclass");
const backgroundColor = document.body;

randomColor.addEventListener("click", (event)=>{
    backgroundColor.style.background = createColor();
})

function createColor(){
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}
changeClassName.addEventListener("click", (e)=>{
    backgroundColor.classList.toggle("dark");
    backgroundColor.style = "";
})