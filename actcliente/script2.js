document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("mover");
    const step = 10;

    function moveBox(event) {
        const style = window.getComputedStyle(box);
        const left = parseInt(style.left);
        const top = parseInt(style.top);

        switch (event.key) {
            case "ArrowUp":
            case "8":
                box.style.top = `${top - step}px`;
                break;
            case "ArrowDown":
            case "2":
                box.style.top = `${top + step}px`;
                break;
            case "ArrowLeft":
            case "4":
                box.style.left = `${left - step}px`;
                break;
            case "ArrowRight":
            case "6":
                box.style.left = `${left + step}px`;
                break;
        }
    }

    document.addEventListener("keydown", moveBox);
});
