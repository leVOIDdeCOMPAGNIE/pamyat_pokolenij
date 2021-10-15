const buttonPageUp = document.querySelector('.footer__column_content_up');

buttonPageUp.onmouseover = function(event) { 
  event.target.style.fill = '#B5B5B5';   
};
buttonPageUp.onmouseout = function(event) { 
  event.target.style.fill = '#FEFEFE';      
};

buttonPageUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})