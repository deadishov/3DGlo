const modal = () => {
    const getModal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupClose = getModal.querySelector('.popup-close')

    getModal.style.display = 'block'
    getModal.style.transform = 'translateY(-100%)'

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            getModal.style.transform = 'translateY(0)'
            getModal.style.transition = '1s'
        })
    })

    popupClose.addEventListener('click', () => {
        getModal.style.transform = 'translateY(-100%)'
    })
}


window.addEventListener('resize', () => {
    const clientWidth = document.documentElement.clientWidth;
    const getModal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupClose = getModal.querySelector('.popup-close')
    if (clientWidth < 768) {
        getModal.style.display = 'none';

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                getModal.style.display = 'block'
            })
        })

        popupClose.addEventListener('click', () => {
            getModal.style.display = 'none';
        })
    } else {
        modal()
    }
})




export default modal