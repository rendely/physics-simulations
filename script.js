const universe = document.getElementById('universe');

class Body {
    constructor(id, r, x, y, vx=0, vy=0) {
      this.id = id;
      this.r = r;
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;

    }
}

const bodies = [
    new Body('small', 10, 100, 250, 0, -18),
    new Body('big', 30, 250, 250)
]

bodies.forEach(b => {
    const newDiv = document.createElement('div');
    newDiv.className = 'planet';
    newDiv.id = b.id;
    newDiv.style.top = b.y + 'px';
    newDiv.style.left = b.x + 'px';
    newDiv.style.width = b.r + 'px';
    newDiv.style.height = b.r + 'px';
    b.el = newDiv;
    universe.appendChild(newDiv);
})


bodyInteraction = (a, b) => {
    const newNode = a.el.cloneNode();
    universe.append(newNode);
    newNode.classList.add('hidden');
    const xDist = b.x - a.x;
    const yDist = a.y - b.y;
    const r = Math.sqrt( xDist**2 + yDist**2);
    const theta = Math.atan2(yDist, xDist);
    const xAcc = 300/r*Math.cos(theta);
    const yAcc = -300/r*Math.sin(theta);
    a.vx += xAcc;
    a.vy += yAcc;
    a.x += a.vx;
    a.y += a.vy;
    a.el.style.top = a.y + 'px';
    a.el.style.left = a.x + 'px';
    console.table({
        deg: theta*180/Math.PI, 
        sin: Math.sin(theta),
        cos: Math.cos(theta),
        // xDist, 
        // yDist, 
        // theta, 
        // xAcc, 
        // yAcc
    })
}

const maxCycles = 3000/20;
let i = 0;
main = () => {
    bodyInteraction(bodies[0], bodies[1]);
    i++
    if (i < maxCycles) setTimeout(main, 20)
}

main()
