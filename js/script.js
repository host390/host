window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.Menu'),
    menuItem = document.querySelectorAll('.Menu_Item'),
    hamburger = document.querySelector('.Hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('Hamburger_Active');
        menu.classList.toggle('Menu_Active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('Hamburger_Active');
            menu.classList.toggle('Menu_Active');
        })
    })
})