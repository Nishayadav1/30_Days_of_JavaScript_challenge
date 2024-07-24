// Event Handling

// Basic Element handling-------------------------------------------------------
// 1.
const btn1= document.querySelector('#btn1');
btn1.addEventListener('click',()=>{
    document.querySelector('#p1').textContent="I am fine and you?"
})//----------------------------------click


// 2.
const btn2 = document.querySelector('#btn2');
const img1 = document.querySelector("#img1");
btn2.addEventListener('dblclick', () => {
   if (img1.style.display === 'none') {
       img1.style.display = 'block';
   } else {
       img1.style.display = 'none'; 
   }
});//------------------------------dblclick

//Mouse Events----------------------------------------------------
// 3.
const p1=document.querySelector('#p1')
p1.addEventListener('mouseover',()=>{
    p1.style.backgroundColor="yellow"
})//------------------mouseover

// 4.
p1.addEventListener('mouseout',()=>{
    p1.style.backgroundColor="lightblue"
})//-------------------mouseout

//Keyboard Event------------------------------------------------------
// 5.
const input1=document.querySelector("#input1");
const heading1=document.querySelector("#h1")
input1.addEventListener('keydown',(event)=>{
    console.log('key: ', event.key);
    heading1.textContent=`you are pressend: ${event.key}`;

});//-----------------keydown

// 6.
const para=document.querySelector("#p2");
input1.addEventListener("keyup",()=>{
    para.textContent=`current value: ${input1.value}`;
});//---------------------------keyup

//From Event-----------------------------------------------------------
// 7.
const submitForm=document.querySelector("#btn2");
const form=document.querySelector("#form");
form.addEventListener("submit",(event)=>{
    event.preventDefault(); //preventDefult the form autosubmiting

    var userName=document.querySelector("#name").value
    console.log(userName)

    var userEmail=document.querySelector("#email").value
    console.log(userEmail)

    var dropDown=document.querySelector("#dropdown").value
    console.log(dropDown)
})//--------------------------submit


// 8.
const dropDown1=document.querySelector("#countryDropdown")
const para1=document.querySelector("#para1")
dropDown1.addEventListener("change",()=>{
    para1.textContent=`Contury Namre: : ${dropDown1.value}`

})//----------------------------change

//Event Delegation---------------------------------------------------------
// 9.
const itemList = document.getElementById('itemList');
itemList.addEventListener('click',(event)=>{
    if (event.target.tagName=='LI'){
        console.log('clicked item:',event.target.textContent)
    }
})


// 10.
const itemList1= document.getElementById('itemList');
const addItemButton = document.getElementById('addItemButton');
addItemButton.addEventListener('click',()=>{
     const newItem=document.createElement('li');
     newItem.textContent=`Item ${itemList.children.length+1}`
     itemList1.appendChild(newItem)
})

