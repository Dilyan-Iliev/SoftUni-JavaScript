function editElement(reference, match, replacer) {
    let text = reference.textContent;
    let pattern = new RegExp(match, 'g');
    let edited = text.replace(pattern, replacer);
    reference.textContent = edited;
}