
function value(inputText,outputText){
    let depositText = document.getElementById(inputText+'-text');
    let depositTextValue = depositText.value
    let depositAmount = document.getElementById(outputText+'-amount');
    let para = document.getElementById('para');
    if(depositTextValue>0){
        depositAmount.innerText =  depositText.value
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
function balanceWithdraw(exist){
    let existingAmounts = document.getElementById(exist+'-amount');
    let existingAmount = parseFloat(existingAmounts.innerText) ;
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
    value('withdraw', 'withdraw');
    balanceWithdraw('withdraw');
})