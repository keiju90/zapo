
//create image modal element
var modalBackground = document.createElement("div");
modalBackground.id ="modal-background";
document.body.appendChild(modalBackground);

//create the pop up background
var modalRef = document.createElement("div");
modalRef.id="modal";
modalBackground.appendChild(modalRef);

// create image element
var imageDiv = document.createElement("img");
imageDiv.id = "myImg";
imageDiv.src = "katt.jpg"; //Är detta rätt? Hur får vi in att det är rätt bild som kommer upp?
modalRef.appendChild(imageDiv);

//create close button
var clButton = document.createElement("h6");
clButton.id = "closeBtn";
clButton.textContent = "X";
modalBackground.appendChild(clButton);

//function to close the whole modal
clButton.addEventListener("click", function(){
    this.parentElement.style.display = "none";
})
//-----------------------------------------------------------------------------
//Funktion som lägger bild i modalRef?
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src; 
}
