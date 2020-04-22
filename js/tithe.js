'use strict'
function calculateTithe() {

    var userProfit = document.getElementById('profit').value;

    var totalTithe = ( userProfit * 10 ) / 100;

if (userProfit !=="") {
    
     document.getElementById('result').style.display = "block";
     
    var titheToPay = document.getElementById('result').innerHTML = 'Your Tithe is '+totalTithe+'<del>N</del>';

}
    else {
        
    document.getElementById('result').style.display = "none";
} 



}
