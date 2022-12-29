const questions = () => {
    const questionsFormName = document.querySelector('#form2-name')
    const questionsFormPhone = document.querySelector('#form2-phone')
    const questionsFormMail = document.querySelector('#form2-email')
    const questionsFormMessage = document.querySelector('#form2-message')




    questionsFormName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');
    })

    questionsFormPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/gi, '');
    })

    questionsFormMail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w@\-_.!~*']/gi, '');
    })

    questionsFormMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');
    })
}

export default questions