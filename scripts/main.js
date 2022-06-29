const myImage=document.querySelector('img');
myImage.onclick=function () {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === "images/firefox.jpg") {
      myImage.setAttribute("src", "images/firefox2.jpg");
    } else {
         myImage.setAttribute("src", "images/firefox.jpg");
    }
}

const myButton=document.querySelector('button');
myButton.onclick=function () {
    const myName = localStorage.getItem('name');
    if (!myName || myName === 'null') setUserName();
    else {
      document.querySelector("h1").textContent = `Mozilla is cool , ${myName}`;
    }
    
}
function setUserName(){
    const myName = prompt('Enter your name');
    if (!myName) setUserName();
    localStorage.setItem("name", myName);
    document.querySelector("h1").textContent = `Mozilla is cool , ${myName}`;

}