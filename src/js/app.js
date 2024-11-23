// ---------------------------------------------
// ======---------------------------------======
// App.js
// ======---------------------------------======
// ---------------------------------------------

// ====---------------====
// Globals vars
// ====---------------====
const body = document.querySelector("body")
const windowWidth = window.innerWidth

// ====---------------====
// Global functions
// ====---------------====

// ===------ Convert rems to px ------===
function remToPx(rem) {
	const remSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	)
	const remClean = parseInt(rem.replace("rem", ""))

	return remClean * remSize
}

// ===------ Get computed prop value ------===
function getCompProp(compProp) {
	return getComputedStyle(body).getPropertyValue(compProp)
}

// ====---------------====
// Set header height
// ====---------------====
const headerHeight = document.querySelector("#page-header").offsetHeight
if (headerHeight && body) {
	body.style.setProperty("--header-height", `${headerHeight}px`)
}
