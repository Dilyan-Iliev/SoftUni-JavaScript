class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstObj, secondObj) {
        let firstDistance = Math.abs(firstObj.x - secondObj.y);
        let secondDistance = Math.abs(firstObj.x - secondObj.y);

        return Math.sqrt(firstDistance ** 2 + secondDistance ** 2);
    }
}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));