function add(){
  let a,b,c;
  a=Number(document.getElementById("first_add").value);
  b=Number(document.getElementById("second_add").value);
  if(a===parseInt(a)&&b===parseInt(b))
  {
  c= a + b;
  document.getElementById("answer_add").value= c;
  }
  else{
    alert("Onlynumbersareallowed");
   }
  }
function sub(){
    let a,b,c;
    a=Number(document.getElementById("first_sub").value);
    b=Number(document.getElementById("second_sub").value);
    if(a===parseInt(a)&&b===parseInt(b))
    {
    c= a - b;
    document.getElementById("answer_sub").value= c;
    }
    else{
      alert("Onlynumbersareallowed");
     }
    }
    function product(){
      let a,b,c;
      a=Number(document.getElementById("first_pro").value);
      b=Number(document.getElementById("second_pro").value);
      if(a===parseInt(a)&&b===parseInt(b))
      {
      c= a * b;
      document.getElementById("answer_pro").value= c;
      }
      else{
        alert("Onlynumbersareallowed");
       }
      }
function div(){
let a,b,c;
a=Number(document.getElementById("first_div").value);
b=Number(document.getElementById("second_div").value);
if(a===parseInt(a)&&b===parseInt(b))
{
c= a / b;
document.getElementById("answer_div").value= c;
}
else{
  alert("Onlynumbersareallowed");
 }
}
function mod(){
  let a,b,c;
  a=Number(document.getElementById("first_mod").value);
  b=Number(document.getElementById("second_mod").value);
  if(a===parseInt(a)&&b===parseInt(b))
  {
  c= a %b;
  document.getElementById("answer_mod").value= c;
  }
  else{
    alert("Onlynumbersareallowed");
   }
  }



          