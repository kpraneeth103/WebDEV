function Age()
{
  var diY0 = document.getElementById("age").value;
  var w0 = new Date();
  var l0 = w0.getFullYear();
  var yid0 = l0-diY0;
  document.getElementById("year").value=yid0;
}
function Year()
{
  var diY1 = document.getElementById("year").value;
  var w1 = new Date();
  var l1 = w1.getFullYear();
  var yid1 = l1-diY1;
  document.getElementById("age").value=yid1;
}
 function And1()
 {
   document.getElementById("and1").style.display="block";
   document.getElementById("and2").style.display='none';
   document.getElementById('SHW').style.display='none';
 }
 function And2()
{
  document.getElementById('and2').style.display="block";
  document.getElementById('and1').style.display="none";
   document.getElementById('SHW').style.display='none';
}

function showIt()
{
  document.getElementById('timer1').style.visibility='visible';
}
setTimeout("showIt()",3000);
