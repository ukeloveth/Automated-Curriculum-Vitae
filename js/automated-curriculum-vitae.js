//alert("hello")
// const moreData = document.getElementsByTagName("h3") 
// console.log(moreData)


// Getting html element by TagName
// const moreData = document.getElementsByTagName("input") 
// //console.log(moreData)
// for(let i=0;i<moreData.length;i++){
//         console.log(i)
// }

// const moreData = document.getElementsByTagName("h1") 
// //console.log(moreData)
// for(let i=0;i<moreData.length;i++){
//         console.log(i)
// }

// const moreData = document.getElementsByTagName("h4") 
//     console.log(moreData)
//     for(let i=0;i<moreData.length;i++){
//         console.log(moreData[i])

//     }
// Adding css style to javascript
// const moreData = document.getElementsByTagName("label") 
// //console.log(moreData)
// for(let i=0;i<moreData.length;i++){
//         //console.log(moreData[i])
//         if(i%2===0){
//          moreData[i].style.backgroundColor ="purple"
//         }else{
//             moreData[i].style.backgroundColor ="gray"
//         }
// }

// // Getting Element by ClassName

// const moreData = document.getElementsByClassName("container");
// //console.log(moreData)
// for(let i=0;i<moreData.length;i++){
//     console.log(moreData[i])
// }

// const moreData = document.getElementsByClassName("content");
// //console.log(moreData)
// for(let i=0;i<moreData.length;i++){
//     console.log(moreData[i])
// }


//Printing out all the element using queryselectorAll
// const moreData = document.querySelectorAll(".container");
// //console.log(moreData)
// for(let i=0; i<moreData.length;i++){
//     console.log( moreData[i])
// }

// // adding Eventlistner to submit button
// document.querySelector('.btn').addEventListener('click',function(){
//     //alert("hello")
//     let info= document.getElementById('info2')
//     info.innerHTML = 'Your Details Has been succesfully submitted.Please wait!'
//     info.classList.add('container')
// })

// setTimeout(function(){
//     document.getElementById('info2').innerHTML='Your Details Has been succesfully submitted.Please wait!'
// })

function sub(){
    setTimeout (function(){ 
document.getElementById('info2').innerHTML ='Your Details Has been succesfully submitted.Please wait!'
},10000);
window.location='http://127.0.0.1:5500/automated-curriculum-vitae.html'
}