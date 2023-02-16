document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField= document.getElementById('withdraw-field');
   const newWithdrawAmount= parseFloat(withdrawField.value);
//    clear withdrawField
withdrawField.value= '';
   

  const withdrawElement= document.getElementById('withdrw-total');
  const previousWithdrawAmount= parseFloat(withdrawElement.innerText);
//   calculation newWithdrawAmount + previousWithdrawAmount then set up 
const currentWithdrawTotal= newWithdrawAmount + previousWithdrawAmount;
withdrawElement.innerText= currentWithdrawTotal;


})