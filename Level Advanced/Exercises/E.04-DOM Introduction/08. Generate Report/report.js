function generateReport() {
    let checkBoxes = Array.from(document.getElementsByTagName('input'));
    let tableRows = Array.from(document.getElementsByTagName('tr'));

    let result = [];
    let checkedCols = [];

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const obj = {};

        for (let y = 0; y < row.children.length; y++) {
            const element = row.children[y];
            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(y);
                }
                continue;
            }

            if (checkedCols.includes(y)) {
                let propertyName = checkBoxes[y].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            result.push(obj);
        }
    }

    document.getElementById('output').value = JSON.stringify(result);
}