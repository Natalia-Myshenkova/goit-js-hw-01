function getElementWidth(content, padding, border) {

  const prepareContentToNumber = parseFloat(content)
  const preparePaddingToNumber = parseFloat(padding)
  const prepareBorderToNumber = parseFloat(border)

  return prepareContentToNumber + (preparePaddingToNumber * 2) + (prepareBorderToNumber * 2)
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
