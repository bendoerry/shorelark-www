import * as sim from "lib-simulation-wasm";

const simulation = new sim.Simulation();
const viewport = document.getElementById('viewport');
const ctxt = viewport.getContext('2d');

ctxt.fillStyle = 'rgb(0, 0, 0)';

for (const animal of simulation.world().animals) {
    ctxt.fillRect(animal.x, animal.y, 15, 15);
}

