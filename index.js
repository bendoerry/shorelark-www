import * as sim from "lib-simulation-wasm";
import { Viewport } from "./app/viewport";

const simulation = new sim.Simulation();
const viewport = new Viewport(document.getElementById('viewport'))

viewport.clear();

for (const animal of simulation.world().animals) {
    viewport.drawTriangle(animal.x, animal.y, 0.01);
}
