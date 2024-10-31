function validateEmail(email) {
	const isString = typeof (email === "string");
	const includeSnabelA = email.includes("@");
	const includeDot = email.includes(".");
	return isString && includeSnabelA && includeDot;
}
module.exports = { validateEmail };
