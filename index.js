// Login button functionality
document
  .getElementById("loginButton")
  .addEventListener("click", function(event) {
    event.preventDefault();
    const mobileNumber = 0470365288;
    const pinNumber = 2044;
    const mobileNumberValue = parseInt(document.getElementById("mobile-number").value);
    const pinNumberValue = parseInt(document.getElementById("pin-number").value);
    if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
      localStorage.setItem("isLoggedIn", "true");  
      window.location.href='./home.html';
    }
    else {
        alert("Invalid login credentials");
    }
  });
