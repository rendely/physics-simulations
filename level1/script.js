const universe = document.getElementById('universe');
const svg = document.querySelector('svg');
const rocket = document.getElementById('rocket');
const viewBox = {
    x: -100,
    y: -100,
    w: 200,
    h: 200
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
    viewBox.y -=5;
    viewBox.w +=10;
    viewBox.h +=10;
    svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`)
    rocket.style.transform= `translate(0,${-i*3}px) rotate(-${i}deg)`;

    i++
    if (i < maxCycles) setTimeout(main, 10)
}

main()