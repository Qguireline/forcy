let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pig.gif') {
        myImage.setAttribute('src', 'images/hug.gif');
    } else {
        myImage.setAttribute('src', 'images/pig.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '你好，' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好，' + storedName;
}

myButton.onclick = ()=>{
    setUserName();
}