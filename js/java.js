var front = document.querySelectorAll('.front');
var timer;
var mousein=true;
document.addEventListener("mouseout", function(event) {
  mousein=false;}
);
 document.addEventListener("click", '.flex', function(event) {
alireza2(event); mousein=true;}
);
console.log(front);
//$('.flex').hover(function(event){setInterval(alireza(event),100);});
function alireza(ali) {
  var random = (Math.random()*10);
  console.log(random);
  var rand = Math.floor(random)%3;
console.log(mousein);
  switch (rand) {
    case 0:
      ali.target.style.backgroundColor = "blue";
      break;
    case 1:
      ali.target.style.backgroundColor = "orange";
      break;
    case 2:
      ali.target.style.backgroundColor = "yellow";
      break;
    default:
  }
/*  var delayMillis = 1000; //1 second
setTimeout(function() {
  if(mousein){
  alireza(ali);
  }
  //your code to be executed after 1 second
}, delayMillis);*/

}


function alireza2(ali) {
  var rand1 = Math.floor((Math.random()*1000))%255;
  var rand2 = Math.floor((Math.random()*1000))%255;
  var rand3 = Math.floor((Math.random()*1000))%255;

console.log(timer);
ali.target.style.backgroundColor = 'rgb('+ (rand1) + ',' + rand2 + ','+ rand3 +')';
  }


function alireza3() {
  var rand1 = Math.floor((Math.random()*1000))%255;
  var rand2 = Math.floor((Math.random()*1000))%255;
  var rand3 = Math.floor((Math.random()*1000))%255;

console.log(timer);
  front.style.backgroundColor = 'rgb('+ (rand1) + ',' + rand2 + ','+ rand3 +')';
  return null;
}
//var timer = setInterval(alireza3,1000);

function funcName() {
    alert("test");
}
