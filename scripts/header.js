const header = document.querySelector('.header')
const menu = document.querySelector('.burger__menu')
const menuIcon = document.querySelector('.menuIcon')
const closeIcon = document.querySelector('.closeIcon')
const hamburger = document.querySelector('.humburger')
const contact = document.querySelector('.contacts__button')
const modal = document.querySelector('.modal')


function toggleMenu () {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu')
        closeIcon.style.display = 'none'
        menuIcon.style.display = 'block'
        header.style.background = 'none'
        document.body.style.overflow = 'auto'
    } else {
        menu.classList.add('showMenu')
        closeIcon.style.display = 'block'
        menuIcon.style.display = 'none'
        header.style.background = '#181E1A'
        document.body.style.overflow = 'hidden'
    }
}
hamburger.addEventListener('click', toggleMenu)

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        header.style.background = '#181E1A'
    } else {
        header.style.background = 'none'
    }
});

function showModal () {
    modal.innerHTML = `
        <div class="modal__container">
                    
            <div class="modal__close">
                <svg class="modal__close-icon">
                    <use xlink:href="assets/icons/sprite.svg#close"></use>
                </svg>
            </div>


            <h2 class="modal__title">Замовити індивідуальну консультацію</h2>
            <form class="modal__actions">
                <input class="modal__actions-action form-input" id="modal-input" type="tel" name="phone" maxlength="13" placeholder="Номер телефону" required>
                <button class="modal__actions-action main-button" id="send-modal">Відправити</button>
            </form>
        </div>
    `
    const closeModal = document.querySelector('.modal__close-icon')
    const sendModalButton = document.getElementById('send-modal')
    closeModal.addEventListener('click', () => {
        document.body.style.overflow = 'auto' 
        modal.classList.remove('modal--active')
    })


    sendModalButton.addEventListener('click', () => {
        const inputPhone = document.getElementById('modal-input').value
        
        let templateParams = {
            phone: inputPhone,
            email: '',
            name: 'user'
        };

        // emailjs.send('service_5qtaya8','contact_form', templateParams)
	    // .then(function(response) {
	    //     console.log('SUCCESS!', response.status, response.text);
	    // }, function(err) {
	    //     console.log('FAILED...', err);
	    // });

        modal.innerHTML = `
        <div class="modal__container">
                    
            <div class="modal__close">
                <svg class="modal__close-icon">
                    <use xlink:href="assets/icons/sprite.svg#close"></use>
                </svg>
            </div>


            <h2 class="modal__title">Замовити індивідуальну консультацію</h2>
            <form class="modal__actions">
                <button class="modal__actions-action main-button" id="submit-modal">Добре</button>
            </form>
        </div> `
        const closeModal = document.querySelector('.modal__close-icon')
        const submitModal = document.getElementById('submit-modal')
        closeModal.addEventListener('click', () => {
            document.body.style.overflow = 'auto' 
            modal.classList.remove('modal--active')
        })
        submitModal.addEventListener('click', () => {
            document.body.style.overflow = 'auto' 
            modal.classList.remove('modal--active')
        })

    })

    if (!modal.classList.contains('modal--active')){
        modal.classList.add('modal--active')
        document.body.style.overflow = 'hidden'
    } else {return 0}
    

}
contact.addEventListener('click', () => {
    showModal()
})


const burgerLink = document.querySelectorAll('.burger-link')
burgerLink.forEach(elem => {
    elem.addEventListener('click', () => {
        menu.classList.remove('showMenu')
        document.body.style.overflow = 'auto'
        menuIcon.style.display = 'block'
        closeIcon.style.display = 'none'
    })
})