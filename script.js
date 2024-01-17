const universe = document.getElementById('universe');

class Body {
    constructor(id, r, m, x, y, vx=0, vy=0) {
      this.id = id;
      this.r = r;
      this.m = m;
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;

    }
}

const bodies = [
    new Body('small', 5, 10, 150, 250, 0, -18),
    new Body('small2', 5, 10, 450, 250, 0, -18),
    new Body('big', 15, 3000, 250, 250)
]

bodies.forEach(b => {
    const newDiv = document.createElement('div');
    newDiv.className = 'planet';
    newDiv.id = b.id;
    newDiv.style.top = b.y - b.r/2 + 'px';
    newDiv.style.left = b.x - b.r/2 + 'px';
    newDiv.style.width = b.r*2 + 'px';
    newDiv.style.height = b.r*2 + 'px';
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
    const xAcc = 3/r*Math.cos(theta)*b.m/a.m;
    const yAcc = -3/r*Math.sin(theta)*b.m/a.m;
    a.vx += xAcc;
    a.vy += yAcc;
    if (r <= a.r + b.r+15) {
        a.vx = 0;
        a.vy = 0;
    }
    a.x += a.vx;
    a.y += a.vy;
    a.el.style.top = a.y - a.r/2 + 'px';
    a.el.style.left = a.x - a.r/2 + 'px';
    // console.table({
    //     deg: theta*180/Math.PI, 
    //     sin: Math.sin(theta),
    //     cos: Math.cos(theta),
    //     xDist, 
    //     yDist, 
    //     theta, 
    //     xAcc, 
    //     yAcc
    // })
}

const maxCycles = 10000/20;
let i = 0;
main = () => {
    bodies.forEach( a => {
        bodies.forEach(b => {
            if (a !== b) bodyInteraction(a, b);
        })
    })
    
    i++
    if (i < maxCycles) setTimeout(main, 50)
}

main()
