

document.addEventListener("click", () => {
    
    let click = setInterval(() => {
        localStorage.clicks++;
    }, 1000);
    
    function stopClicking() {
        clearInterval(click);
    }
    
    setTimeout(stopClicking, 11000);
})