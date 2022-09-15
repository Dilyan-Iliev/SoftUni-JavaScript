function sorting(array) {
    let sorted = array
        .sort((a, b) => a.length - b.length || a.localeCompare(b));
    //JS предлага възможност няколко критерия да се чейнват с ||

    sorted.forEach(x => console.log(x));
}
sorting(['alpha', 'beta', 'gamma']);