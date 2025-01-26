// Menu Bar hide/show functionality
const menuBtn = document.getElementById('menu_btn');
const menuList = document.getElementById('menu_list');



menuBtn.addEventListener('click', () => {
    menuList.style.display = menuList.style.display === 'none' ? 'block' : 'none';
});



