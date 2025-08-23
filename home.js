// Add Money Feature
document.getElementById('addMoneyBtn').addEventListener('click', function(event){
    event.preventDefault();
    // Sample database values
    const validPin = 2044;

    // Form Values
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const accountNumberInt = parseInt(accountNumber);
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = document.getElementById('add-pin').value;
    const addPinInt = parseInt(addPin);
    const bankBalance = parseInt(document.getElementById('bank-balance').innerText);

    // Validations
    if(accountNumber.length < 11 || accountNumber.length > 11){
        alert('Please provide a valid Account Number.');
        return;
    }
    if(addPin.length < 4 || addPin.length > 4){
        alert('Please provide a valid PIN.');
        return;
    }
    if(addPinInt !== validPin){
        alert('Please provide a valid PIN.');
        return;
    }
    if(isNaN(addAmount)){
        alert('Please provide a valid Amount to Add.');
        return;
    }


    const totalBankBalance = bankBalance + addAmount;
    document.getElementById('bank-balance').innerText = totalBankBalance;

})

// Cashout feature
document.getElementById('withdrawMoneyBtn').addEventListener('click', function(event){
    event.preventDefault();
    const validPin = 2044;

    // Form Values
    const agentNumber = document.getElementById('cashout-agent-number').value;
    const agentNumberInt = parseInt(agentNumber);
    const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
    const cashoutPin = document.getElementById('cashout-pin').value;
    const cashoutPinInt = parseInt(cashoutPin);
    const bankBalance = parseInt(document.getElementById('bank-balance').innerText);

    
    const totalBankBalance = bankBalance - cashoutAmount;
    document.getElementById('bank-balance').innerText = totalBankBalance;
    console.log(agentNumberInt, cashoutAmount, cashoutPinInt, bankBalance, totalBankBalance);
});

// Toggling Feature

document.getElementById('add-money-card').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
});
document.getElementById('cashout-card').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
});
document.getElementById('transfer-money-card').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'block';
});
document.getElementById('get-bonus-card').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'block';
});
document.getElementById('pay-bill-card').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'block';
});
document.getElementById('transaction-card').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'block';
});