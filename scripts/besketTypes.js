const sizeContainer = document.querySelector('.sizes-container')
const typeTwobutton = document.getElementById('typeButton-two')
const typeOnebutton = document.getElementById('typeButton-one')
const typeInfos = [
    {
        area: '117,94',
        terrace: '16,80'
    },

    {
        area: '121,27',
        terrace: '27,90'
    }
]

function changeType (area, terrace) {
    sizeContainer.innerHTML = `
        <p class="info__text"> - Площа ${area} м2</p>
        <p class="info__text"> - Тераса – ${terrace} м2</p>
    `

}

typeTwobutton.addEventListener('click', () => {
    if (!typeTwobutton.classList.contains('.type__button--active')) {
        changeType(typeInfos[1].area, typeInfos[1].terrace)
        typeTwobutton.classList.add('type__button--active')
        typeOnebutton.classList.remove('type__button--active')
    }
})

typeOnebutton.addEventListener('click', () => {
    if (!typeOnebutton.classList.contains('.type__button--active')) {
        changeType(typeInfos[0].area, typeInfos[0].terrace)
        typeOnebutton.classList.add('type__button--active')
        typeTwobutton.classList.remove('type__button--active')
    }
})

