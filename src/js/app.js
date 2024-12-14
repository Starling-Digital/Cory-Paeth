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

function setSizing() {
	body.style.removeProperty("--header-height")
	body.style.removeProperty("--footer-height")

	const headerHeight = document.querySelector(".page-header").offsetHeight
	const footerHeight = document.querySelector(".page-footer").offsetHeight

	if (headerHeight && body) {
		body.style.setProperty("--header-height", `${headerHeight}px`)
	}
	if (footerHeight && body) {
		body.style.setProperty("--footer-height", `${footerHeight}px`)
	}
}
setSizing()

setTimeout(() => {
	setSizing()
}, 50)

window.addEventListener("resize", () => {
	setSizing()
})

// ====---------------====
// Trigger new section
// ====---------------====
const sectionList = document.querySelectorAll("[data-in-view]")
let currentSection = null

function clearInView() {
	sectionList.forEach(el => {
		el.setAttribute("data-in-view", false)
	})
}

const isElementVisible = ele => {
	const rect = ele.getBoundingClientRect()
	return (
		rect.top <= window.innerHeight / 2 &&
		rect.bottom <= window.innerHeight * 1.5
	)
}
function setActiveSection() {
	sectionList.forEach(section => {
		if (section != currentSection && isElementVisible(section)) {
			currentSection = section
			clearInView()
			section.setAttribute("data-in-view", true)
		}
	})
}

setActiveSection()
document.querySelector("#main-content").addEventListener("scroll", () => {
	setActiveSection()
})

// ====---------------====
// Modal
// ====---------------====
const modalNuts = document.querySelectorAll("[data-toggle='modal']")
if (modalNuts) {
	function closeAllModals() {
		modalNuts.forEach(modalNut => {
			const modalNutModal = document.getElementById(
				modalNut.getAttribute("aria-controls")
			)
			modalNutModal.classList.remove("js-active")
		})
	}
	modalNuts.forEach(modalNut => {
		const modalNutModal = document.getElementById(
			modalNut.getAttribute("aria-controls")
		)

		modalNut.addEventListener("click", e => {
			e.preventDefault()
			closeAllModals()
			modalNutModal.classList.toggle("js-active")
		})

		modalNutModal.querySelector(".close").addEventListener("click", e => {
			e.preventDefault()
			modalNutModal.classList.remove("js-active")
		})
	})
}
