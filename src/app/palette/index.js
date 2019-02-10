import tinycolor from 'tinycolor2';

const COLOURS = {
  PRIMARY: '#00ACC1',
  GREY: '#F5F5F5',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  TRANSPARENT: tinycolor({ r: 0, g: 0, b: 0, a: 0 })
};

const getColor = (colorName) => {
  const color = COLOURS[colorName] || COLOURS['PRIMARY'];
  return tinycolor(color).clone();
};

export default getColor;
