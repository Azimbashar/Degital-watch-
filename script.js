

let ho = document.getElementById('h');
let mi = document.getElementById('m');
let se = document.getElementById('s');
let am = document.getElementById('am');







setInterval(()=>{

d = new Date();
hour = d.getHours();
minute = d.getMinutes();
second = d.getSeconds();


 {
  if(hour > 12 ) 
{
 hour = hour - 12;
 am.innerHTML="PM"
}
else if( hour == 0)
 {
  hour = 12;
 }
}

{
if(hour<=9)
  {
    ho.innerHTML = "0" + hour;
  }
 else{
   ho.innerHTML = hour;
 } 
}

{
 if (minute<=9) 
 {
  mi.innerHTML = "0" + minute;
 }
 else{
   mi.innerHTML = minute;
 }
}

{
  if(second<=9)
  {
    se.innerHTML = "0" + second;
  }
  else{
    se.innerHTML = second;
  }
}
  
},1000)
