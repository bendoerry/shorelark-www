export class Viewport {
    constructor(element) {
        this.element = element;
    }

    clear() {
        const pixelRatio = window.devicePixelRatio || 1;

        this.element.width = this._width() * pixelRatio;
        this.element.height = this._height() * pixelRatio;
        this.element.style.width = this._width() + 'px';
        this.element.style.height = this._height() + 'px';

        this.context = this.element.getContext('2d');

        this.context.scale(pixelRatio, pixelRatio);

        this.context.fillStyle = 'rgb(0, 0, 0)';

        this.context.clearRect(0, 0, this._width(), this._height());
    }

    drawTriangle(x, y, size, rotation) {
        x *= this._width();
        y *= this._height();
        size *= this._width();

        this.context.drawTriangle(x, y, size, rotation);
    }

    drawCircle(x, y, radius) {
        x *= this._width()
        y *= this._height();
        radius *= this._width();

        this.context.drawCircle(x, y, radius)
    }

    _width() {
        return this.element.width;
    }

    _height() {
        return this.element.height;
    }
}

CanvasRenderingContext2D.prototype.drawTriangle = function (x, y, size, rotation) {
    this.beginPath();
    this.moveTo(
        x + Math.cos(rotation) * size * 1.5,
        y + Math.sin(rotation) * size * 1.5,
    );
    this.lineTo(
        x + Math.cos(rotation + 2.0 / 3.0 * Math.PI) * size,
        y + Math.sin(rotation + 2.0 / 3.0 * Math.PI) * size,
    );
    this.lineTo(
        x + Math.cos(rotation + 4.0 / 3.0 * Math.PI) * size,
        y + Math.sin(rotation + 4.0 / 3.0 * Math.PI) * size,
    );
    this.lineTo(
        x + Math.cos(rotation) * size * 1.5,
        y + Math.sin(rotation) * size * 1.5,
    );

    this.stroke();
}

CanvasRenderingContext2D.prototype.drawCircle = function (x, y, radius) {
    this.beginPath();

    // ---
    // | Circle's center.
    // ----- v -v
    this.arc(x, y, radius, 0, 2.0 * Math.PI);
    // ------------------- ^ -^-----------^
    // | Range at which the circle starts and ends, in radians.
    // |
    // | By manipulating these two parameters you can e.g. draw
    // | only half of a circle, Pac-Man style.
    // ---

    this.fillStyle = 'rgb(0, 0, 0)';
    this.fill();
}
