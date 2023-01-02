const modal = () => {
    const getModal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
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


    modalFormName.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {
            return g1 + g2.toUpperCase();
        });;
    })

    modalFormPhone.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })

    modalFormMail.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\w@\-_.!~*']/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })


    window.addEventListener('resize', () => {
        const clientWidth = document.documentElement.clientWidth;
        const getModal = document.querySelector('.popup')
        const buttons = document.querySelectorAll('.popup-btn')


        if (clientWidth > 767) {
            getModal.style.display = 'block'
            getModal.style.transform = 'translateY(-100%)'

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    getModal.style.transform = 'translateY(0)'
                    getModal.style.transition = '1s'
                })
            })

            getModal.addEventListener('click', (e) => {
                if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                    getModal.style.display = 'block'
                    getModal.style.transform = 'translateY(-100%)'
                }
            })
        } if (clientWidth < 768) {
            getModal.style.display = 'none';

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    getModal.style.display = 'block'
                })
            })

            getModal.addEventListener('click', (e) => {
                if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                    getModal.style.display = 'none';
                }
            })
        }
    })

    getModal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            getModal.style.display = 'block'
            getModal.style.transform = 'translateY(-100%)'
        }
    })
}






export default modal