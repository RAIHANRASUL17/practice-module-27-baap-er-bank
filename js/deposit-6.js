document.getElementById('btn-deposit').addEventListener('click', function(){
const depositField= document.getElementById('deposit-field')
const newDepositAmount= parseFloat(depositField.value);

const depositTotalElement= document.getElementById('deposit-total');
const previousDepositTotal= parseFloat(depositTotalElement.innerText);
// calculate newDeposit + previousDeposit then set up
const currentDepositTotal=newDepositAmount + previousDepositTotal;
// set
// depositTotalElement.innerText = newDepositAmount;
depositTotalElement.innerText = currentDepositTotal;

// clear depositField
depositField.value= '';

});