const selector = ".chat-input__buttons-container > div > div > div > div > div > div > div > div > button";
const handler = function() {
	const el = document.querySelector(selector);
	if (el) el.click();
}

setInterval(handler, 5000);
