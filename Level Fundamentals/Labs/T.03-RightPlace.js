function replace(firstString, char, secondString){
    const charToRemove = '_';
    let replacedString = firstString.replace(charToRemove, char);

    let result = replacedString == secondString ?
    'Matched' : 'Not Matched';
    
    console.log(result);
}
replace('Str_ng', 'I', 'Strong')
replace('Str_ng', 'i', 'String')