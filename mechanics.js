/**
* Animates form field labels to act as placeholders when a form
* is considered blank, unselected, or empty
*/
const animatedFormFieldClass = "ls-form-input";
let registerAnimatedField; // Will be defined as a function
(() => {

	/**
	* Determines if an input field is "empty"
	* Works on select/input/textarea
	* @param {DOMNode} field
	* @return {bool}
	*/
	function isInputEmpty(field){
		const lowerTagName = field.tagName.toLowerCase();
		if (lowerTagName === "input" || lowerTagName === "textarea"){
			// I actually want spaces to count as not empty
			console.log(field.value);
			console.log(field.value.length);
			return field.value === "";
		}else if (lowerTagName === "select"){
			return field.value === "-1" || field.value === "";
		}

		return true;
	}

	registerAnimatedField = (divContainer) => {

		let validInputElement;

		// Try to find an acceptable input field as a direct child
		validInputElement = divContainer.querySelector(":scope > input");

		if (validInputElement === null){
			validInputElement = divContainer.querySelector(":scope > textarea");
		}

		if (validInputElement === null){
			validInputElement = divContainer.querySelector(":scope > select");
		}

		if (validInputElement === null){
			throw "Cannot register element as animated input field. No acceptable input is a direct child of the container";
		}

		// Check registered field initially
		if (!isInputEmpty(validInputElement)){
			if (!divContainer.classList.contains("non-empty")){
				divContainer.classList.add("non-empty");
			}
		}

		validInputElement.addEventListener("change", () => {
			console.log("Change");
			if (!isInputEmpty(validInputElement)){
				console.log("Not empty");
				if (!divContainer.classList.contains("non-empty")){
					divContainer.classList.add("non-empty");
				}
			}else{
				// Does the class need to be removed?
				console.log("Is empty");
				if (divContainer.classList.contains("non-empty")){
					divContainer.classList.remove("non-empty");
				}
			}
		});
	}

	for (let container of document.querySelectorAll(`.${animatedFormFieldClass}`)){
		registerAnimatedField(container);
	}

})();

export default registerAnimatedField;
