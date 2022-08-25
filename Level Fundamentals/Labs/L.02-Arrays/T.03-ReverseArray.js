function reverse(n, arr){
    let array = [n];
    for(let i = 0; i < n; i++){
        array[i] = arr[i]; 
    }

    console.log(array.reverse().join(' '));
}
reverse(3, [10, 20, 30, 40, 50])