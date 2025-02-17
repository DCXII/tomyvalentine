let yesButtonSize = 1;

function acceptProposal() {
    window.location.href = "message.html";
}

function moveNoButton(button) {
    // Get button dimensions
    const buttonRect = button.getBoundingClientRect();

    // Calculate max boundaries relative to the viewport, considering button size
    const maxLeft = Math.max(0, window.innerWidth - buttonRect.width);
    const maxTop = Math.max(0, window.innerHeight - buttonRect.height);

    // Generate random positions within the viewport bounds
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    // Apply new position to the button
    button.style.position = 'fixed';
    button.style.left = randomLeft + 'px';
    button.style.top = randomTop + 'px';

    // Ensure the button stays on top
    button.style.zIndex = '999';
    button.style.transition = 'top 0.3s ease, left 0.3s ease';

    growYesButton();
}

function growYesButton() {
    yesButtonSize += .1;
    const yesButton = document.querySelector('.yes-button');
    yesButton.style.transform = `scale(${yesButtonSize})`;
}
