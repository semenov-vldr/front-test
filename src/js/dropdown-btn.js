const dropdownBtn = document.querySelector('.js-tabs-dropdown'); // button
const listTabs = document.querySelector('.tab-header-wrap'); // ul
const tabsItems = listTabs.querySelectorAll('.tab-header'); // li

dropdownBtn.addEventListener('click', () => {

    listTabs.classList.toggle('menu-active');

    window.addEventListener('click', (evt) => {
        if (evt.target == dropdownBtn || evt.target == listTabs) {
            return;
        } else {
            listTabs.classList.remove('menu-active');
        }
    });

});


tabsItems.forEach( tab => {
    tab.addEventListener('click', () => {
        dropdownBtn.innerText = tab.innerText;
    })
});
