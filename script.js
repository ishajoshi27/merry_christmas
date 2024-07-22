function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = `${Math.random() * 50}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 100);
}

function showSnowfall() {
    setInterval(createSnowflake, 15);
}
