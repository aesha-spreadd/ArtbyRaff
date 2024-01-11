import React from 'react';
import {
  AboutPageContainer,
  AboutPageSection,
  AboutPageLeftInner,
  AboutPageInner,
  ImageWrapper,
  AboutPageRightInner,
  AboutPageData,
  AboutPageHeading,
  AboutPageParagraph,
  AboutPageSignature,
  AboutPageSignatureBlock,
  AboutPageName,
} from '../Css/AboutStyled';
import AboutUsFooter from './AboutUsFooter';

const About = () => {
  return (
    <div>
      <AboutPageSection>
        <AboutPageContainer>
          <AboutPageInner>
            <AboutPageLeftInner>
              <ImageWrapper>
                <img
                  src={
                    'https://artbyraff.com/wp-content/uploads/2020/06/aboutImage.png'
                  }
                  alt="iPhone"
                />
              </ImageWrapper>
            </AboutPageLeftInner>
            <AboutPageRightInner>
              <AboutPageData />
              <AboutPageHeading>About Me</AboutPageHeading>
              <AboutPageParagraph>
                I am a self-taught Viennese artist. Since my early childhood, I
                have been involved in making graphic art. I have experimented
                with pretty much any material and technique there is. I love to
                mix a wide variety of materials from sprays, acrylics to chalk,
                colored pencils and more. Thats are my preferred media because
                they allow me to work flexibly and intuitively. My style is
                strongly oriented on form and color. I draw inspiration from
                everyday life and my surroundings. It is especially important to
                me that my art is approachable and that it reflects life. I want
                to draw the viewer in with intriguing combinations of shapes and
                colors and evoke feelings of joy and pleasure.
              </AboutPageParagraph>
              <AboutPageSignatureBlock>
                <AboutPageName>RAFFAELLO DJORDJEVIC</AboutPageName>
                <AboutPageSignature>
                  <img
                    src="https://artbyraff.com/wp-content/uploads/2020/07/logo.png"
                    alt="signaturelogo"
                  />
                </AboutPageSignature>
              </AboutPageSignatureBlock>
            </AboutPageRightInner>
          </AboutPageInner>
        </AboutPageContainer>
        <AboutUsFooter />
      </AboutPageSection>
    </div>
  );
};

export default About;
