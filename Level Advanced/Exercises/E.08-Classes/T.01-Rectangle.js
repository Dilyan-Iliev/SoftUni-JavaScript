class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'Red');

console.log(rect.width);

rect.width = 12;
console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea())