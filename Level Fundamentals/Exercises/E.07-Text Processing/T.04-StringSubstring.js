function checkForGivenWord(word, sentence) {
    //let isHaving = sentence.toLowerCase().includes(word);

    //or

    let isHaving = sentence.toLowerCase().split(' ').find(x => x == word);
    console.log(isHaving ? word : `${word} not found!`);
}

checkForGivenWord('javascript',
    'JavaScript is the best programming language');

checkForGivenWord('python',
    'JavaScript is the best programming language');