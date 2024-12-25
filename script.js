const NUMBER_OF_SNOWFLAKES = 150;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = "#ddd";
const snowflakes = [];

const canvas = document.createElement('canvas');

canvas.style.position = 'absolute'
canvas.style.top = '0px';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
    
const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5
});


const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
};


const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
};



const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
};



for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
        snowflakes.push(createSnowflake());
}

animate();


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.muted = false;
    audio.volume = 1;
    audio.play();

    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');
    const text4 = document.querySelector('.text4');
    setTimeout(() => {
        text1.style.opacity = 1;
    }, 300);
    setTimeout(() => {
        text1.style.animation = 'fadeOut 1.5s forwards';
        text2.style.animation = 'fadeIn 1.5s forwards';
        text2.style.opacity = 1;
        setTimeout(() => {
            text1.style.display = 'none';
        }, 1500); // Ensure text1 is hidden after fade out
    }, 2200);
    setTimeout(() => {
        text2.style.animation = 'fadeOut 1.5s forwards';
        text3.style.animation = 'fadeIn 1.5s forwards';
        text3.style.opacity = 1;
        setTimeout(() => {
            text2.style.display = 'none';
        }, 1500); // Ensure text2 is hidden after fade out
    }, 5200);
    setTimeout(() => {
        text3.style.animation = 'fadeOut 1.5s forwards';
        text4.style.animation = 'fadeIn 1.5s forwards';
        text4.style.opacity = 1;
        setTimeout(() => {
            text3.style.display = 'none';
        }, 1500); // Ensure text3 is hidden after fade out
    }, 8200);

    const fab = document.querySelector('.fab');
    fab.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
