const slides = document.querySelectorAll('.slide')
const container = document.getElementsByClassName('container')


for (let i = 0; i <slides.length; i++) {
    let  el = slides[i]
    el.addEventListener('click', () => {
        removeClasses()
        el.classList.add('active')
    })
}

function removeClasses() {
    slides.forEach((el) => {
        el.classList.remove('active')
    })
}



