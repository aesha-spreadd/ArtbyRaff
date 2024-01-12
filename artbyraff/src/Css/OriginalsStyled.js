import styled from 'styled-components';

export const OriginalsSection = styled.div`
  overflow: hidden;
`;

export const OriginalHandprintingInner = styled.div`
  background: url('https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgHandPainting.jpg')
    no-repeat;
  height: auto;
  background-position: right center;
  background-size: 100% auto;
  padding: 0 0 50px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1185px;
  width: 100%;
`;

export const HandprintingHeadingPart = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -60px 17px 0 0;
`;

export const HandprintingHeading = styled.div`
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;

  @media (max-width: 767px) {
    margin: 0 -65px 0 0;
  }
`;

export const HandprintingHeadingTitle = styled.h2`
  font-family: 'Graphik-Super';
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  text-align: right;
  text-transform: uppercase;
  color: #4b4b4b;
  position: relative;
  right: 39px;
  top: -20px;

  @media (max-width: 767px) {
    font-size: 42px;
    right: 59px;
    top: 26px;
    letter-spacing: 18.38px;
  }
`;

export const HandprintingHeadingParagraph = styled.p`
  margin: 0 0 40px 0;
  font-family: 'Graphik-Semibold';
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: right;
  text-transform: uppercase;
  color: #6f6c64;
  position: relative;
  right: 65px;
  top: -96px;

  @media (max-width: 767px) {
    font-size: 42px;
    right: 79px;
    top: 11px;
  }
`;

export const HandPrintingProducts = styled.div`
  box-sizing: border-box;
`;

export const HandPrintingCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px 0 30px;
`;

export const HandPrintingCardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -50px 0 0 0;

  @media (max-width: 1024px) {
    margin: -50px 0 0 80px;
  }

  @media (max-width: 767px) {
    margin: 50px 0 0 84px;
  }

  @media (max-width: 575px) {
    margin: 50px 0 0 42px;
  }
`;

export const CardDetails = styled.div`
  border: 1px solid #ddd;
  margin: 33px 64px 64px 0;
  width: 16%;
  min-width: 220px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease, all 0.4s ease-in-out;

  &:hover {
    border-color: #d8cf91;
    transform: translateY(-30px);
  }

  @media (max-width: 767px) {
    width: 19%;
    min-width: 210px;
    min-height: 362px;
    margin: 33px 30px 64px 30px;
  }
`;

export const CardDetailsBox = styled.div`
  text-align: center !important;
`;

export const CardDetailsImage = styled.div`
  position: absolute;
  top: -60px;
  left: -30px;
  z-index: 2;
  min-height: 250px;
  max-height: 250px;
  max-width: 247px;
  min-width: 247px;

  img {
    min-height: 300px;
    max-height: 305px;
    max-width: 230px;
    min-width: 190px;
  }

  @media (max-width: 767px) {
    left: -55px;

    img {
      max-height: 130px;
      max-width: 202px;
    }
  }
`;

export const CardDetailsMoreInfo = styled.div`
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin: 250px 0 0;
`;

export const CardProductName = styled.h4`
  font-family: 'Graphik-light';
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const CardProductPrice = styled.h3`
  font-family: 'Graphik-Bold';
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const CardProductCategory = styled.h3`
  font-family: 'Graphik-light';
  font-size: 14px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  max-width: 100%;
  width: 80%;
`;

export const CardProductDescription = styled.p`
  margin: 5px 0 0;
  font-family: 'Graphik-light';
  font-size: 14px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  max-width: 100%;
  width: 80%;
`;

export const HandPrintButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 0 20px 0;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  font-family: 'Graphik-Bold';
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 15px 30px;
  width: 200px;
  color: #fff;
`;
