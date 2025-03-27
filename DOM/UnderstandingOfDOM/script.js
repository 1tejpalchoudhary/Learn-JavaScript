//write JavaScript to change the paragraph text when clicking the button.
var changeTxt = document.querySelector(".info");
var changeBtn = document.getElementById("changeTextBtn");

changeBtn.addEventListener("click", function(){
    changeTxt.textContent = "Text changed to updated one";
});


//changing the style
changeBtn.addEventListener('click', function(){
    changeBtn.style.backgroundColor = 'yellow';

    changeTxt.style.color = 'blue';
    changeTxt.style.fontSize = '20px'
});


//adding paragraph 
var addTextBtn = document.getElementById('addTextBtn');
addTextBtn.addEventListener('click', function(){
    const createParagraph = document.createElement('p');
    createParagraph.textContent = "Hello welcome to Javascript DOM";
    document.body.appendChild(createParagraph);
});


//remove last paragraph
var removeTextBtn = document.getElementById('removeTextBtn');
removeTextBtn.addEventListener('click', ()=>{
    const paragraps = document.querySelectorAll('p');
    if(paragraps.length > 1){
        paragraps[paragraps.length - 1].remove();
    }
})

//we are creating alert 
const itemList = document.getElementById('itemList');
itemList.addEventListener('click', (event)=>{
    if(event.target.tagName === 'LI'){
        event.target.style.color = "blue";
        alert(`You clicked on : ${event.target.textContent}`);
    }

});

// here we are creating form and performing tasks
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const displayName = document.getElementById("displayName");

nameForm.addEventListener('submit', function(event){
    event.preventDefault();
    displayName.textContent = `Hello ${nameInput.value} !`;
    nameInput.value = '';
});

// here we are creating a box and performing simple annimation
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', ()=>{
    box.style.transform = 'tranlateX(100px)';
    box.style.backgroundColor = 'green';
});


const dragBox = document.getElementById('dragBox');
const dropgBox = document.getElementById('dropBox');

// When dragging starts
dragBox.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

// When dragging over the drop zone
dropZone.addEventListener("dragover", function (event) {
    event.preventDefault(); // Allow dropping
});

dropZone.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    dropZone.appendChild(draggedElement); // Move item into drop zone
});

// here we are making a simple counter functionality
const counterDisplay = document.getElementById("counterDisplay");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// Update counter display
function updateCounter() {
    counterDisplay.textContent = count;
}

// Event listeners
increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) count--;
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});
