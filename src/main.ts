import './assets/scss/style.scss'

export { }
const search = document.querySelector('#search') as HTMLSpanElement
const searchWrap = document.querySelector('#searchWrap') as HTMLDivElement
const menu = document.querySelector('#menu') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement
const menuClose = document.querySelector('#menuClose') as HTMLSpanElement

let menuEl = false

menu.addEventListener('click', () => {
	if (!menuEl) {
		menuWrap.classList.add('show')
		menuEl = true
	}
})

menuClose.addEventListener('click', () => {
	if (menuEl) {
		menuWrap.classList.remove('show')
		menuEl = false
	}
})

let searchEl = false

search.addEventListener('click', () => {
	if (!searchEl) {
		searchWrap.classList.add('show')
		searchEl = true
	} else {
		searchWrap.classList.remove('show')
		searchEl = false
	}
})

const main = 	document.querySelector('#main') as HTMLBodyElement
const reportLink = document.querySelector('#reportLink') as HTMLDivElement
const start = document.querySelector('#start') as HTMLDivElement
const startReport = document.querySelector('#startReport') as HTMLDivElement
const startReportWrap = document.querySelector('#startReport__wrap') as HTMLDivElement
const info = document.querySelector('#info') as HTMLDivElement
const report = document.querySelector('#report') as HTMLDivElement
const user = document.querySelector('#user') as HTMLDivElement
const done = document.querySelector('#done') as HTMLDivElement
const firstNext = document.querySelector('#firstNext') as HTMLDivElement
const secondNext = document.querySelector('#secondNext') as HTMLDivElement
const reportForm = document.querySelector('#reportForm') as HTMLFormElement
const exit = document.querySelector('#exit') as HTMLFormElement
const firstReturn = document.querySelector('#firstReturn') as HTMLDivElement
const secondReturn = document.querySelector('#secondReturn') as HTMLDivElement
const thirdReturn = document.querySelector('#thirdReturn') as HTMLDivElement
const navItems = document.querySelector('#navItems') as HTMLDivElement

reportLink.addEventListener('click', () => {
	start.classList.add('hide')
	startReport.classList.remove('hide')
})

startReportWrap.addEventListener('click', () => {
	startReport.classList.add('hide')
	searchWrap.classList.add('hide')
	menuWrap.classList.add('hide')
	info.classList.remove('hide')
	main.classList.add('size')
	navItems.classList.add('hide')
})

firstNext.addEventListener('click', () => {
	info.classList.add('hide')
	report.classList.remove('hide')
})

secondNext.addEventListener('click', () => {
	report.classList.add('hide')
	user.classList.remove('hide')
})

reportForm.addEventListener('submit', (e) => {
	e.preventDefault()
	user.classList.add('hide')
	done.classList.remove('hide')
})

exit.addEventListener('click', () => {
	done.classList.add('hide')
	searchWrap.classList.remove('hide')
	menuWrap.classList.remove('hide')
	start.classList.remove('hide')
	navItems.classList.remove('hide')
})

firstReturn.addEventListener('click', () => {
	info.classList.add('hide')
	startReport.classList.remove('hide')
	searchWrap.classList.remove('hide')
	menuWrap.classList.remove('hide')
	navItems.classList.remove('hide')
})

secondReturn.addEventListener('click', () => {
	info.classList.remove('hide')
	report.classList.add('hide')
})

thirdReturn.addEventListener('click', () => {
	report.classList.remove('hide')
	user.classList.add('hide')
})