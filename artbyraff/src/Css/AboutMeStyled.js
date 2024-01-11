import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyled';

export const AboutMeSection = styled.div`
  overflow: hidden;
`;

export const AboutMeInnerWrapper = styled.div`
  margin: 110px 0 0;
  background: url('https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgIntroduction.jpg');
  max-height: 682px;
  height: auto;
  background-position: center center;
  background-size: 100% auto;
  transition: 0.4s ease-in-out;
`;

export const AboutMeContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  height: 500px;
  margin: 0 auto;

  @media (max-width: 776px) {
    height: 300px;
  }
`;

export const AboutMeHandprintingHeadingPart = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const AboutMeHandprintingHeading = styled.div`
  margin: 26px;
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;
  text-align: center;
`;

export const AboutMeHandprintingHeadingTitle = styled.p`
  font-family: 'Graphik-Semibold';
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-transform: uppercase;
  color: #1c1b1c;
  margin: 0 auto;
  position: relative;
  right: 236px;
  top: -113px;

  @media (max-width: 776px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 0.52;
    color: #1c1b1c;
    right: -122px;
  }
`;

export const AboutMeHandprintingHeadingParagraph = styled.h2`
  font-family: 'Graphik-Super';
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  text-transform: uppercase;
  color: #4b4b4b;
  margin: 0 auto;
  position: relative;
  right: 82px;
  top: -120px;

  @media (max-width: 776px) {
    font-size: 28px;
    line-height: 0.96;
    letter-spacing: 5.32px;
    color: #4b4b4b;
    right: -122px;
  }

  @media (max-width: 420px) {
    right: -25px;
  }
`;

export const AboutMeInnerContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const AboutMeContent = styled.div`
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;
  margin: -120px 0 0 0;
`;

export const AboutMeDescription = styled.p`
  border-left: 5px solid #d8cf91;
  margin: 80px auto 0 150px;
  padding: 0 0 0 67px;
  max-width: 967px;
  width: 100%;
  font-family: Graphik-Light;
  font-size: 19px;
  font-weight: 300;
  line-height: 1.77;
  text-align: left;
  color: #d8d8d8;

  @media (max-width: 776px) {
    max-width: 450px;
    width: 100%;
    margin: 25px auto 0 60px;
    padding: 0 0 0 25px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.93;
  }

  @media (max-width: 420px) {
    max-width: 200px;
    width: 100%;
    margin: 25px auto 0 60px;
    padding: 0 0 0 25px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.93;
  }
`;

export const AboutMeParagraph = styled.p``;
