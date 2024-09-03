window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    // Minimum time the loading screen should be displayed (in milliseconds)
    const minimumLoadingTime = 1500;
    
    // Record the time when the page started loading
    const startTime = performance.timing.navigationStart;
    
    // Calculate the time the page has already been loading
    const elapsedTime = Date.now() - startTime;
    
    // Calculate the remaining time to meet the minimum loading time
    const remainingTime = minimumLoadingTime - elapsedTime;
    
    // If the remaining time is greater than zero, wait for that time before hiding the loading screen
    if (remainingTime > 0) {
        setTimeout(() => {
            loading.style.display = 'none';
            content.style.display = 'block';
        }, remainingTime);
    } else {
        // If the remaining time is less than or equal to zero, hide the loading screen immediately
        loading.style.display = 'none';
        content.style.display = 'block';
    }
});
