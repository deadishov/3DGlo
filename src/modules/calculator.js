const calculator = () => {
    const calcItems = document.querySelectorAll('input.calc-item');

    calcItems.forEach((item) => {
        item.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/\D/, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
        })
    })
};


export default calculator