//display image
var imgContainer = document.createElement('div'); // create div
imgContainer.id="imgCont"; // div id imaCont

function buildImage(){ //create image function
   var img = document.createElement('img') //create image element
   img.src = imgObj[index]; // image source from array above
   imgContainer.appendChild(img); // append img to div container
   document.body.appendChild(imgContainer); // append div to body
};

//when clicking on images link the function buildImage should be called
listLinkTwo.addEventListener("click", buildImage);
