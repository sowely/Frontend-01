// scroll to UP to DOWN
const btnUp = document.querySelector('.footer__btn-up')
const btnDown = document.querySelector('.btn-down')
const header = document.querySelector('.header')
const blockPrice = document.getElementById('price')

btnUp.addEventListener('click', (e) => {
	e.preventDefault();
	header.scrollIntoView({ behavior: 'smooth' });
})

btnDown.addEventListener('click', (e) => {
	e.preventDefault();
	blockPrice.scrollIntoView({ behavior: 'smooth' }); //, block: 'center'
})


// price toggle month/year checked
const btnMonth = document.querySelector('.info__btn-month')
const btnYear = document.querySelector('.info__btn-year')
const priceMonthYear = document.querySelectorAll('.card__price span')

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
			priceMonthYear.forEach(el => {
				el.innerHTML = (el.innerHTML * 12).toFixed(2);
			});
		}
		else {
			target.classList.add('checked')
			btnYear.classList.remove('checked')
			priceMonthYear.forEach(el => {
				el.innerHTML = (el.innerHTML / 12).toFixed(2);
			});
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

//slider
const reviewCards = document.querySelectorAll('.review__card')
const pagination = document.querySelector('.pagination')
const paginationItem = `<li class="pagination__item">
<a class="pagination__link" href="#"></a>
</li>`

for (i = 0; i < reviewCards.length; i++) {
	pagination.insertAdjacentHTML('beforeend', paginationItem)
}
const paginationActive = document.querySelector('.pagination__item')
paginationActive.classList.add('pagination-active')


//menu
const menuBtn = document.querySelector('.menu__btn')
const menuItems = document.querySelectorAll('.menu__item')

menuBtn.insertAdjacentHTML('afterend', `<div class="side__menu"></div>`)
const sideMenu = document.querySelector('.side__menu')

menuItems.forEach((el) => {
	// console.log(el.innerText)
	sideMenu.insertAdjacentHTML('beforeend',
		`
	<a class="side__item" href="#">${el.innerText}</a>
	`)

})

menuBtn.addEventListener('click', (e) => {
	e.preventDefault()
	menuBtn.classList.toggle('menu__btn-active')
	sideMenu.classList.toggle('side__menu-active')
})