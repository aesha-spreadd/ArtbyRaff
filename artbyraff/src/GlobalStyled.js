import styled, { createGlobalStyle } from 'styled-components';
import GraphikBold from './font/Graphik-Font-Family/GraphikBold.otf';
import GraphikLight from './font/Graphik-Font-Family/GraphikLight.otf';
import GraphikSemibold from './font/Graphik-Font-Family/GraphikSemibold.otf';
import GraphikSuper from './font/Graphik-Font-Family/GraphikSuper.otf';
import GraphikBlack from './font/Graphik-Font-Family/GraphikBlack.otf';
import GraphikMedium from './font/Graphik-Font-Family/GraphikMedium.otf';

export const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    background-color:#161515;
  }
  
 .slick-slide.slick-active.slick-center.slick-current {
  width: 563px !important;
}

  @font-face {
    font-family: 'Graphik-Semibold';
    src: url(${GraphikSemibold}) format('truetype');
    font-style: normal;
  }

  @font-face{
    font-family: 'Graphik-Light';
    src: url(${GraphikLight}) format('truetype');
    font-style: normal;
  }

   @font-face{
    font-family: 'Graphik-Bold';
    src: url(${GraphikBold}) format('truetype');
    font-style: normal;
  }

   @font-face{
    font-family: 'Graphik-Super';
    src: url(${GraphikSuper}) format('truetype');
    font-style: normal;
  }

   @font-face{
    font-family: 'Graphik-Black';
    src: url(${GraphikBlack}) format('truetype');
    font-style: normal;
  }

  @font-face{
    font-family: 'Graphik-Medium';
    src: url(${GraphikMedium}) format('truetype');
    font-style: normal;
  }
`;
