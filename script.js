const universe = document.getElementById('universe');

class Body {
    constructor(id, x, y, vx=0, vy=0) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;

    }
}

const bodies = [
    new Body('big', 400, 250, -10, -15 ),
    new Body('small', 100, 250, 10, -20)    
]

bodies.forEach(b => {
    const newDiv = document.createElement('div');
    newDiv.className = 'planet';
    newDiv.id = b.id;
    newDiv.style.top = b.y + 'px';
    newDiv.style.left = b.x + 'px';
    b.el = newDiv;
    universe.appendChild(newDiv);
})

const maxCycles = 2000/20;
let i = 0;
main = () => {
    bodies.forEach(b => {
        console.log(b);
        b.vy += 1;
        b.y += b.vy;
        b.x += b.vx;
        b.el.style.top = b.y + 'px';
        b.el.style.left = b.x + 'px';
    })
    i++
    if (i < maxCycles) setTimeout(main, 20)
}

main()
