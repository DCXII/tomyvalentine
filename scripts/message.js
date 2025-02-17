
window.addEventListener('load', () => {
    document.querySelector('.message-container').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.message-container').style.opacity = 1;
    }, 500);
    localStorage.removeItem('isLoggedIn');
});
