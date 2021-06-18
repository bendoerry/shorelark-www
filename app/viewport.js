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

        // Automatically scales all operations by `viewportScale` - otherwise
        // we'd have to `* viewportScale` everything by hand
        this.context.scale(pixelRatio, pixelRatio);

        this.context.fillStyle = 'rgb(0, 0, 0)';
    }

    drawTriangle(x, y, size) {
        x *= this._width();
        y *= this._height();
        size *= this._width();

        this.context.drawTriangle(x, y, size);
    }

    _width() {
        return this.element.width;
    }

    _height() {
        return this.element.height;
    }

    Context() {
        return this.context;
    }
}

CanvasRenderingContext2D.prototype.drawTriangle = function (x, y, size) {
    this.beginPath();
    this.moveTo(x, y);
    this.lineTo(x + size, y + size);
    this.lineTo(x - size, y + size);
    this.lineTo(x, y);

    this.fillStyle = 'rgb(0, 0, 0)';
    this.fill();
}
