// imagetite gets nameinput value
// imagedescription gets descriptioninput value
var imagetitle, imagedescription;

function initNewImagePage() { // opens a "new Image" content page/screen
    let content = document.createElement('h3'); // create content images
    content.innerHTML = 'New image';
    contentContainer.appendChild(content);

    createNewImageForm(); // calls function
}

/**
* @description creates the image form and its contents
*/
function createNewImageForm() {

    //Create the form
    var form = document.createElement('form');
    form.id = "myForm";
    form.action = "";
    form.method = "GET";
    contentContainer.appendChild(form);

    //Place the input field
    var input = document.createElement("input");
    input.type = "url";
    input.id = "urlinput";
    input.placeholder = "Enter URL Here";
    input.value = "";
    document.getElementById("myForm").appendChild(input);

    //Add submit button
    var inputbutton = document.createElement("input");
    inputbutton.id = "submitbutton";
    inputbutton.type = "submit";
    inputbutton.value = "Submit";
    document.getElementById("myForm").appendChild(inputbutton);
    //deleting function() will remove all the orange stuff on the site.
    inputbutton.addEventListener("click", submitForm, function() {});
    inputbutton.addEventListener("click", clearForm);

    //Clears a form, clear image form
    function clearForm() {
        form.reset();
    }

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
    description.id = "descriptioninput";
    description.placeholder = "Write description here"
    document.getElementById("myForm").appendChild(description);

    imagetitle = document.getElementById("nameinput").value;
    imagedescription = document.getElementById("descriptioninput").value;
}

function submitForm(e) { // submits the form

    e.preventDefault(); // prevents the page from reloading when clicking on submit
    var values = document.getElementById('urlinput'); //get input field
    var valuetwo = document.getElementById("nameinput");
    var valuethree = document.getElementById("descriptioninput");

    let newImgObj = {
        url: values.value,
        name: valuetwo.value,
        description: valuethree.value,
    }
    // push the input value to the beginning of an empty array (imgObjects)
    imgObjects.unshift(newImgObj);
};
