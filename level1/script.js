const universe = document.getElementById('universe');
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
    i++
    if (i < maxCycles) setTimeout(main, 50)
}

main()