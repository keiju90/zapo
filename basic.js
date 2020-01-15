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

changeScreen('images');

// login button
function loginBtn(){
  // create the login button
  var logInButton = document.createElement('button');
  logInButton.textContent="Login";
  logInButton.id="loginbutton"
  document.body.appendChild(logInButton);
  logInButton.addEventListener('click', login, false)

  /**
   * @description shows the login form
   *
   */

  function login(e){
    var loginDiv = document.createElement('div');
    var logInForm = document.createElement('form');
    logInForm.id="loginform";
    logInForm.method='Get';

    // input field email
    var emailInput = document.createElement('input');
    emailInput.id='email';
    emailInput.setAttribute("type", "email");
    emailInput.placeholder='E-mail';
    emailInput.maxLength='20';

    var lineBreak = document.createElement('br');

    // input field password
    var passwordInput = document.createElement('input');
    passwordInput.id='password';
    passwordInput.placeholder='password'
    passwordInput.setAttribute("type", "password");
    passwordInput.maxLength='20';


    // creates the submit button inside the form
    var loginSubmitButton = document.createElement('button');
    loginSubmitButton.id='loginSubmitBtn';
    loginSubmitButton.type='submit';
    loginSubmitButton.value='submit';
    loginSubmitButton.textContent='Submit';
    loginSubmitButton.addEventListener('click',submit, false)

    function submit (){
      // here the code should be for where the form should be sent.
    }

    document.body.appendChild(loginDiv); // Div
    loginDiv.appendChild(logInForm);    // form
    logInForm.appendChild(emailInput); // email input
    logInForm.appendChild(lineBreak);   // line break
    logInForm.appendChild(passwordInput); // password input
    logInForm.appendChild(loginSubmitButton); // submit button

    // ta bort eventlyssnaren så det bara blir ett formulär även om man trycker på knappen mer än en gång
    this.removeEventListener('click',login,false)

    }
  }
   loginBtn();
