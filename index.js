import * as sim from "lib-simulation-wasm";

const simulation = new sim.Simulation();
const viewport = document.getElementById('viewport');
const viewportWidth = viewport.width;
const viewportHeight = viewport.height;

const ctxt = viewport.getContext('2d');

ctxt.fillStyle = 'rgb(0, 0, 0)';

for (const animal of simulation.world().animals) {
    ctxt.fillRect(
        animal.x * viewportWidth,
        animal.y * viewportHeight,
        15,
        15,
    );
}

