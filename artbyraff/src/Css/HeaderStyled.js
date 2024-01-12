import styled, { css } from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const HeaderSection = styled.div`
  position: relative;
`;

export const HeaderLogoSection = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between !important;
  align-items: center !important;
  margin: 0 -15px;

  @media (max-width: 991px) {
    margin: -28px 21px;
  }
`;

export const HeaderLeftLink = styled.div`
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;
`;

export const HeaderToggleLogo = styled.div`
  padding: 0;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

export const HeaderMainLogo = styled.div`
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;
`;

export const HeaderArtByMainLogo = styled.div`
  img {
    margin: 45px 0 0;
    max-width: 202px;
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const HeaderRightIcon = styled.div`
  flex: 0 0 auto;
  max-width: 100%;
  width: auto;
`;

export const HeaderCartMain = styled.div`
  box-sizing: border-box;
  width: 53px;
  height: 53px;
  padding: 19px 15px 20px;
  border-radius: 50px;
  margin: 0 0 -86px 0;
  background-color: #272727;
`;

export const ItemCount = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.33;
  text-align: left;
  color: #fff;
  background-color: #f86b2c;
  padding: 3px 6px 2px 5px;
  border-radius: 30px;
  position: absolute;
  right: 56px;
  bottom: 17px;
  width: 12px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    position: absolute;
    right: 20px;
    bottom: -14px;
  }
`;

export const SocialIconsSection = styled.div`
  position: absolute;
  right: 55px;
  top: 44%;

  ul {
    flex-direction: column;
  }

  li {
    margin: 20px 0;
    list-style: none;
  }

  @media (max-width: 767px) {
    position: absolute;
    right: 47px;
    top: 77%;
  }
`;

export const Icons = styled.div``;

export const FacebookIcon = styled(FaFacebook)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const RhsLinksCircle = styled.div`
  position: fixed;
  left: 15px;
  top: 40%;
  z-index: 9;
`;

export const RhsLinksList = styled.div`
  background: none;
  float: left;
  position: relative;
`;

export const RhsLinks = styled.div`
  float: left;
  display: block;
  clear: both;
`;

export const RhsLinkes = styled.div`
  cursor: pointer;
  color: #d8cf91;
  padding: 8px 20px 7px 10px;
  text-transform: uppercase;
  vertical-align: middle;
  height: 38px;
  max-width: 590px;
  width: 100%;
  margin: 0 7px 0 0;
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  display: none;
`;

export const RhsLink = styled.a`
  display: block;
  height: 38px;
  width: 1px;
  clear: left;
  float: left;
  outline: none;
  border-left: 2px solid #ddd;
  background: #ddd;

  &:hover {
    background: #f86b2c;
    ${RhsLinkes} {
      display: block;
      opacity: 1;
    }
  }
`;

export const RhsCircle = styled.div`
  float: left;
  padding: 0 6px 0 0px;
  cursor: pointer;
`;

export const RhsLinksListItem = styled.div`
  list-style: none;
`;

export const SpanLink = styled.div`
  height: 4px;
  background: transparent;
  clear: both;
`;

export const ScrollButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background-color: #1f2025;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #867557;
  }

  svg {
    color: #fff;
  }
`;
