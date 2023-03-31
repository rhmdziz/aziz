// Side Bar
const sideBar = document.querySelector('.sideBar');
const x = document.querySelector('#x');
const y = document.querySelector('#y');

x.onclick = () => {
    sideBar.classList.toggle('hide');
};
y.onclick = () => {
    sideBar.classList.toggle('hide');
};