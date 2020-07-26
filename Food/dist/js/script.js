// 1 функция, кот будет скрывать ненужные табы
// 2 показать нужный таб
// 3 назначить обработчики событий на меню, 
// кот будет манипулировать функциями 1 и 2 

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    //функция, которая скрывает контент табов
    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
            //item.style.display = 'none';
            //вместо Align стилей используем классы
        });

        tabs.forEach(item => {
            //у каждого из элементов таба будем удалять класс активности
            item.classList.remove('tabheader__item_active');
        });
    }

    //функция, которая наоборот будет показывать табы
    function showTabContent (i=0) {
        //вместо Align стилей используем классы
        //tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //использовать делегирование событий и 
    //назначить обработчик события кликом
    tabsParent.addEventListener('click', (event) => {
        //для частого использования event.target зададим её в виде переменной 
        const target = event.target;

        if (target&&target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        } 
    });
});