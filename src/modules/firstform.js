const firstForm = () => {
    const firstFormName = document.querySelector('#form1-name')
    const firstFormPhone = document.querySelector('#form1-phone')
    const firstFormMail = document.querySelector('#form1-email')




    firstFormName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');
    })

    firstFormPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/gi, '');
    })

    firstFormMail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w@\-_.!~*']/gi, '');
    })
}

export default firstForm