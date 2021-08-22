export class Viewport {
    constructor(element) {
        this.element = element;
        this.width = this.element.width;
        this.height = this.element.height;
    }

    clear() {
        const pixelRatio = window.devicePixelRatio || 1;

        this.element.width = this.width * pixelRatio;
        this.element.height = this.height * pixelRatio;
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';

        this.context = this.element.getContext('2d');

        this.context.scale(pixelRatio, pixelRatio);

        this.context.fillStyle = 'rgb(0, 0, 0)';

        this.context.clearRect(0, 0, this.width, this.height);
    }

    drawTriangle(x, y, size, rotation) {
        x *= this.width;
        y *= this.height;
        size *= this.width;

        this.context.drawTriangle(x, y, size, rotation);
    }

    drawCircle(x, y, radius) {
        x *= this.width
        y *= this.height;
        radius *= this.width;

        this.context.drawCircle(x, y, radius)
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

    this.strokeStyle = 'rgb(255, 255, 255)';
    this.stroke();
}

CanvasRenderingContext2D.prototype.drawCircle = function (x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, 2.0 * Math.PI);

    this.fillStyle = 'rgb(0, 255, 128)'; // A nice green colour
    this.fill();
}
