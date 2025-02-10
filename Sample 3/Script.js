const canvas = document.getElementById('candleCanvas');
const ctx = canvas.getContext('2d');

function drawCandle() {
    // Draw the candle body
    ctx.fillStyle = '#fff';
    ctx.fillRect(90, 200, 20, 150); // x, y, width, height

    // Draw the candle base
    ctx.fillStyle = '#8B4513'; // brown color
    ctx.fillRect(70, 350, 60, 10); // x, y, width, height
}

function drawFlame() {
    const flameColors = ['#ffcc00', '#ff9900', '#ff3300'];
    const flameHeight = Math.random() * 40 + 20; // Random height for flickering effect
    const flameWidth = Math.random() * 10 + 10; // Random width for flickering effect

    // Draw the flame
    ctx.beginPath();
    ctx.moveTo(100, 200); // Start at the top of the candle
    ctx.bezierCurveTo(100 - flameWidth, 200 - flameHeight, 100 + flameWidth, 200 - flameHeight, 100, 200);
    ctx.closePath();

    // Fill the flame with a random color
    ctx.fillStyle = flameColors[Math.floor(Math.random() * flameColors.length)];
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawCandle(); // Draw the candle
    drawFlame(); // Draw the flame
    requestAnimationFrame(draw); // Call draw again for animation
}

draw(); // Start the drawing