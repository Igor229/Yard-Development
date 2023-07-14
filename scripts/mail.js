const beskedSendButton = document.getElementById('besked-button')
const westTownSendButton = document.getElementById('west-button')

function sendData (type) {
    const inputPhone = document.querySelectorAll('.input-phone')
    const inputEmail = document.querySelectorAll('.input-email')
    if (type === 'besked'){
        type = 0
    } else if (type === 'west'){
        type = 1
    }


    let templateParams = {
        phone: inputPhone[type].value,
        email: inputEmail[type].value,
        name: 'user'
    };

    document.querySelector('.input-phone').value = ''
    document.querySelector('.input-email').value = ''

    // emailjs.send('service_5qtaya8','contact_form', templateParams)
	// .then(function(response) {
	//    console.log('SUCCESS!', response.status, response.text);
    //    console.log(templateParams);
	// }, function(err) {
	//    console.log('FAILED...', err);
	// });
}

beskedSendButton.addEventListener('click', () => {   
    sendData('besked')
})

westTownSendButton.addEventListener('click', () => {   
    sendData('west')
})


//===================MODAL SEND MAIL==================

const burgerButton = document.querySelector('.burger-button')

function sendFromBurger() {
    const inputPhone = document.querySelector('.burger-input').value

    let templateParams = {
        phone: inputPhone,
        email: '',
        name: 'user'
    };

    // emailjs.send('service_5qtaya8','contact_form', templateParams)
	// .then(function(response) {
	//    console.log('SUCCESS!', response.status, response.text);
    //    console.log(templateParams);
	// }, function(err) {
	//    console.log('FAILED...', err);
	// });
}
burgerButton.addEventListener('click', () => {
    sendFromBurger()
})