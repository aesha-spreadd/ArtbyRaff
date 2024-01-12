import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const ContactSection = styled.div``;

export const ContactInnerWrapper = styled.div`
  background: url('https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgContactform.jpg');
  height: 100%;
  background-position: center center;
  background-size: 100% auto;
  padding: 60px 0 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1009px;
  width: 100%;
`;

export const ContactFormMain = styled.div``;

export const ConatctHeadingPart = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const ContactMainHeading = styled.p`
  font-family: 'Graphik-Black';
  font-size: 84px;
  font-weight: 900;
  line-height: 0.54;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  top: 40px;
  color: #1c1b1c;

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 1.43;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const ContactMainParagraph = styled.p`
  position: relative;
  z-index: 1;
  margin: -71px 20px 0 58px;
  font-family: Graphik-Black;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.71;
  text-align: center;
  text-transform: uppercase;
  color: #e8e3e8;
  max-width: 850px;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 1.43;
  }
`;

export const ContactFormDataPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const ContactFormData = styled.div`
  max-width: 990px;
  width: 100%;
`;

export const ContactFormDataHeading = styled.p`
  font-family: 'Graphik-Light';
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #a2a2a2;
  margin: 30px 0 70px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 2.57;
    margin: 10px 0 0;
  }
`;

export const ContactText = styled.p`
  margin: 0;

  @media (max-width: 767px) {
    margin: 10px 32px;
  }
`;

export const SpanText = styled.span`
  font-family: 'Graphik-light';
  font-size: 26px;
  line-height: 2.5;
  text-align: center;
  color: #e8e3e8;
  margin: 0 2px;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 10px 2px;
  }
`;

export const ContactTextWrapName = styled.div`
  position: relative;
  display: inline;
`;

export const Input = styled.input`
  background: transparent;
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  padding: 0;
  border-bottom: 1px solid #d8cf91;
  position: relative;
  bottom: 10px;
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
  text-transform: uppercase;
  color: #979797;

  &:focus {
    outline: none;
    border: transparent;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ContactFooterMain = styled.div`
  width: 100%;
`;

export const ContactFooter = styled.div``;

export const ContactFooterPart = styled.div`
  padding: 4px 0 63px;
  border-bottom: 1px solid #6d6d6d;

  @media (max-width: 991px) {
    padding: 23px 0 240px 32px;
  }
`;

export const ContactLeftInner = styled.div`
  @media (min-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
  }
`;

export const ContactFooterBox = styled.div``;

export const FooterLogo = styled.div`
  display: inline-block;
  vertical-align: middle;

  img {
    max-width: 190px;
    width: 100%;
  }
`;

export const FooterMainLink = styled.div`
  box-sizing: border-box;
`;

export const FooterLink = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 0 0 19px;
  }
`;

export const FooterName = styled.p`
  font-family: 'Graphik-Light';
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  color: #d5d5d5;
  margin: 0 28px 0 0;
  cursor: pointer;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const FooterContactInfo = styled.div`
  font-family: 'Graphik-Light';
  font-size: 16px;
  font-weight: 300;
  line-height: 2.5;
  text-align: left;
  margin: 5px 0 0 20px;
  color: #d5d5d5;
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`;

export const FooterDescription = styled.div``;

export const FooterMail = styled.div``;

export const FooterHed = styled.div`
  font-family: 'Graphik-Medium';
  font-size: 29px;
  font-weight: 500;
  line-height: 1.83;
  text-align: left;
  text-transform: capitalize;
  margin: 40px 0 0;
  color: #ffffff;

  @media (max-width: 767px) {
    font-family: 'Graphik-Medium';
    font-size: 22px;
    font-weight: 500;
    line-height: 1.83;
    margin: 0 0 0 19px;
  }
`;

export const FooterEmailData = styled.div`
  height: 50px;
  background: transparent;
  color: #000;
  position: relative;
  margin: 0;
  border-bottom: 1px solid #fff;

  @media (max-width: 767px) {
    margin: 0 0 0 19px;
  }
`;

export const InputWithEmail = styled.input`
  font-family: 'Graphik-Light';
  background: transparent;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #6f6f6f;
  border-right: transparent;
  border-left: transparent;
  border-top: transparent;
  border-bottom: transparent;
  width: 100%;

  &:focus {
    outline: none;
    border: transparent;
  }
`;

export const InputBtn = styled.div`
  padding: 0;
  background-image: url('https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/newsletter-aero.svg');
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 30px;
  width: 100%;
  height: 50px;
`;

export const ContactRightInner = styled.div`
  @media (min-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
  }
`;

export const ContactBoxRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: -200px 0 0 1020px;
`;

export const ContactBoxRightDescription = styled.div`
  font-family: 'Graphik-Light';
  font-size: 16px;
  font-weight: 300;
  text-align: right;
  margin: 49px 24px 0 0px;
  color: #d5d5d5;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const DescriptionHed = styled.div``;

export const DescriptionEmail = styled.p`
  max-width: 300px;
  width: 100%;
  max-height: 120px;
  white-space: nowrap;
`;

export const ContactIcons = styled.div`
  display: flex;
  margin: -10px 19px 0 0;

  @media (max-width: 991px) {
    align-items: flex-start;
    margin: 30px 0 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 60px 0 0;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const InputCheckbox = styled.input``;

export const CheckBoxInner = styled.div``;

export const FacebookIcon = styled(FaFacebook)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 30px;
  height: 30px;
  color: #e4405f;
`;

export const ContactFormBtn = styled.div``;

export const InputButton = styled.button`
  float: right;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 15px;
  margin: -50px 0 0;
  padding: 18px 45px;
  text-transform: uppercase;
  cursor: pointer;

  &::hover {
    border: 1px solid #7e7555;
  }

  @media (max-width: 767px) {
    padding: 13px 35px;
  }
`;
