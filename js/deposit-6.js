document.getElementById('btn-deposit').addEventListener('click', function(){
const depositField= document.getElementById('deposit-field')
const depositAmount= parseFloat(depositField.value);

const depositTotalElement= document.getElementById('deposit-total');
const depositTotal= parseFloat(depositTotalElement.innerText);
// set 
depositTotalElement.innerText = depositAmount;

});