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

function createNewImageForm(){
  var div1 = document.createElement("div");
  div1.id="aDiv";
  document.body.appendChild(div1);
  
  //Place the input field
  var input = document.createElement("input");
  input.type = "url";
  input.id = "urlinput";
  input.placeholder = "Enter URL Here";
  input.value = "";
  document.getElementById("myForm").appendChild(input);
  var url = document.getElementById("urlinput").value;
  
  //Add submit button
  var inputbutton = document.createElement("input");
  inputbutton.id = "submitbutton";
  inputbutton.type = "submit";
  inputbutton.value = "submit";
  document.getElementById("myForm").appendChild(inputbutton);
  inputbutton.addEventListener("click", function() {});

    //Create the form
    var form = document.createElement('form');
    form.id="myForm";
    form.action="results.html";
    form.method="GET";
    contentContainer.appendChild(form);
  
    //Create the div
    var div1 = document.createElement("div");
    div1.id="aDiv";
    contentContainer.appendChild(div1);
  
    //Place the input field
    var input = document.createElement("input");
    input.type = "url";
    input.id = "urlinput";
    input.placeholder = "Enter URL Here";
    input.value = "";
    document.getElementById("myForm").appendChild(input);
    var url = document.getElementById("urlinput").value;
  
    //Add submit button
    var inputbutton = document.createElement("input");
    inputbutton.id = "submitbutton";
    inputbutton.type = "submit";
    inputbutton.value = "submit";
    document.getElementById("myForm").appendChild(inputbutton);  //This line doesnt work
  
    //create an empty array for images
    imgObjects = [];
  
    function arrList(e){ // create function with an event
      e.preventDefault(); // prevents the page from reloading when clicking on submit
      var values = document.getElementById('urlinput'); //get input field
      imgObjects.unshift({url: values.value});// push the input value to the beginning of an empty array (imgObjects)
      console.log(imgObjects); // Console log the empty array to see if it works
    }
  
    var submitButton = document.getElementById('submitbutton'); //get submitbutton
    var submitForm = document.getElementById('myForm'); // get form
    submitButton.addEventListener('click', arrList, false); // when clicking on submit, the arrList function should fire
}