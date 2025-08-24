// Protect the page
    if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "index.html"; // kick back if not logged in
    }
// Logout
document.getElementById("logoutBtn").addEventListener("click", function() {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "./index.html";
});

// Sample database values
const validPin = 2044;
const transactionData = [];

// Function to get input values
function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}
function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}
// Function to get innerText
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// function to toggle
function handleToggle(id, className) {
  const forms = document.getElementsByClassName(className);
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// function to toggle buttons
function handleButtonEffect(id, className) {
  const formButtons = document.getElementsByClassName(className);
  for (const formButton of formButtons) {
    formButton.classList.remove("border-[#0874F2]", "bg-[#0874F2]/5");
    formButton.classList.add("border-[#080808]/10");
  }
  document.getElementById(id).classList.remove("border-[#080808]/10");
  document
    .getElementById(id)
    .classList.add("border-1", "border-[#0874F2]", "bg-[#0874F2]/5");
}

// Add Money Feature
document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Form Values
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const accountNumberInt = getInputValueNumber("account-number");
    const addAmount = getInputValueNumber("add-amount");
    const addPin = getInputValue("add-pin");
    const addPinInt = getInputValueNumber("add-pin");
    const bankBalance = parseInt(getInnerText("bank-balance"));

    // Validations
    // if (accountNumber.length < 11 || accountNumber.length > 11) {
    //   alert("Please provide a valid Account Number.");
    //   return;
    // }
    if (addPin.length < 4 || addPin.length > 4) {
      alert("Please provide a valid PIN.");
      return;
    }
    if (addPinInt !== validPin) {
      alert("Please provide a valid PIN.");
      return;
    }
    if (isNaN(addAmount) || addAmount<=0) {
      alert("Please provide a valid Amount to Add.");
      return;
    }

    const totalBankBalance = bankBalance + addAmount;
    setInnerText("bank-balance", totalBankBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);

    // clean the form
    // document.getElementById('bank').value = '';
    // document.getElementById('account-number').value = '';
    // document.getElementById("add-amount").value = "";
    // document.getElementById('add-pin').value = '';
  });

// Cashout feature
document
  .getElementById("withdrawMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Form Values
    const agentNumber = getInputValue("cashout-agent-number");
    const agentNumberInt = getInputValueNumber("cashout-agent-number");
    const cashoutAmount = getInputValueNumber("cashout-amount");
    const cashoutPin = getInputValue("cashout-pin");
    const cashoutPinInt = getInputValueNumber("cashout-pin");
    const bankBalance = parseInt(getInnerText("bank-balance"));

    if (cashoutAmount<=0 || cashoutAmount>bankBalance) {
      alert("Please provide a valid Amount to Add.");
      return;
    }
    const totalBankBalance = bankBalance - cashoutAmount;
    setInnerText("bank-balance", totalBankBalance);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// Transactions Tracking
document.getElementById("transaction-card").addEventListener("click", function () {
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';
    
    console.log(transactionData);
    for (const data of transactionData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card1 bg-white p-6 rounded-[24px] mx-6 border-1 border-[#080808]/10 flex flex-row justify-between items-center">
                <div class="flex flex-row justify-between items-center gap-3">
                    <div class="relative h-[45.5px] w-[45.5px]">
                    <div class="bg-[#080808]/5 w-full h-full rounded-full"></div>
                    <img src="./assets/wallet1.png" alt="wallet" class="absolute inset-0 m-auto"/>
                </div>
                <div>
                <p class="outfit-font font-semibold text-[16px] text-[#080808]/70">
                    ${data.name}
                </p>
                <p class="outfit-font text-[16px] text-[#080808]/70">
                    ${data.date}
                </p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical text-[#080808]/70 cursor-pointer"></i>
            </div>
        `
        transactionContainer.appendChild(div);
    }
    
});
// Toggling Feature

// display "latest-payment-section"
document.getElementById("logo").addEventListener("click", function () {
  handleToggle("latest-payment-section", "form");
  // Remove hover effect from all the cards
  const formButtons = document.getElementsByClassName("form-btn");
  for (const formButton of formButtons) {
    formButton.classList.remove("border-[#0874F2]", "bg-[#0874F2]/5");
    formButton.classList.add("border-[#080808]/10");
  }
});

// display "add-money-section"
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    handleToggle("add-money-section", "form");
    handleButtonEffect("add-money-card", "form-btn");
  });

// display "cashout-section"
document.getElementById("cashout-card").addEventListener("click", function () {
  handleToggle("cashout-section", "form");
  handleButtonEffect("cashout-card", "form-btn");
});

// display "transfer-money-section"
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function () {
    handleToggle("transfer-money-section", "form");
    handleButtonEffect("transfer-money-card", "form-btn");
  });

// display "get-bonus-section"
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function () {
    handleToggle("get-bonus-section", "form");
    handleButtonEffect("get-bonus-card", "form-btn");
  });

// display "pay-bill-section"
document.getElementById("pay-bill-card").addEventListener("click", function () {
  handleToggle("pay-bill-section", "form");
  handleButtonEffect("pay-bill-card", "form-btn");
});

// display "transaction-section"
document
  .getElementById("transaction-card")
  .addEventListener("click", function () {
    handleToggle("transaction-section", "form");
    handleButtonEffect("transaction-card", "form-btn");
  });
