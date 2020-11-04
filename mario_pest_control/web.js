var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);



function myFunction1(){
    var num1 = document.getElementById("qty1").value;
    var y = num1 * 5;
    document.getElementById("total1").innerHTML = y;
}

function myFunction2(){
    var num1 = document.getElementById("qty2").value;
    var x = num1 * 7;
    document.getElementById("total2").innerHTML = x;
}

function myFunction3(){
    var num1 = document.getElementById("qty3").value;
    var z = num1 * 11;
    document.getElementById("total3").innerHTML = z;
}

function myFunction4(){
    var result = y + x + z
    document.getElementById("total4").innerHTML = result;
}