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





const scriptURL = 'https://script.google.com/macros/s/AKfycbx6ILYSitaBfUQTikV0rG7gsU8MUJLwdH5BPAEqi-vPwnrhNAmJDQ9adM5LBh_RVyN2/exec'
const form = document.forms['submit-to-google-sheet']
const btnSubmit = document.querySelector('.buttonSubmit');

const thanks = document.querySelector('.thanks');


form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
        console.log('Success!', response);
        form.reset();

        thanks.classList.toggle('dNone');
    })
    .catch(error => console.error('Error!', error.message))
});