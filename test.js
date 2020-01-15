
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
imageDiv.setAttribute("src","https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg");
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

//Kan man ta bort en bild med denna kod? Hur kopplar vi ihop detta med URL bilder?
var imgDelete = document.createElement("button")
imgDelete.id = "imageRemove";
imgDelete.textContent = "Remove image";
modalBackground.appendChild(imgDelete);

imgDelete.addEventListener("click", function(){
    imageDiv.removeAttribute("src");
})


//-----------------------------------------------------------------------------
//Funktion som lägger bild i modalRef?
img.onclick = function(){
modalRef.style.display = "block";
modalImg.src = this.src; //lägger URL i modalen?
}


