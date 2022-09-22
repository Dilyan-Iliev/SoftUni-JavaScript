function solve(steps, footPrint, speed) {
    let distance = steps * footPrint;
    let speedMetersInSec = speed / 3.6;
    let time = distance / speedMetersInSec;
    let rest = Math.floor(distance / 500);

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number((time - (timeInMin * 60)).toFixed(0));
    let timeInHour = Math.floor(time / 3600);
    timeInMin += rest;
    timeInHour += Math.floor(timeInMin / 60);
    timeInMin %= 60;

    let formattedH = timeInHour < 10 ? `0${timeInHour}` : timeInHour;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : timeInMin;
    let formattedS = timeInSec < 10 ? `0${timeInSec}` : timeInSec;

    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}

solve(4000, 0.60, 5);