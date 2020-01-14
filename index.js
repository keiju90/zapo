let header1 = document.createElement('header'); // create header
document.body.appendChild(header1);
header1.className='header'

let text = document.createElement('h2'); // creat text in header
text.textContent='Gallery application 2000';
header1.appendChild(text);
text.className='h2'

let bar = document.createElement('nav') // create sidebar
document.body.appendChild(bar);
bar.className= 'sidenav'
//-----------------------
let content = document.createElement('h3'); // create header images
content.id = "demo";

content.textContent='Images'
document.body.appendChild(content);
content.className='images'

//-------------------------------
let list = document.createElement('ul') // create list
document.body.appendChild(list);
list.className='sidenavLinks';
//---------------------------------------
let listLinkOne = document.createElement('li') // list items, New Image
listLinkOne.textContent="New image"; 
list.appendChild(listLinkOne);
listLinkOne.style.padding='20px';
listLinkOne.addEventListener("click", newImagePage); // make text clickable and calls function

function newImagePage() { // opens a "new Image" content page/screen
  document.getElementById("demo").innerHTML = "New Image";
 submitForm (); // annropar formuläret
// onclick();
 
}

let listLinkTwo = document.createElement('li') // list items, Images
listLinkTwo.textContent="Images";
list.appendChild(listLinkTwo);
listLinkTwo.style.padding='20px';
listLinkTwo.style.margin='10px';
listLinkTwo.addEventListener("click", imagesPage); // make text clickable and calls function

function imagesPage() { // opens a new "Image" content page/screen
  document.getElementById("demo").innerHTML = "Images";
  
 /**
  * @description contains img, cow
  * @returns image is displayed on click
  */
  function imageContainer(e) {     
    
    var cow = document.createElement('img'); 
    cow.setAttribute('src','https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg') 
    cow.className='img1'
    document.body.appendChild(cow); // sätt denna div i body
    listLinkThree.addEventListener('click',onclick);// remove image on click
    listLinkOne.addEventListener('click',onclick);//remove image on click
    
    function onclick(event){
    
      cow.removeAttribute('src')
    }
    
    }
    
    imageContainer();
   
}

let listLinkThree = document.createElement('li') // list items, Galleries
listLinkThree.textContent="Galleries"
list.appendChild(listLinkThree);
listLinkThree.style.padding='20px';
listLinkThree.addEventListener("click", galleriesPage); // make text clickable and calls function

function galleriesPage() { // opens a new "galleries" content page/screen
  document.getElementById("demo").innerHTML = "Galleries";
  

  
}

//----------------------------------------------------

function submitForm(){

var form = document.createElement('form');
form.id="myForm";
form.action="results.html";
form.method="GET";
document.body.appendChild(form);

//Create the div
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
document.getElementById("myForm").appendChild(inputbutton);  //This line doesnt work

 

//create an empty array
var imgObj = [];

function arrList(e){ // create function with an event
e.preventDefault(); // prevents the page from reloading when clicking on submit
var values = document.getElementById('urlinput'.value); //get input field value
imgObj.push('urlinput'.value);// push the input value to the empty array (imgObj)
console.log(imgObj); // Console log the empty array to see if it works
}

var submitButton = document.getElementById('submitbutton'); //get submitbutton
var submitForm = document.getElementById('myForm'); // get form
submitButton.addEventListener('click', arrList, false); // when clicking on submit, the arrList function should fire

}


//--------------------------------------------------------------
/**
 * @description with a click the login form is displayed.
 */

// function loginBtn(){
//   var logInButton = document.createElement('button');
//   logInButton.textContent="Login";
//   logInButton.id="loginbtn"
//   document.body.appendChild(logInButton);
//   logInButton.addEventListener('click', login, false)
  

//   /**
//    * @description contains the entire login form
//    *  
//    */
//   function login(){
    
//     var loginDiv = document.createElement('div');
    
//     var logInForm = document.createElement('form');
//      logInForm.id="loginform";
//      logInForm.method ='Get';
//      logInForm.action='#'    
//      logInForm.addEventListener('submit',function(event){
  
      
//        event.preventDefault(); //prevents page reloading
//        var feedback ="";

//        var email = document.getElementById('email').value; 
      
//       // indexof is a method. here i want to find out the position of @
//         var atpos = email.indexOf('@'); 
      
//       // lastindexof means the last dot if there are more
//         var atdot = email.lastIndexOf('.'); 
      
//         var password = document.getElementById('password').value;
//         var plength = password.length;

//         //this is a password for a pretend user to see if it works
//         var user1Password="aaaaaaa"; 
      
        
//         if(atpos < 1 || atdot < 1){
//           feedback +=" <strong style='color:#C00'>The e-mail address is not correct it is missing an @ or a dot. <br></strong>" ;
//           document.getElementById('email').style.borderColor='red';
          
//         }
//         else if (email != atpos < 1 || atdot < 1) {
//           document.getElementById('email').style.borderColor='lightskyblue';
//         }

//         if(plength < 7 ){
//           feedback +=" <strong style='color:#C00'>Your password should be longer than 7 characters.</strong>" ;
//           document.getElementById('password').style.borderColor='red';
//         }
//         // om min atpos (@ position) är störren än atdock (. position))
//         // alltså om @ ligger efter . då har vi ett problem
//         else if (atpos > atdot){
//           feedback +=" <strong style='color:#C00'>Email address is not correct @ must be before last dot</strong>" ;
//         }
//         else if(password != user1Password){
//           feedback +=" <strong style='color:#C00'>The user does not exist.</strong>" ;
//           console.log("hej");
//         }
       
//         else{
//           document.getElementById('email').style.borderColor='lightskyblue';
//           document.getElementById('password').style.borderColor='lightskyblue';
//           event.stopPropagation();
//         }
      
        
//         document.getElementById('feedback').innerHTML = feedback;
//          return false;
     
       
//      })
    
//     // input field email
//     var emailInput = document.createElement('input');
//     emailInput.id='email';
//     emailInput.setAttribute("type", "text"); 
//     emailInput.placeholder='E-mail';
    
    
    
//     var lineBreak = document.createElement('br');
    
//     // input field password
//     var passwordInput = document.createElement('input');
//     passwordInput.id='password';
//     passwordInput.placeholder='password'
//     passwordInput.setAttribute("type", "password");
 
    
//     // creates the submit button inside the form
//     var loginSubmitButton = document.createElement('button');
//     loginSubmitButton.id='loginSubmitBtn';
//     loginSubmitButton.type='submit';
//     loginSubmitButton.value='submit';
//     loginSubmitButton.textContent='Submit';

//     var createAccount = document.createElement('p')
//     createAccount.id='account'
//     createAccount.textContent="Create Account"
    
//     let feedBack = document.createElement('p');
//     feedBack.id='feedback';
    
//     document.body.appendChild(feedBack);
    
      
//     document.body.appendChild(loginDiv); // Div 
//     loginDiv.appendChild(logInForm);    // form
//     logInForm.appendChild(emailInput); // email input
//     logInForm.appendChild(lineBreak);   // line break
//     logInForm.appendChild(passwordInput); // password input
//     logInForm.appendChild(loginSubmitButton); // submit button
//     logInForm.appendChild(createAccount); // text create account
    
    

//     // makes it possible to press the button several times but it only shows one form
//     this.removeEventListener('click',login ,false)
    
//     }
    
//   }
  
  
//    loginBtn();
  
 



