const universe = document.getElementById('universe');
const svg = document.querySelector('svg');
const rocketEl = document.getElementById('rocket');
const rocket = {
    el: rocketEl,
    y: 0,
    vy: 0
}

const viewBox = {
    x: -100,
    y: -100,
    w: 200,
    h: 400
}

svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`)

let pause = false;
let thrustUp = false;
let trustLeft = false; 
let trustRight = false; 
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') pause = true
    if (e.code === 'ArrowUp') thrustUp = true
    if (e.code === 'ArrowLeft') trustLeft = true
    if (e.code === 'ArrowRight') trustRight = true
});
document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        pause = false;
        main()
    }
    if (e.code === 'ArrowUp') thrustUp = false
    if (e.code === 'ArrowLeft') trustLeft = false
    if (e.code === 'ArrowRight') trustRight = false
});


const maxCycles = 10000/20;
let i = 0;
main = () => {
    if (pause) return;
    //main loop
    viewBox.x -=5;
    viewBox.y -=10;
    viewBox.w +=10;
    viewBox.h +=10;
    svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`)
    // rocket.el.style.transform= `translate(0,${-i*3}px) rotate(-${i}deg)`;
    rocket.vy += .03;
    rocket.y += rocket.vy;
    rocket.el.querySelector('text').innerHTML = `${Math.round(rocket.vy*100)/100}`;
    rocket.el.style.transform= `translate(0,${-rocket.y}px)`;

    i++
    if (i < maxCycles) setTimeout(main, 10)
}

main()