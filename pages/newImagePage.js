function initNewImagePage() { // opens a "new Image" content page/screen
  let content = document.createElement('h3'); // create content images
  content.innerHTML = 'New image';
  contentContainer.appendChild(content);

  createNewImageForm(); // calls function in addImageObject.js-file
}