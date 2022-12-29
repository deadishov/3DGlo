const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const scrollBtn = document.querySelector('a[href="#service-block"]>img');


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
    //Усложненка
    menuItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            handleMenu();
            event.preventDefault();
            const blockID = item.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    scrollBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const scrollLink = document.querySelector('a[href="#service-block"]');
        const blockID = scrollLink.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    //Усложненка


};

export default menu;