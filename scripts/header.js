window.addEventListener('scroll', function() {
    let header = this.document.querySelector('header')

    if (this.window.scrollY > 0) {
        header.style.background = '#181E1A'
    } else {
        header.style.background = 'none'
    }
});