const Color = require('color');

export const breakpoints = {
  mobile: '375px',
  mobileGrande: '468px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  notebook: '1920px',
};

// Funcion para leer el color, devuelve el valor del color en hsl para que sea constante en distintas pantallas.

export const leerColor = color => color.hsl().string();

/**
 *
 * Para definir un color utilizamos la librería colors. (Importada arriba). Esto nos permite tener colores exactos a traves de las distintas pantallas.
 * Además podemos hacer ajustes sobre la opacidad, brillo y otras variables del color.
 *
 *
 *
 * Documentación: https://github.com/Qix-/color#readme [IMPORTANTE LEER]
 *
 * Un color se crea de esta manera:
 *
 *  blanco: Color.rgb(255,255,255),
 *
 */
export const colores = {
  azul: Color.rgb(13, 20, 44),
  rosa: Color.rgb(253, 21, 126),
  celeste: Color.rgb(0, 197, 217),
  gris: Color.rgb(245, 245, 245),
};

export const pxToRem = value => `${value / 16}rem`;
