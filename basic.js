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
contentContainer.id = 'content-container';
document.body.appendChild(contentContainer);

// code above is basic UI


function changeScreen(screenType){ // change screens function
  contentContainer.innerHTML = '';

  if(screenType == 'images'){ // if screentype = images, change to initImagesPage
    initImagesPage(); // calls function initImagesPage
  } else if(screenType == 'newImage'){
    initNewImagePage();
  } else if(screenType == 'galleries'){
    initGalleriesPage();
  }
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
  var closebtn = document.createElement('h6');
  closebtn.id="closebButton";
  closebtn.textContent='X';
  closebtn.display='none';

  closebtn.addEventListener('click',function(){
    this.parentElement.style.display='none';
  })

  var logInForm = document.createElement('form');
  logInForm.id="loginform";
  logInForm.method ='Get';
  logInForm.action='#';

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
    } else if (email != atpos < 1 || atdot < 1) {
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
    } else if(password != user1Password){
      feedback +=" <strong style='color:#C00'>The user does not exist.</strong>" ;
      console.log("hej");
    } else {
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

    document.body.appendChild(loginDiv); // Div
    loginDiv.appendChild(logInForm);    // form
    logInForm.appendChild(closebtn); // the X to close the input form window
    logInForm.appendChild(feedBack);
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
