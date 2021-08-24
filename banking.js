
function value(inputText,outputText){
    let depositText = document.getElementById(inputText+'-text');
    let depositTextValue = depositText.value
    let depositAmount = document.getElementById(outputText+'-amount');
    let para = document.getElementById('para');
    if(depositTextValue>0){
        depositAmount.innerText = parseFloat(depositText.value) + parseFloat(depositAmount.innerText);
        para.setAttribute('class', 'para');
    }else{
        para.removeAttribute('class');
    }
    depositText.value = '';
}

function balance(exist){
    let existingAmounts = document.getElementById(exist+'-amount');
    let existingAmount = parseFloat(existingAmounts.innerText) ;
    let existingBalances = document.getElementById('balance');
    let existingBalance = parseFloat(existingBalances.innerText);
    
    let totalBalance = existingAmount+existingBalance;
    existingBalances.innerText = totalBalance;
}
function balanceRestriction(){
    let totalbalances = document.getElementById('balance');
    let totalblances2 = parseFloat(totalbalances.innerText)
    let withdrawAmount = document.getElementById('withdraw-text');
    let withdrawAmount2 = parseFloat(withdrawAmount.value );
    if( withdrawAmount2 < totalblances2 && withdrawAmount2>0 ){
        balanceWithdraw();
        value('withdraw','withdraw');
        
        console.log('bigger than 0');
    }else{
        console.log('less than 0');
    }
}
function balanceWithdraw(){
    let existingAmounts = document.getElementById('withdraw-text');
    let existingAmount = parseFloat(existingAmounts.value)  ;
    
    let existingBalances = document.getElementById('balance');
    let existingBalance = parseFloat(existingBalances.innerText);
    
    let totalBalance = existingBalance - existingAmount;
    existingBalances.innerText = totalBalance;
}

document.getElementById('deposit').addEventListener('click', function(){
    value('deposit','deposit');
    balance('deposit');
})

document.getElementById('withdraw').addEventListener('click', function(){
    
    balanceRestriction();
    // let existingAmounts = document.getElementById('withdraw-text');
    // let existingAmount = parseFloat(existingAmounts.value)  ;
    // console.log(existingAmount);
    // value('withdraw', 'withdraw');
})