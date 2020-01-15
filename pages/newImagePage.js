var imagetitle, imagedescription, url;

function initNewImagePage() { // opens a "new Image" content page/screen
  let content = document.createElement('h3'); // create content images
  content.innerHTML = 'New image';
  contentContainer.appendChild(content);

  createNewImageForm(); // calls function in addImageObject.js-file
}

function createNewImageForm(){

  //Create the form
  var form = document.createElement('form');
  form.id="myForm";
  form.action="";
  form.method="GET";
  contentContainer.appendChild(form);

  //Place the input field 
  var input = document.createElement("input");
  input.type = "url";
  input.id = "urlinput";
  input.placeholder = "Enter URL Here";
  input.value = "";
  document.getElementById("myForm").appendChild(input);
  
  //var url = document.getElementById("urlinput").value;

  //Add submit button 
  var inputbutton = document.createElement("input");
  inputbutton.id = "submitbutton";
  inputbutton.type = "submit";
  inputbutton.value = "Submit";
  document.getElementById("myForm").appendChild(inputbutton);  
  inputbutton.addEventListener("click", submitForm, function() {}); //deleting function() will remove all the orange stuff on the site.

  //Input field for the name
  var name = document.createElement('input');
  name.type = "text";
  name.id = "nameinput";
  name.placeholder = "Write name here";
  name.value = "";
  document.getElementById("myForm").appendChild(name);


  //Add description metadata to image.
  var description = document.createElement('input');
  description.type = "text";
  description.id="descriptioninput";
  description.placeholder="Write description here"
  document.getElementById("myForm").appendChild(description);

  imagetitle = document.getElementById("nameinput").value;
  imagedescription = document.getElementById("descriptioninput").value;
}


//Displaymetadata.js
//Display image metadata in the same card where the images are located
  
function submitForm(e) {

  e.preventDefault(); // prevents the page from reloading when clicking on submit
  var values = document.getElementById('urlinput'); //get input field
  
  let newImgObj = {
    url: values.value,
    // name: '',
    // description: '',
  }
  
  imgObjects.unshift(newImgObj);// push the input value to the beginning of an empty array (imgObjects)
  console.log(imgObjects); // Console log the empty array to see if it works
};