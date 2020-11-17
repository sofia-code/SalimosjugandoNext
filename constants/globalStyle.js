import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Zing';
    src: url('./fonts/Zing/ZingRustD2Demo-Base.woff2') format('woff2'),
        url('./fonts/Zing/ZingRustD2Demo-Base.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Zing';
    src: url('./fonts/Zing/ZingRustDemo-Base.woff2') format('woff2'),
        url('./fonts/Zing/ZingRustDemo-Base.woff') format('woff');
    font-style: normal;
}

@font-face {
    font-family: 'Zing';
    src: url('./fonts/Zing/ZingRustDemo-Sh1.woff2') format('woff2'),
        url('./fonts/Zing/ZingRustDemo-Sh1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Zing';
    src: url('./fonts/Zing/ZingRustLH1Demo-Fill.woff2') format('woff2'),
        url('./fonts/Zing/ZingRustLH1Demo-Fill.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}


@font-face {
  font-family: 'Proxima Nova';
  src: url('./fonts/ProximaNova/ProximaNova-Bold.woff2') format('woff2'),
    url('./fonts/ProximaNova/ProximaNova-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./fonts/ProximaNova/ProximaNova-Black.woff2') format('woff2'),
    url('./fonts/ProximaNova/ProximaNova-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./fonts/ProximaNova/ProximaNovaT-Thin.woff2') format('woff2'),
    url('./fonts/ProximaNova/ProximaNovaT-Thin.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./fonts/ProximaNova/ProximaNova-Regular.woff2') format('woff2'),
    url('./fonts/ProximaNova/ProximaNova-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./fonts/ProximaNova/ProximaNova-Extrabld.woff2') format('woff2'),
    url('./fonts/ProximaNova/ProximaNova-Extrabld.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}


@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-MediumItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Medium.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-BlackItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-ExtraBold.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Italic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Bold.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Black.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-BoldItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-LightItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-SemiBoldItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-ExtraBoldItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-ThinItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-ExtraLightItalic.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-SemiBold.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Regular.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-ExtraLight.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Thin.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('./fonts/Raleway/Raleway-Light.woff2') format('woff2'),
        url('./fonts/Raleway/Raleway-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}


 html {
   font-family: 'Raleway';
 }
`;

export default GlobalStyle;
