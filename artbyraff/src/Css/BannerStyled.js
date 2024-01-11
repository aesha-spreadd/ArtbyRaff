import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyled';

export const HomePageBannerSection = styled.div`
  position: relative;
`;

export const HomePageInnerWrapper = styled.div`
  background: url('https://artbyraff.com/wp-content/uploads/2021/03/820870D6-04C6-4081-B048-A2B6C3FBAE51.jpg');
  max-width: 100%;
  height: 720px;
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 773px;
`;

export const AboutMeButton = styled.div`
  display: flex;
  align-items: center !important;
  flex-direction: row-reverse !important;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const InputButton = styled.button`
  font-family: 'Graphik-Bold';
  font-size: 16px;
  font-weight: bold;
  line-height: 2.31;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #fff;
  border-radius: 34px;
  padding: 18px 67px;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 991px) {
    font-size: 14px;
    padding: 11px 67px;
  }
`;

export const SlidinFarrow = styled.div`
  display: flex;
  justify-content: center;
  background-color: #151515;
`;

export const ArrowMove = styled.div`
  padding: 25px 17px 22px;
  background: #fff;
  border-radius: 30px;
  opacity: 0.4;
`;
