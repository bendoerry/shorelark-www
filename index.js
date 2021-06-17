import * as sim from "lib-simulation-wasm";

const simulation = new sim.Simulation();
const world = simulation.world();

const viewport = document.getElementById('viewport');
const ctxt = viewport.getContext('2d');

// ---
// | Determines color of the upcoming shape.
// - v-------v
ctxt.fillStyle = 'rgb(255, 0, 0)';
// ------------------ ^-^ -^ -^
// | Each of those three parameters is a number from range 0 up to 255:
// |
// | rgb(0, 0, 0) = black
// |
// | rgb(255, 0, 0) = red
// | rgb(0, 255, 0) = green
// | rgb(0, 0, 255) = blue
// |
// | rgb(255, 255, 0) = yellow
// | rgb(0, 255, 255) = cyan
// | rgb(255, 0, 255) = magenta
// |
// | rgb(128, 128, 128) = gray
// | rgb(255, 255, 255) = white
// ---

ctxt.fillRect(10, 10, 100, 50);
// ---------- X   Y   W    H
// | Draws rectangle filled with color determined by `fillStyle`.
// |
// | X = position on the X axis (left-to-right)
// | Y = position on the Y axis (top-to-bottom)
// | W = width
// | X = height
// |
// | (unit: pixels)
// ---

