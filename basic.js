var imgObjects = []; //empty array for images

let header1 = document.createElement('header'); // create header
document.body.appendChild(header1);
header1.className='header';

let text = document.createElement('h2'); // creat text in header
text.textContent='Gallery application 2000';
header1.appendChild(text);
text.className='h2';

let bar = document.createElement('nav') // create sidebar
document.body.appendChild(bar);
bar.className= 'sidenav';
//-----------------------

//-------------------------------
let list = document.createElement('ul') // create list
document.body.appendChild(list);
list.className='sidenavLinks';
//---------------------------------------
let listLinkOne = document.createElement('li') // list items, New Image
listLinkOne.textContent="New image";
list.appendChild(listLinkOne);
listLinkOne.style.padding='20px';
listLinkOne.addEventListener("click", function(){
  changeScreen('newImage');//calls the function changeScreen
}); // make text clickable and calls function

let listLinkTwo = document.createElement('li') // list items, Images
listLinkTwo.textContent="Images";
list.appendChild(listLinkTwo);
listLinkTwo.style.padding='20px';
listLinkTwo.style.margin='10px';
listLinkTwo.addEventListener("click", function(){
  changeScreen('images'); //calls the function changeScreen
}); // make text clickable and calls function

let listLinkThree = document.createElement('li') // list items, Galleries
listLinkThree.textContent="Galleries"
list.appendChild(listLinkThree);
listLinkThree.style.padding='20px';
listLinkThree.addEventListener("click", function(){
  changeScreen('galleries'); //calls the function changeScreen
}); // make text clickable and calls function

let contentContainer = document.createElement('div'); // create header images
contentContainer.style.marginTop = '50px';
contentContainer.style.marginLeft = '300px';
contentContainer.style.position = 'absolute';
contentContainer.id = 'content-container';
document.body.appendChild(contentContainer);

// code above is basic UI


function changeScreen(screenType){ // change screens function
  contentContainer.innerHTML = '';

  if(screenType == 'images'){ // if screentype = images, change to initImagesPage
    initImagesPage(); // calls function initImagesPage
  } else if(screenType == 'newImage'){
    newImagePage();
  } else if(screenType == 'galleries'){
    galleriesPage();
  }
}

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

function newImagePage() { // opens a "new Image" content page/screen
  let content = document.createElement('h3'); // create content images
  content.innerHTML = 'New image';
  contentContainer.appendChild(content);

  createNewImageForm(); // calls function in addImageObject.js-file
}

function galleriesPage() { // opens a new "galleries" content page/screen
  let content = document.createElement('h3'); // create content images
  content.innerHTML = 'Galleries';
  contentContainer.appendChild(content); // submitForm (); // annropar formuläret
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

changeScreen('images');
//--------------------------------------------------------------
/**
 * @description with a click the login form is displayed.
 */

function loginBtn(){
  var logInButton = document.createElement('button');
  logInButton.textContent="Login";
  logInButton.id="loginbtn"
  document.body.appendChild(logInButton);
  logInButton.addEventListener('click', login, false)


  /**
   * @description contains the entire login form
   *
   */
  function login(){

    var loginDiv = document.createElement('div');

    var logInForm = document.createElement('form');
     logInForm.id="loginform";
     logInForm.method ='Get';
     logInForm.action='#'
     logInForm.addEventListener('submit',function(event){


       event.preventDefault(); //prevents page reloading
       var feedback ="";

       var email = document.getElementById('email').value;

      // indexof is a method. here i want to find out the position of @
        var atpos = email.indexOf('@');

      // lastindexof means the last dot if there are more
        var atdot = email.lastIndexOf('.');

        var password = document.getElementById('password').value;
        var plength = password.length;

        //this is a password for a pretend user to see if it works
        var user1Password="aaaaaaa";


        if(atpos < 1 || atdot < 1){
          feedback +=" <strong style='color:#C00'>The e-mail address is not correct it is missing an @ or a dot. <br></strong>" ;
          document.getElementById('email').style.borderColor='red';

        }
        else if (email != atpos < 1 || atdot < 1) {
          document.getElementById('email').style.borderColor='lightskyblue';
        }

        if(plength < 7 ){
          feedback +=" <strong style='color:#C00'>Your password should be longer than 7 characters.</strong>" ;
          document.getElementById('password').style.borderColor='red';
        }
        // om min atpos (@ position) är störren än atdock (. position))
        // alltså om @ ligger efter . då har vi ett problem
        else if (atpos > atdot){
          feedback +=" <strong style='color:#C00'>Email address is not correct @ must be before last dot</strong>" ;
        }
        else if(password != user1Password){
          feedback +=" <strong style='color:#C00'>The user does not exist.</strong>" ;
          console.log("hej");
        }

        else{
          document.getElementById('email').style.borderColor='lightskyblue';
          document.getElementById('password').style.borderColor='lightskyblue';


        }

        document.getElementById('feedback').innerHTML = feedback;
         return false;


     })

    // input field email
    var emailInput = document.createElement('input');
    emailInput.id='email';
    emailInput.setAttribute("type", "text");
    emailInput.placeholder='E-mail';
    emailInput.maxLength='20';

    var lineBreak = document.createElement('br');

    // input field password
    var passwordInput = document.createElement('input');
    passwordInput.id='password';
    passwordInput.placeholder='password'
    passwordInput.setAttribute("type", "password");


    // creates the submit button inside the form
    var loginSubmitButton = document.createElement('button');
    loginSubmitButton.id='loginSubmitBtn';
    loginSubmitButton.type='submit';
    loginSubmitButton.value='submit';
    loginSubmitButton.textContent='Submit';

    var createAccount = document.createElement('p')
    createAccount.id='account'
    createAccount.textContent="Create Account"

    let feedBack = document.createElement('p');
    feedBack.id='feedback';

    document.body.appendChild(feedBack);


    document.body.appendChild(loginDiv); // Div
    loginDiv.appendChild(logInForm);    // form
    logInForm.appendChild(emailInput); // email input
    logInForm.appendChild(lineBreak);   // line break
    logInForm.appendChild(passwordInput); // password input
    logInForm.appendChild(loginSubmitButton); // submit button
    logInForm.appendChild(createAccount); // text create account

    // makes it possible to press the button several times but it only shows one form
    this.removeEventListener('click',login ,false)
    }
  }

  loginBtn();
