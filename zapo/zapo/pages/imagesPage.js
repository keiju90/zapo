function initImagesPage(){ // all content for Images page inside
  let content = document.createElement('h3'); // create content images
  content.id = "Images";
  content.className='images';
  content.innerHTML = 'Images';
  contentContainer.appendChild(content);

  for(let i = 0; i < imgObjects.length; i++){
    var imgContainer = document.createElement('div'); // create a div to store images in
    imgContainer.id="imgCont"; // div id imgCont, to style the div

    var img = document.createElement('img') //create image element
    img.src = imgObjects[i].url; // image source from array above
    img.id = "picture";
    imgContainer.appendChild(img); // append img to div container
    contentContainer.appendChild(imgContainer); // append div to body

    var desc = document.createElement("p")
    desc.innerText = imgObjects[i].name;
    desc.id="descr";
    document.getElementById("imgCont").appendChild(desc);
  
    var thename = document.createElement("p")
    thename.innerText = imgObjects[i].description;
    thename.id="imgname";
    document.getElementById("imgCont").appendChild(thename);

  
    imgContainer.addEventListener('click', showModal);
  }
}

function showModal(event){
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
  imageDiv.setAttribute("src",event.target.src);
  modalRef.appendChild(imageDiv);

  //create close button
  var clButton = document.createElement("h6");
  clButton.id = "closeBtn";
  clButton.textContent = "X";
  modalBackground.appendChild(clButton);

  //function to close the whole modal
  clButton.addEventListener("click", function(){
    console.log(this);
    this.parentElement.style.display = "none";
  })

  var imgDelete = document.createElement("button");
  imgDelete.id = "imageRemove";
  imgDelete.textContent = "Remove image";
  modalBackground.appendChild(imgDelete);

  imgDelete.addEventListener("click", removeImage);
}

function removeImage(){
  //other code is needed
  //imageDiv.removeAttribute("src");
  
  //-----------------------------------------------------------------------------
  //Funktion som lägger bild i modalRef?
  // img.onclick = function(){
  //   modalRef.style.display = "block";
  //   modalImg.src = this.src; //lägger URL i modalen?
  // }
}







// Elvins kod

// //Display image metadata in the same card where the images are located
// function nameoftheimage() {
// var nameparagraph = document.createElement('p');
// nameparagraph.id = "imagename";
// nameparagraph.innerText = imagename;
// //.appendChild(nameparagraph);
// };

// function descriptionfortheimage() {
// var descriptionparagraph = document.createElement('p');
// descriptionparagraph.id = "imagedescription";
// descriptionparagraph.innerText = imagedescription;
// var imageslocation = document.querySelector(images);
// imageslocation.appendChild(nameparagraph);
// };

// var nameparagraph = document.createElement('p');
  // nameparagraph.id = "imagename";
  // nameparagraph.innerText = imagetitle;

  // var descriptionparagraph = document.createElement('p');
  // descriptionparagraph.id = "imagedescription";
  // descriptionparagraph.innerText = imagedescription;
  
  // var imageslocation = document.getElementsByClassName("img1");
  // imageslocation.appendChild(nameparagraph);