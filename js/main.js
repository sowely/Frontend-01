// scroll to UP to DOWN
const btnUp = document.querySelector('.footer__btn-up')
const btnDown = document.querySelector('.btn-down')
const blockPrice = document.getElementById('price')
// console.log(blockPrice)
let scrolled
let timer

btnUp.addEventListener('click', () => {
	// window.scrollTo(0,0)
	scrolled = window.pageYOffset
	scrollUp()
})

btnDown.addEventListener('click', () => {
	blockPrice.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

function scrollUp() {
	if (scrolled > 0) {
		window.scrollTo(0, scrolled)
		scrolled = scrolled - 100
		timer = setTimeout(scrollUp, 10)
	}
	else {
		clearTimeout(timer)
		window.scrollTo(0, 0)
	}
}


// price toggle month/year checked
const btnMonth = document.querySelector('.info__btn-month')
const btnYear = document.querySelector('.info__btn-year')
const priceMonthYear = document.querySelector('.card__price')
// console.log(priceMonthYear)
btnMonth.addEventListener('click', priceToggle)
btnYear.addEventListener('click', priceToggle)

function priceToggle(e) {
	target = e.target;
	// console.log(target)
	if (target.classList.contains('checked') === false) {
		if (target === btnYear) {
			target.classList.add('checked')
			btnMonth.classList.remove('checked')
			// priceMonthYear.innerHTML = 'asda123'
		}
		else {
			target.classList.add('checked')
			btnYear.classList.remove('checked')
		}
	}
}

// subscribe
const emailSub = document.querySelector('.subscribe__input-btn')
const emailInput = document.querySelector('.subscribe__input')

emailSub.addEventListener('click', (e) => {
	e.preventDefault()
	if (validateEmail(emailInput.value)) {
		emailInput.value = ''
	} else {
		alert('wrong email')
	}
})
function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}