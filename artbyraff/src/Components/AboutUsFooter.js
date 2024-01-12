import React from 'react';
import {
  Conatiner,
  AboutUsFooterSection,
  AboutUsFooterContent,
  AboutUsFooterMainContent,
} from '../Css/AboutUsFooterStyled';

const AboutUsFooter = () => {
  return (
    <div>
      <AboutUsFooterSection>
        <Conatiner>
          <AboutUsFooterContent>
            <AboutUsFooterMainContent>
              © 2024 ArtbyRaff
            </AboutUsFooterMainContent>
          </AboutUsFooterContent>
        </Conatiner>
      </AboutUsFooterSection>
    </div>
  );
};

export default AboutUsFooter;
