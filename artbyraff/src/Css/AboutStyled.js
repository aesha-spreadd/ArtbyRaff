import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyled';

export const AboutPageSection = styled.div`
  background-color: #161515;
  display: block;
  margin: 100px auto;
  box-sizing: border-box;
`;

export const AboutPageContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
`;

export const AboutPageInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 120px 0 0;
    text-align: center;
  }
`;

export const AboutPageLeftInner = styled.div`
  max-width: 48%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0 0 0 -40px;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    max-width: 80%;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  img {
    max-width: 398px;
    width: 100%;
    top: -220px;
    height: auto;
  }

  @media (max-width: 767px) {
    margin: 0;

    img {
      max-width: 398px;
      width: 100%;
    }
  }
`;

export const AboutPageRightInner = styled.div`
  max-width: 48%;
  width: 100%;
  position: relative;

  @media (max-width: 767px) {
    max-width: 80%;
    width: 100%;
  }
`;

export const AboutPageData = styled.div`
  color: #ffffff;
  text-align: center;
`;

export const AboutPageHeading = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-family: 'Graphik-Bold';
  font-size: 36px;
  font-weight: bold;
  line-height: 2.25;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 767px) {
    font-size: 20px;
    justify-content: center;
  }
`;

export const AboutPageParagraph = styled.p`
  display: flex;
  justify-content: center;
  font-family: 'Graphik-Light';
  font-size: 16px;
  font-weight: 300;
  line-height: 1.94;
  color: #d8d8d8;
  max-width: 471px;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const AboutPageSignatureBlock = styled.div`
  display: flex;
  margin: 25px 0 0;
`;

export const AboutPageName = styled.h2`
  margin: 0 22px 0 0;
  font-family: 'Graphik';
  font-size: 16px;
  line-height: 5.06;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;
`;

export const AboutPageSignature = styled.div`
  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`;
