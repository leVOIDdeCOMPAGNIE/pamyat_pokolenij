
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

const region = document.querySelector('.map__region');
const pin = document.querySelector('.map__pin');

/*смена цвета региона*/
// region.onmouseover = function (event) {
//   let target = event.target;
//   target.setAttribute('fill', '#6D097A');
// };

// region.onmouseout = function (event) {
//   let target = event.target;
//   target.setAttribute('fill', '#9A34A8');
// };

// pin.onmouseover = function (event) {
//   let target = event.target;
//   target.setAttribute('fill', '#6D097A');
// };

// pin.onmouseout = function () {
//   region.setAttribute('fill', '#9A34A8');
// };

