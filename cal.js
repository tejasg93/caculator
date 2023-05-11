let screen =document.querySelector(".screen");
let clear =document.querySelector(".btn-clear");
let equal =document.querySelector(".btn-eqal");


let addition =document.querySelector(".add");
let subtraction =document.querySelector(".sub");
let multiply =document.querySelector(".multi");
let division =document.querySelector(".divi");
let btn8 =document.querySelector(".btn8");
let btn9 =document.querySelector(".btn9");
let btn7 =document.querySelector(".btn7");
let btn6 =document.querySelector(".btn6");
let btn5 =document.querySelector(".btn5");
let btn4 =document.querySelector(".btn4");
let btn3 =document.querySelector(".btn3");
let btn2 =document.querySelector(".btn2");
let btn1 =document.querySelector(".btn1");
let btn0 =document.querySelector(".btn0");

clear.addEventListener('click', function (e) {
  screen.value="";
})

btn8.addEventListener('click', function (e) {
    let value = btn8.value;
    screen.value += value;
})

btn9.addEventListener('click', function (e) {
    let value = btn9.value;
    screen.value += value;
})
btn7.addEventListener('click', function (e) {
    let value = btn7.value;
    screen.value += value;
})
btn6.addEventListener('click', function (e) {
    let value = btn6.value;
    screen.value += value;
})
btn5.addEventListener('click', function (e) {
    let value = btn5.value;
    screen.value += value;
})
btn4.addEventListener('click', function (e) {
    let value = btn4.value;
    screen.value += value;
})
btn3.addEventListener('click', function (e) {
    let value = btn3.value;
    screen.value += value;
})
btn2.addEventListener('click', function (e) {
    let value = btn2.value;
    screen.value += value;
})
btn1.addEventListener('click', function (e) {
    let value = btn1.value;
    screen.value += value;
})
btn0.addEventListener('click', function (e) {
    let value = btn0.value;
    screen.value += value;
})

addition.addEventListener('click', function (e) {
    let value = addition.value;
    screen.value += value;
})
subtraction.addEventListener('click', function (e) {
    let value = subtraction.value;
    screen.value += value;
})
multiply.addEventListener('click', function (e) {
    let value = multiply.value;
    screen.value += value;
})
division.addEventListener('click', function (e) {
    let value = division.value;
    screen.value += value;
})

equal.addEventListener('click', function (e) {
    let answer = eval(screen.value);
    screen.value=answer;    
})

// (function() {
//     let screen=document.querySelector(".screen");
//     let buttons =document.querySelector(".btn");
//     let clear=document.querySelector(".btn-clear");
//     let equal=document.querySelector(".btn-eqal");

//     buttons.forEach(function(button){
//         button.addEventlistner('click',function(e){
//             let value= e.target.dataset.num;
//             screen.value += value;
//         })
//     })
// })

// buttons.addEventlistner('click',function(e){
//     if (screen.value=== ''){
//         screen.value= "";

//     } else {
//     let answer = eval(screen.value);
//     screen.value=answer;
// }
// });
// clear.addEventlistner('click',function(e){
//     screen.value="";
// });



