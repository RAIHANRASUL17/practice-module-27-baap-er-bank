document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField= document.getElementById('withdraw-field');
    const newWithdrawAmount= parseFloat(withdrawField.value);
 //    clear withdrawField
 withdrawField.value= '';
    /*------------------Validation Part-2 Start----------------------*/
    if(isNaN(newWithdrawAmount)){
      alert('please put number value');
      return;
    }
    /*------------------Validation Part-2 End----------------------*/
 
 
   const withdrawElement= document.getElementById('withdrw-total');
   const previousWithdrawAmount= parseFloat(withdrawElement.innerText);

 //   calculation newWithdrawAmount + previousWithdrawAmount then set up 
/* for validation jus put under the if conditon from here
 const currentWithdrawTotal= newWithdrawAmount + previousWithdrawAmount;
 withdrawElement.innerText= currentWithdrawTotal;
 
**/  

 
 /*witdraw With Balance Section*/
 const balanceTotalElement= document.getElementById('balance-total');
 const previouBalanceTotal= parseFloat(balanceTotalElement.innerText);

/*------------------Validation Part-1 Start----------------------*/
if(newWithdrawAmount > previouBalanceTotal){
  alert('Don t have have enough money in your Balance');
  return;
}

const currentWithdrawTotal= newWithdrawAmount + previousWithdrawAmount;
withdrawElement.innerText= currentWithdrawTotal;

/*------------------Validation Part-1 End  ----------------------*/ 


 // calculation previousBalanceTotal - newWithdrawAmount then set up
 const currentBalanceTotal= previouBalanceTotal - newWithdrawAmount;
 // set up
 balanceTotalElement.innerText= currentBalanceTotal;
 })