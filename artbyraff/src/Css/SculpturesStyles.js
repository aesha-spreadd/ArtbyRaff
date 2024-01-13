import styled from 'styled-components';

export const SculpturesSection = styled.div`
  overflow: hidden;
`;

export const SculpturesInnerWrapper = styled.div`
  background: url('https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgPrintArt.jpg');
  background-position: center;
  background-size: 100% auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1185px;
  width: 100%;
`;

export const SculpturesHandprintingHeadingTitle = styled.h2`
  font-family: 'Graphik-Super';
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  text-align: right;
  text-transform: uppercase;
  color: #4b4b4b;
  position: relative;
  right: 145px;
  top: -20px;

  @media (max-width: 1024px) {
    right: 66px;
    top: -17px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    right: 152px;
    top: 34px;
  }

  @media (max-width: 576px) {
    font-size: 38px;
    letter-spacing: 0;
    right: 68px;
    top: 34px;
  }
`;

export const SculpturesHandprintingHeadingParagraph = styled.p`
  margin: 0 0 40px 0;
  font-family: Graphik-Super;
  font-size: 102px;
  font-weight: 600;
  line-height: 0.51;
  text-align: right;
  text-transform: uppercase;
  color: #4b4b4b;
  position: relative;
  left: -560px;
  top: -79px;

  @media (max-width: 1024px) {
    left: -350px;
    top: -166px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    left: -345px;
    top: 14px;
  }

  @media (max-width: 576px) {
    font-size: 38px;
    letter-spacing: 0;
    left: -80px;
    top: 14px;
  }
`;

export const CardDetailsImageCircle = styled.div`
  position: absolute;
  top: -60px;
  left: -40px;
  z-index: 2;
  min-width: 247px;
  min-height: 362px;

  img {
    border-radius: 50%;
    min-height: 305px;
    max-height: 305px;
    max-width: 247px;
    min-width: 247px;
  }

  @media (max-width: 768px) {
    left: -55px;

    img {
      max-height: 130px;
      max-width: 202px;
    }
  }
`;

export const SculpturesCardDetails = styled.div`
  border: 1px solid #ddd;
  margin: 33px 70px 64px 0;
  width: 16%;
  min-width: 220px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease, all 0.4s ease-in-out;

  &:hover {
    border-color: #d8cf91;
    transform: translateY(-30px);
  }

  @media (max-width: 768px) {
    width: 19%;
    min-width: 210px;
    min-height: 362px;
    margin: 33px 30px 106px 105px;
  }
`;

export const SculpturesHandPrintingCardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -50px 0 0 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 0 12px;
  }

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 43px 0 0 -56px;
  }
`;

export const AddToCartBtn = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  border: 1px solid #d8cf91;
  padding: 5px 8.2px 6px;

  &:hover {
    background: #d8cf91;
  }
`;
