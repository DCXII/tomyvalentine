
// Entry Validation
function checkName() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    if (nameInput.toLowerCase() === "malavika")||(nameInput.toLowerCase() === "malavika ranjith") {
        localStorage.setItem('isLoggedIn', true);
        window.location.href = "game.html";
    } else {
        errorMessage.textContent = "Nope, only my Valentine can enter!";
        errorMessage.style.display = "block";
    }
}

// Access Control
window.addEventListener('load', () => {
    if (window.location.pathname.endsWith('game.html') && localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = "index.html";
    }
});
