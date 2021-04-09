const tabs = document.querySelectorAll('.tabs_btn')
const tabsContainer = document.querySelector('.tabs')
const tabsContent = document.querySelectorAll('.tabs-content')

tabsContainer.addEventListener('click', function(e) {
  let clicked = e.target.closest('.btn')
  if (!clicked) return
  tabs.forEach(tab => tab.classList.remove('tabs_btn--active'))
  clicked.classList.add('tabs_btn--active')
  tabsContent.forEach(item => item.classList.remove('tabs-content--active'))
  
  document.querySelector(`.tabs-content--${clicked.dataset.tab}`)
  .classList.add('tabs-content--active')
  
})




