
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	const billAmount = document.getElementById("bill_amount").value;
	const tipPercentage = document.getElementById("tip_percentage").value;

	const tipAmount = document.getElementById("tip_amount").value = billAmount * (tipPercentage / 100); 
	document.getElementById("total_bill").value = parseFloat(billAmount) + parseFloat(tipAmount); 


});  