import React from 'react';
import {
  AboutUsFooterConatiner,
  AboutUsFooterSection,
  AboutUsFooterContent,
  AboutUsFooterMainContent,
} from '../Css/AboutUsFooterStyled';

const AboutUsFooter = () => {
  return (
    <div>
      <AboutUsFooterSection>
        <AboutUsFooterConatiner>
          <AboutUsFooterContent>
            <AboutUsFooterMainContent>
              © 2024 ArtbyRaff
            </AboutUsFooterMainContent>
          </AboutUsFooterContent>
        </AboutUsFooterConatiner>
      </AboutUsFooterSection>
    </div>
  );
};

export default AboutUsFooter;
