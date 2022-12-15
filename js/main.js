const link = document.querySelector('.link');
const elForm = document.querySelector('#form');
const h1 = document.querySelector('h1')
const img = document.querySelector('.img')
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    link.style.opacity = '0.5'
    const ism = elForm['user-name'].value
    const boy = elForm['user-height'].value / 100
    const vazn = elForm['user-weight'].value
    const bmi = vazn / (boy ** 2)
    if (0 < bmi && bmi < 18) {
        h1.textContent = `${ism}: Siz ancha ozg'insiz semirishga harakat qiling 🙏`;
        elForm.innerHTML = `<img src="../img/ozg'in.png" alt="iltimos meni tanlang">`
    } else if (18.5 <= bmi && 24.9 >= bmi) {
        h1.textContent = `${ism}: Sizning holaringiz ajoyib 💪`
        elForm.innerHTML = `<img src="../img/norm.png" alt="norm people">`
    } else if (25 <= bmi && bmi <= 29.9) {
        h1.textContent = `${ism}: Siz ortiqcha vazinga egasiz 😥`
        elForm.innerHTML = `<img src="../img/overweight.png" alt="norm people">`
    } else if (30 <= bmi && bmi <= 10 ** 10000) {
        h1.textContent = `${ism}: Siz semirib ketibsiz 😱`
        elForm.innerHTML = `<img src="../img/semiz.png" alt="norm people">`
    } else {
        h1.textContent = `Iltimos ma'lumot olmoqchi bo'lsangiz formani to'ldiring 🔙`
    }
    // elForm.remove()
})