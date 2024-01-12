import React from 'react';
import {
  Container,
  AboutMeSection,
  AboutMeInnerWrapper,
  AboutMeHandprintingHeading,
  AboutMeHandprintingHeadingParagraph,
  AboutMeHandprintingHeadingTitle,
  AboutMeHandprintingHeadingPart,
  AboutMeInnerContentWrapper,
  AboutMeContent,
  AboutMeDescription,
  AboutMeParagraph,
} from '../Css/AboutMeStyled';

const AboutMe = () => {
  return (
    <div id="aboutmesection">
      <AboutMeSection>
        <AboutMeInnerWrapper>
          <Container>
            <AboutMeHandprintingHeadingPart>
              <AboutMeHandprintingHeading>
                <AboutMeHandprintingHeadingTitle>
                  WELCOME
                </AboutMeHandprintingHeadingTitle>
                <AboutMeHandprintingHeadingParagraph>
                  ART BY RAFF
                </AboutMeHandprintingHeadingParagraph>
              </AboutMeHandprintingHeading>
            </AboutMeHandprintingHeadingPart>
            <AboutMeInnerContentWrapper>
              <AboutMeContent>
                <AboutMeDescription>
                  <AboutMeParagraph>
                    Welcome to my page. My name is Raffaello Djordevic and I am
                    a Viennese artist. I make mostly pop-arts and mixed-media
                    pieces.
                  </AboutMeParagraph>
                  <AboutMeParagraph>
                    You can purchase original works as well as prints on my
                    homepage. I also take commissions. To commission a piece,
                    just contact me via the homepage.
                  </AboutMeParagraph>
                </AboutMeDescription>
              </AboutMeContent>
            </AboutMeInnerContentWrapper>
          </Container>
        </AboutMeInnerWrapper>
      </AboutMeSection>
    </div>
  );
};

export default AboutMe;
