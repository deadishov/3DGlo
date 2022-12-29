const modal = () => {
    const getModal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupClose = getModal.querySelector('.popup-close')
    const modalFormName = getModal.querySelector('#form3-name')
    const modalFormPhone = getModal.querySelector('#form3-phone')
    const modalFormMail = getModal.querySelector('#form3-email')


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


    modalFormName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');
    })

    modalFormPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/gi, '');
    })

    modalFormMail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w@\-_.!~*']/gi, '');
    })


    window.addEventListener('resize', () => {
        const clientWidth = document.documentElement.clientWidth;
        const getModal = document.querySelector('.popup')
        const buttons = document.querySelectorAll('.popup-btn')
        const popupClose = getModal.querySelector('.popup-close')


        if (clientWidth > 767) {
            getModal.style.display = 'block'
            getModal.style.transform = 'translateY(-100%)'

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    getModal.style.transform = 'translateY(0)'
                    getModal.style.transition = '1s'
                })
            })

            popupClose.addEventListener('click', () => {
                getModal.style.display = 'block'
                getModal.style.transform = 'translateY(-100%)'
            })
        } if (clientWidth < 768) {
            getModal.style.display = 'none';

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    getModal.style.display = 'block'
                })
            })

            popupClose.addEventListener('click', () => {
                getModal.style.display = 'none';
            })
        }
    })
}






export default modal