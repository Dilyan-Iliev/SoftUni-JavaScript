function encodeAndDecodeMessages() {
    let sendButton = document.getElementsByTagName('button')[0];
    let recieveButton = document.getElementsByTagName('button')[1];

    let encodedInput = '';
    let decodedOutput = '';

    sendButton.addEventListener('click', (e) => {

        const currentParent = e.target.parentNode;
        const sendTextArea = currentParent.querySelector('textarea');

        for (const char of sendTextArea.value) {
            let encoded = char.charCodeAt() + 1;
            encodedInput += String.fromCharCode(encoded);
        }

        sendTextArea.value = '';

        const mainParent = e.target.parentNode.parentNode;
        const recieveTextArea = mainParent.querySelectorAll('textArea')[1];
        recieveTextArea.value = encodedInput;
    });

    recieveButton.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        const recieveTextArea = parent.querySelector('textarea');

        for (const char of recieveTextArea.value) {
            let decoded = char.charCodeAt() - 1;
            decodedOutput += String.fromCharCode(decoded);
        }

        recieveTextArea.value = decodedOutput;
    });
}