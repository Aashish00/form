var inputArray = [];
var username = document.getElementById('username');
var email = document.getElementById('email');
var brday = document.getElementById('brday');
var job = document.getElementById('job');
var screen = document.getElementById('screen');

document.getElementById('button').onclick = function(){
  inputArray.push(username.value);
  inputArray.push(email.value);
  inputArray.push(brday.value);
  inputArray.push(job.value);
  screen.innerHTML = username.value + email.value + brday.value + job.value;

  document.cookie = "USER=" + inputArray + "expires="+ new Date(new Date().getTime()+60*60*1000*24).toGMTString()+";path=/";
};

































