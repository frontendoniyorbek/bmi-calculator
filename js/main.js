const link = document.querySelector('.link');
const elForm = document.querySelector('#form');
const h1 = document.querySelector('h1')
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    link.style.opacity = '0.5'
    const ism = elForm['user-name'].value
    const boy = elForm['user-height'].value / 100
    const vazn = elForm['user-weight'].value
    const bmi = vazn / (boy ** 2)
    if (0 < bmi && bmi < 18) {
        h1.textContent = `${ism}: Siz ancha ozg'insiz semirishga harakat qiling 🙏`;
    } else if (18.5 <= bmi && 24.9 >= bmi) {
        h1.textContent = `${ism}: Sizning holaringiz ajoyib 💪`
    } else if (25 <= bmi && bmi <= 29.9) {
        h1.textContent = `${ism}: Siz ortiqcha vazinga egasiz 😥`
    } else if (30 <= bmi && bmi <= 10 ** 10000) {
        h1.textContent = `${ism}: Siz semirib ketibsiz 😱`
    } else {
        h1.textContent = `Iltimos ma'lumot olmoqchi bo'lsangiz formani to'ldiring 🔙`
    }
    elForm.remove()
})