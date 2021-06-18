import * as sim from "lib-simulation-wasm";

const simulation = new sim.Simulation();
const viewport = document.getElementById('viewport');
const viewportWidth = viewport.width;
const viewportHeight = viewport.height;

const viewportScale = window.devicePixelRatio || 1;
// ------------------------------------------ ^^^^
// | Syntax-wise, it's like: .unwrap_or(1)
// |
// | This value determines how much physical pixels there are per
// | each single pixel on a canvas.
// |
// | Non-HiDPI displays usually have a pixel ratio of 1.0, which
// | means that drawing a single pixel on a canvas will lighten-up
// | exactly one physical pixel on the screen.
// |
// | My display has a pixel ratio of 2.0, which means that for each
// | single pixel drawn on a canvas, there will be two physical
// | pixels modified by the browser.
// ---

// The Trick, part 1: we're scaling-up canvas' *buffer*, so that it
// matches the screen's pixel ratio
viewport.width = viewportWidth * viewportScale;
viewport.height = viewportHeight * viewportScale;

// The Trick, part 2: we're scaling-down canvas' *element*, because
// the browser will automatically multiply it by the pixel ratio in
// a moment.
//
// This might seem like a no-op, but the maneuver lies in the fact
// that modifying a canvas' element size doesn't affect the canvas'
// buffer size, which internally *remains* scaled-up:
//
// ----------- < our entire page
// |         |
// |   ---   |
// |   | | < | < our canvas
// |   ---   |   (size: viewport.style.width & viewport.style.height)
// |         |
// -----------
//
// Outside the page, in the web browser's memory:
//
// ----- < our canvas' buffer
// |   | (size: viewport.width & viewport.height)
// |   |
// -----
viewport.style.width = viewportWidth + 'px';
viewport.style.height = viewportHeight + 'px';

const ctxt = viewport.getContext('2d');

// Automatically scales all operations by `viewportScale` - otherwise
// we'd have to `* viewportScale` everything by hand
ctxt.scale(viewportScale, viewportScale);

// Rest of the code follows without any changes
ctxt.fillStyle = 'rgb(0, 0, 0)';

for (const animal of simulation.world().animals) {
    ctxt.fillRect(
        animal.x * viewportWidth,
        animal.y * viewportHeight,
        15,
        15,
    );
}

// Starts drawing a polygon
ctxt.beginPath();

// Moves cursor at x=50, y=0
ctxt.moveTo(50, 0);

// Draws a line from (50,0) to (100,50) and moves cursor there
// (this gets us the right side of our triangle)
ctxt.lineTo(100, 50);

// Draws a line from (100,50) to (0,50) and moves cursor there
// (this gets us the bottom side of our triangle)
ctxt.lineTo(0, 50);

// Draws a line from (0,50) to (50,0) and moves cursor there
// (this gets us the left side of our triangle)
ctxt.lineTo(50, 0);

// Fills our triangle with a black color
//
// (there's also `ctxt.stroke();`, which would render only our triangle's
// outline instead.)
ctxt.fillStyle = 'rgb(0, 0, 0)';
ctxt.fill();

