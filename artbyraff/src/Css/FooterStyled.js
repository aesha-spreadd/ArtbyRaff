import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const FooterSection = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 14px 0;

  @media (max-width: 992px) {
    padding: 45px 0;
  }
`;

export const Container = styled.div`
  max-width: 1128px;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 776px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 776px) {
    flex: 0 0 auto;
    max-width: 100%;
    width: auto;
  }
`;

export const CopyText = styled.p`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #d5d5d5;

  @media (max-width: 776px) {
    line-height: 0;
  }
`;

export const DesignDevelopeText = styled.p`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #d5d5d5;

  @media (max-width: 776px) {
    line-height: 0;
  }
`;

export const HeartIcon = styled(FaHeart)`
  color: #ff0000;
  margin: 0 5px 0 0;
  width: 16px;
  height: 16px;
`;
