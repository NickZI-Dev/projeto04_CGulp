document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const actuallyPosition = window.scrollY;
    if(actuallyPosition < heroHeight) {
      ocultarElementos();
    } else {
      exibirElementos();
    }
  })

 function ocultarElementos() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
  }

  function exibirElementos() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
  }
  
  // funcionalidade aos botões "Relacionados" e "Detalhes"

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(botao){
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      hiddenTabs();
      if (abaAlvo === 'movies') {
        aba.classList.add('show-movies__list--is-active');
      } else {
        aba.classList.add('show-movies__details--is-active');
      }
      hiddenButton();
      botao.target.classList.add('show-movies__tab__button--is-active');
    })
  }
})

function hiddenButton() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('show-movies__tab__button--is-active');
  }
}

function hiddenTabs() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('show-movies__list--is-active')
    tabsContainer[i].classList.remove('show-movies__details--is-active');
  }
}