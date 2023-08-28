// Mutation observer to wait for element to exist
export default function waitForElement(selector: any, fn: any) {
	if (document.querySelector(selector)) {
		fn(document.querySelector(selector));
	}
	const observer = new MutationObserver(() => {
		if (document.querySelector(selector)) {
			fn(document.querySelector(selector));
		}
	});
	observer.observe(document.body, {
		childList: true,
		subtree: true
	});
}
