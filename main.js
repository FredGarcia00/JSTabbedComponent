//tabbed component

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab--container');

const tabsContent = document.querySelectorAll('.operations__content');

//Adding event handlers for the buttons
//e.g of bad practice
// tabs.forEach(t => t.addEventListener('click', () => {
//     console.log('TAB');
// }))

//will be using event delegation
tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);

    //guard clause
    if(!clicked) return;

    //Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))
    
    //activate tabe
    clicked.classList.add('operations__tab--active')
    
    //Activate content area
    // console.log(clicked.dataset.tab)
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
    