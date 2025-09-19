const randomColorsBack = DOMElement => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  DOMElement.style.backgroundColor = `rgb(${R}, ${G}, ${B} )`;
};

export {randomColorsBack};