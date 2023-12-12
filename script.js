// defining constants and attaching them to html elements
const cardName = document.querySelector("#cardholder-name");
const cardNumber = document.querySelector("#card-number");
const expMonth = document.querySelector("#exp-month");
const expYear = document.querySelector("#exp-year");
const cvc = document.querySelector("#cvc");

document.getElementById("completed").style.display = "none";

let validCardName = () => {
	for (let i = 0; i < cardName.value.length; i++) {
		const charCode = cardName.value.charCodeAt(i);
		if (
			!(charCode > 64 && charCode < 91) &&
			!(charCode > 96 && charCode < 123) &&
			!(charCode === 32)
		) {
			return false;
		}
	}
	return true;
};

let handleCardNameInput = (e) => {
	const value = e.target.value;

	const pattern = /^[A-Za-z\s'-]+$/;

	if (!pattern.test(value) && value !== "") {
		e.target.value = value.slice(0, -1);
	}
};

let validCardNumber = () => {
	const rawCardNumber = cardNumber.value.replace(/\s+/g, "");
	const isNumeric = /^\d+$/.test(rawCardNumber);

	const formattedCardNumber = rawCardNumber.match(/.{1,4}/g)?.join(" ") ?? "";
	// using the null coalescing operator to return an empty string if no value exists

	if (cardNumber.value !== formattedCardNumber) {
		cardNumber.value = formattedCardNumber;
	}

	const isValidLength = rawCardNumber.length === 16;

	return isNumeric && isValidLength;
};

let handleCardNumberInput = (e) => {
	const value = e.target.value.replace(/\s+/g, "");
	// Allow backspace, delete, tab, escape, and other non-character keys
	const specialKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter"];

	// If the key is a special key, control key, or navigation key, don't block it
	if (
		specialKeys.includes(e.key) ||
		e.ctrlKey ||
		e.metaKey ||
		e.key === "ArrowLeft" ||
		e.key === "ArrowRight" ||
		e.key === "Home" ||
		e.key === "End"
	) {
		return;
	}

	if (e.key < "0" || e.key > "9" || value.length >= 16) {
		e.preventDefault();
	}
};

let validExpMonth = () => {
	const month = parseInt(expMonth.value, 10);
	return month >= 1 && month <= 12;
};

let handleExpMonthInput = (e) => {
	const specialKeys = [
		"Backspace",
		"Delete",
		"Tab",
		"Escape",
		"Enter",
		"ArrowLeft",
		"ArrowRight",
		"Home",
		"End",
	];

	if (
		specialKeys.includes(e.key) ||
		e.ctrlKey ||
		e.metaKey ||
		e.key === "ArrowLeft" ||
		e.key === "ArrowRight" ||
		e.key === "Home" ||
		e.key === "End"
	) {
		return;
	}

	let currentValue = e.target.value.replace(/\s+/g, "");
	let simulatedValue = currentValue + e.key;

	let monthNumber = parseInt(simulatedValue, 10);

	if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
		e.preventDefault();
	}

	if (currentValue.length >= 2) {
		e.preventDefault();
	}
};

expMonth.addEventListener("keydown", handleExpMonthInput);

let validExpYear = () => {
	const currentYear = new Date().getFullYear();
	const year = parseInt(expYear.value, 10);
	return year >= currentYear;
};

let handleExpYearInput = (e) => {
	const specialKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter"];

	if (
		specialKeys.includes(e.key) ||
		e.ctrlKey ||
		e.metaKey ||
		e.key === "ArrowLeft" ||
		e.key === "ArrowRight" ||
		e.key === "Home" ||
		e.key === "End"
	) {
		return;
	}

	const value = e.target.value.replace(/\s+/g, "");
	if (e.key < "0" || e.key > "9" || value.length >= 4) {
		e.preventDefault();
	}
};

let validCVC = () => {
	const cvcValue = cvc.value;
	const isNumeric = /^\d+$/.test(cvcValue);
	return isNumeric && (cvcValue.length === 3 || cvcValue.length === 4);
};

