function solve(array, ...strings) {
    let [firstString, secondString] = strings;
    let startIndex = array.indexOf(firstString);
    let endIndex = array.indexOf(secondString);

    let newArr = array.slice(startIndex, endIndex + 1);

    return newArr;
}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie', 'Lemon Meringue Pie');

solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie', 'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie', 'Smoked Fish Pie')