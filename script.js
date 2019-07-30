const hamWrapperEl = document.querySelector('#ham-wrapper')
const hamContainerEl = document.querySelector('#ham-container')
const hamInsideEl = document.querySelector('.nav-container')
const navEl = document.querySelectorAll('.nav-button')

const hamMenuFunction = () => {
    hamWrapperEl.addEventListener('click', () => {
        hamInsideEl.classList.toggle('show')
        hamContainerEl.classList.toggle('ham-fixed')
        hamContainerEl.children[0].classList.toggle('bar1')
        hamContainerEl.children[1].classList.toggle('bar2')
        hamContainerEl.children[2].classList.toggle('bar3')
    })
}

navEl.forEach((button) => {
    button.addEventListener('click', () => {
        hamInsideEl.classList.remove('show')
        hamContainerEl.classList.remove('ham-fixed')
        hamContainerEl.children[0].classList.remove('bar1')
        hamContainerEl.children[1].classList.remove('bar2')
        hamContainerEl.children[2].classList.remove('bar3')
    })
})

hamMenuFunction()