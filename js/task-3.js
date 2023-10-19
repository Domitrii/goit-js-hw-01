const getElementWidth = (content, padding, border) => {
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const contentValue = parseFloat(content);

    console.log(contentValue + borderValue * 2 + paddingValue * 2);
};

getElementWidth();