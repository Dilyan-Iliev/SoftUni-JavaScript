function rotate(arr, rotations){
    for (let i = 0; i < rotations; i++) {
        let currentEl = arr.shift();
        arr.push(currentEl);
    }
    console.log(arr.join(' '));
}
rotate([51, 47, 32, 61, 21], 2)