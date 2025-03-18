document.querySelector('.click-to-enter').addEventListener('click', function() {
    this.classList.add('hide');
    document.querySelector('.main-content').classList.add('show');

    const video = document.getElementById('background-video');
    video.muted = false;
    video.play();

    // Show the box 6.5 seconds after clicking to enter
    setTimeout(() => {
        document.querySelector('.bio-box').style.display = "block";
    }, 6600);
});

function copydiscorduser() {
    navigator.clipboard.writeText("mario_ot");
    alert("Discord User copied to clipboard!");
}

function copyemail() {
    navigator.clipboard.writeText("mario@rileyb.co.uk");
    alert("Email copied to clipboard!");
}

const titleElement = document.getElementById('title');
const text = "@Neonix";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        titleElement.textContent = text.slice(0, index--);
        if (index === 0) isDeleting = false;
    } else {
        titleElement.textContent = text.slice(0, index++);
        if (index === text.length) isDeleting = true;
    }
}

setInterval(typeEffect, 250);

(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            window.close(); // Close the page if DevTools is opened
        }
    });
    console.log('%c', element);

    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        
        if (widthThreshold || heightThreshold) {
            window.close();
        }
    }


const video = document.getElementById('background-video');
const volumeControl = document.getElementById('volumeControl');
volumeControl.addEventListener('input', () => video.volume = volumeControl.value);

const volumeIcon = document.getElementById("volume-icon");
const volumeSlider = document.getElementById("volume-range");
volumeSlider.addEventListener("input", function () {
    volumeIcon.src = this.value == 0 ? "mute.png" : "volume.png";
});


const cursor = document.querySelector('.crosshair');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.transform = 'translate(-50%, -50%)';
});
