const box = document.getElementById('box');
let topPosition = 100;
let leftPosition = 100;
const moveAmount = 20;

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            topPosition = Math.max(0, topPosition - moveAmount);
            break;
        case 'ArrowDown':
            topPosition = Math.min(window.innerHeight - 70, topPosition + moveAmount);
            break;
        case 'ArrowLeft':
            leftPosition = Math.max(0, leftPosition - moveAmount);
            break;
        case 'ArrowRight':
            leftPosition = Math.min(window.innerWidth - 70, leftPosition + moveAmount);
            break;
        default:
            return;
    }

    box.style.top = topPosition + 'px';
    box.style.left = leftPosition + 'px';
});
