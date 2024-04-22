const myImage = document.querySelector("img");

myImage.onclick = () =>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/rich-beauty.jpg"){
        myImage.setAttribute("src", "images/美女.jpg");
    }else{
        myImage.setAttribute("src", "images/rich-beauty.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter you name.");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    } 
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = ()=>{
    setUserName();
}