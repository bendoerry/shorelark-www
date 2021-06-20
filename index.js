import * as sim from "lib-simulation-wasm";
import { Viewport } from "./app/viewport";

const simulation = new sim.Simulation();

document.getElementById('train').onclick = function() {
    simulation.train();
}

const viewport = new Viewport(document.getElementById('viewport'))

function redraw() {
    viewport.clear()

    simulation.step()

    const world = simulation.world();

    for (const food of world.foods) {
        viewport.drawCircle(food.x, food.y, (0.01 / 2.0));
    }

    for (const animal of world.animals) {
        viewport.drawTriangle(animal.x, animal.y, 0.01, animal.rotation);
    }

    // requestAnimationFrame() schedules code only for the next frame.
    //
    // Because we want for our simulation to continue forever, we've
    // gotta keep re-scheduling our function:
    requestAnimationFrame(redraw);
}

redraw();