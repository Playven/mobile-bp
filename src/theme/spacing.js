import { camelCase } from 'lodash';

const type = {
  m: 'margin',
  p: 'padding'
};

const side = {
  l: 'left',
  r: 'right',
  t: 'top',
  b: 'bottom',
  h: 'horizontal',
  v: 'vertical',
  a: 'all'
};

const size = {
  z: 0,
  s: 5, // size
  m: 10, // medium
  r: 15, // regular
  l: 20, // large
  xl: 25, // extra-large
  xxl: 30
};

const styles = {
  row: {
    flexDirection: 'row'
  },
  rowSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

// builds up style object: { mls: { 'marginLeft: 5 } } etc.
Object.entries(type).forEach(([typeKey, typeValue]) => {
  Object.entries(side).forEach(([sideKey, sideValue]) => {
    Object.entries(size).forEach(([sizeKey, sizeValue]) => {
      styles[`${typeKey}${sideKey}${sizeKey}`] = {
        [camelCase(`${typeValue}_${sideValue}`)]: sizeValue
      };
      if (!styles[`${typeKey}${sizeKey}`]) {
        // add a for 'all'
        styles[`${typeKey}a${sizeKey}`] = {
          [`${typeValue}`]: sizeValue
        };
      }
    });
  });
});

export const spacing = styles;
