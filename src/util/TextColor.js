export function getTextColorBasedOnContrast(hexColor) {
	if (!hexColor) return;
	// Convert hex to RGB
	const r = parseInt(hexColor.slice(1, 3), 16);
	const g = parseInt(hexColor.slice(3, 5), 16);
	const b = parseInt(hexColor.slice(5, 7), 16);

	// Calculate luminance
	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	// Return black for light backgrounds and white for dark backgrounds
	return luminance > 128 ? "black" : "white";
}
