function initImagesPage(){ // all content for Images page inside
  let content = document.createElement('h3'); // create content images
  content.id = "Images";
  content.className='images';
  content.innerHTML = 'Images';
  contentContainer.appendChild(content);

  for(let i = 0; i < imgObjects.length; i++){// as long as this statement is true, code below should run
    var imgContainer = document.createElement('div'); // create a IMAGE DIV to store images in
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

    var imgDelete = document.createElement("button"); // create REMOVE BUTTON
    imgDelete.id = "imageRemove";
    imgDelete.textContent = "Remove image";

    imgContainer.appendChild(img); // append IMAGE ELEMENT to IMAGE DIV CONTAINER
    imgContainer.appendChild(imgDelete); // append REMOVE BUTTON to IMAGE DIV CONTAINER
    contentContainer.appendChild(imgContainer); // append IMAGE DIV CONTAINER to CONTENT-CONTAINER

    img.addEventListener('click', showModal); // when IMAGE clicked, it pops-up
    //SOFIA, FÅTT ÄNDRA IMGCONTAINER TILL IMG FÖR ANNARS FUNGERAR INTE REMOVEIMAGE KNAPPEN PGA eventBUBBLING

    //set up eventlisteners to call ITEMDONE on click
    imgDelete.addEventListener('click', itemDone, false); //when clicking on REMOVE BUTTON, function ITEMDONE fires


  } // LOOP ENDS HERE, SOFIA
  }// INITIMAGESPAGE ENDS HERE, SOFIA

  function itemDone(e) { //remove image


    var target, elParent, elGrandparent;
    target = e.target; // calls function GETTARGET
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;

    console.log(target);
    console.log(elParent);
    console.log(elGrandparent);
    
    elGrandparent.removeChild(elParent);
    console.log(elGrandparent);
    //prevent the link from taking you elsewhere
    e.preventDefault();
  }

//POPUP MODAL
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
}