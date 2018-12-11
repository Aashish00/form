$(document).ready(function(){
  $('input').focus(function(){
  $(this).css('background','pink');
  })
$('input').blur(function(){
  $(this).css('background','white');
 })
  
 })

var inputArray = [];
var titleinput = document.getElementById('title');
var nameinput = document.getElementById('name');
var ticketsinput = document.getElementById('tickets');
var displayinput = document.getElementById('display');

document.getElementById('submit').onclick = function(){
  inputArray.push(titleinput.value);
  inputArray.push(nameinput.value);
  inputArray.push(ticketsinput.value);
  displayinput.innerHTML = titleinput.value + nameinput.value + ticketsinput.value;

  document.cookie = "USER=" + inputArray;

};























