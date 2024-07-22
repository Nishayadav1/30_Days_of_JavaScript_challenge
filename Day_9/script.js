// DOM maniupulation 

// selecting amd manipulating element
// 1.
const heading= document.getElementById("h");
heading.textContent="hlw DOM maniupulation";

// 2.
heading.style.backgroundColor="yellow";

// creating and Appending elements
// 3.
const newDiv= document.createElement('div');
document.body.appendChild(newDiv)
newDiv.textContent='this ia a new div element';

// 4.
 const newul= document.createElement('ul');
 document.body.appendChild(newul);
 newul.innerHTML="JHJJIDOIE"

const newli=document.createElement('li');
newli.innerText="hi I am";
newul.appendChild(newli)


// Removing element
// 5.
const back=document.querySelector('.cls')
setTimeout(()=>{
    back.classList.remove('cls') 
},1000)

// 6.
if (newul.lastChild){
    newul.removeChild(newul.lastChild)
}


// Modifying Attribute and classes
// 7.
const imgPic=document.querySelector('img');
imgPic.src='p1.png';

// 8.
const imgChange=document.querySelector('.img1');
imgChange.classList.add('img1');
 setTimeout(()=>{
    imgChange.classList.remove('img1');
 },3000);


// Event Handling
// 9.
const btn=document.querySelector('.btn1');
btn.addEventListener('click',()=>{
    document.querySelector('#h4').textContent="i am rahul"
})


// 10.
const heading4=document.querySelector('#h4');
heading4.addEventListener('mouseover',()=>{
    heading4.style.border='1pc solid green'
})

// ------------------------------------------------------------------------------------------------------------------------------