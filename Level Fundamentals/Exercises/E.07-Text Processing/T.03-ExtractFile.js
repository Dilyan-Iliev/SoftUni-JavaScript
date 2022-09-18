function extractFile(filePath) {
    let fileNameIndexStart = filePath.lastIndexOf("\\") + 1;
    let fileExtensionStart = filePath.lastIndexOf('.') + 1;
    let fileNameIndexEnd = fileExtensionStart - 1;
    let fileName = filePath.substring(fileExtensionStart, fileNameIndexEnd);
    let fileExtension = filePath.substring(fileExtensionStart);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')