let button = document.querySelector('#top-button');


window.onscroll = ()=> {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 900) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};



button.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});