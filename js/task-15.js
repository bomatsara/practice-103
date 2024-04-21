//При натисканні на коло він повинен слідувати за курсором.
// При повторному натисканні він стає в початкове положення.

const outerCircle = document.querySelector('.outerCircle');
const mousemove = event => {
  outerCircle.style.top = `${event.pageY - 15}px`;
  outerCircle.style.left = `${event.pageX - 15}px`;
};

outerCircle.addEventListener('click', event => {
  if (outerCircle.style.position === 'absolute') {
    outerCircle.style.position = 'static';
    window.removeEventListener('mousemove', mousemove);
    return;
  }

  outerCircle.style.position = 'absolute';
  window.addEventListener('mousemove', mousemove);
});