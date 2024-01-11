import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import { SlArrowDown } from 'react-icons/sl';
import { cardsData } from '../Data/Card';
import Contact from './Contact';
import {
  HomePageBannerSection,
  HomePageInnerWrapper,
  Container,
  AboutMeButton,
  InputButton,
  SlidinFarrow,
  ArrowMove,
} from '../Css/BannerStyled';
import Originals from './Originals';
import Sculptures from './Sculptures';

const Banner = () => {
  const handleScroll = () => {
    const aboutMeSection = document.getElementById('aboutMeSection');
    if (aboutMeSection) {
      const offsetTop = aboutMeSection.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HomePageBannerSection>
        <Header />
        <HomePageInnerWrapper>
          <Container>
            <AboutMeButton>
              <InputButton type="button">About Me</InputButton>
            </AboutMeButton>
          </Container>
        </HomePageInnerWrapper>
      </HomePageBannerSection>
      <SlidinFarrow>
        <ArrowMove onClick={handleScroll}>
          <SlArrowDown />
        </ArrowMove>
      </SlidinFarrow>

      <div id="aboutMeSection">
        <AboutMe />
      </div>
      <Originals cardsData={cardsData} />
      <Sculptures />
      <Contact />
    </div>
  );
};

export default Banner;
