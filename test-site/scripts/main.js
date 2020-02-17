let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Image1.jpg') {
      myImage.setAttribute('src', 'images/Image2.jpg');
    } else {
      myImage.setAttribute('src', 'images/Image1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'You are the best, ' + storedName;
    }
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'You are the best, ' + myName;
    }
}
myButton.onclick = function() {
    setUserName();
}


