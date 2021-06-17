import * as sim from "lib-simulation-wasm";

const simulation = new sim.Simulation();
const world = simulation.world();

const viewport = document.getElementById('viewport');
// ------------- ^------^
// | `document` is a global object that allows to access and modify
// | current page (e.g. create or remove stuff from it).
// ---