let handleCVCInput = (e) => {
	const specialKeys = [
		"Backspace",
		"Delete",
		"Tab",
		"Escape",
		"Enter",
		"ArrowLeft",
		"ArrowRight",
		"Home",
		"End",
	];

	if (
		specialKeys.includes(e.key) ||
		e.ctrlKey ||
		e.metaKey ||
		e.key === "ArrowLeft" ||
		e.key === "ArrowRight" ||
		e.key === "Home" ||
		e.key === "End"
	) {
		return;
	}
	// Get current value and simulate the result after the keypress
	let currentValue = e.target.value;
	let simulatedValue = currentValue + e.key;

	// Check if the simulated value is a number and within the length limit
	if (!/^\d*$/.test(simulatedValue) || simulatedValue.length > 4) {
		e.preventDefault();
	}
};

function applyErrorStyles(inputElement, errorElementId) {
	const errorElement = document.getElementById(errorElementId);
	if (inputElement.value.trim() === "") {
		inputElement.classList.add("error-border");
		errorElement.style.display = "block";
	} else {
		inputElement.classList.remove("error-border");
		errorElement.style.display = "none";
	}
}

function applyErrorStylesForDate(
	expMonthElement,
	expYearElement,
	errorElementId
) {
	const errorElement = document.getElementById(errorElementId);
	if (
		expMonthElement.value.trim() === "" &&
		expYearElement.value.trim() === ""
	) {
		expMonthElement.classList.add("error-border");
		expYearElement.classList.add("error-border");
		errorElement.style.display = "block";
	} else if (expMonthElement.value.trim() === "") {
		expMonthElement.classList.add("error-border");
		expYearElement.classList.remove("error-border");
		errorElement.style.display = "block";
	} else if (expYearElement.value.trim() === "") {
		expYearElement.classList.add("error-border");
		expMonthElement.classList.remove("error-border");
		errorElement.style.display = "block";
	} else {
		expMonthElement.classList.remove("error-border");
		expYearElement.classList.remove("error-border");
		errorElement.style.display = "none";
	}
}

// using vanilla libraries for card tilt
VanillaTilt.init(document.querySelector("#front-card"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 0.5,
});

VanillaTilt.init(document.querySelector("#back-card"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 0.5,
});

// adding event listeners
cardName.addEventListener("input", validCardName);
cardNumber.addEventListener("input", validCardNumber);
cardNumber.addEventListener("keydown", handleCardNumberInput);
cardName.addEventListener("input", handleCardNameInput);
expMonth.addEventListener("input", validExpMonth);
expMonth.addEventListener("keydown", handleExpMonthInput);
expYear.addEventListener("input", validExpYear);
expYear.addEventListener("keydown", handleExpYearInput);
cvc.addEventListener("input", validCVC);
cvc.addEventListener("keydown", handleCVCInput);

// Event listener for form submission
document.getElementById("form").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent the default form submission

	// Check each input and apply error styles if necessary
	const isCardNameValid = validCardName();
	const isCardNumberValid = validCardNumber();
	const isExpMonthValid = validExpMonth();
	const isExpYearValid = validExpYear();
	const isCVCValid = validCVC();

	// printing if all true for debugging
	// console.log(
	// 	isCardNameValid,
	// 	isCardNumberValid,
	// 	isExpMonthValid,
	// 	isExpYearValid,
	// 	isCVCValid
	// );

	// Apply error styles based on validation
	applyErrorStyles(cardName, "cardholder-name-error");
	applyErrorStyles(cardNumber, "card-number-error");
	applyErrorStylesForDate(expMonth, expYear, "exp-date-error");
	applyErrorStyles(cvc, "cvc-error");

	// Check if all inputs are valid
	if (
		isCardNameValid &&
		isCardNumberValid &&
		isExpMonthValid &&
		isExpYearValid &&
		isCVCValid
	) {
		// Hide the form and show the completed message
		document.getElementById("form-section").style.display = "none";
		document.getElementById("completed").style.display = "flex";
	}
});
