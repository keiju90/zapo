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
  }
}

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