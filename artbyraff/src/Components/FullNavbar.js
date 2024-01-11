import React from 'react';
import { MdClose } from 'react-icons/md';
import {
  FullMenuSection,
  Container,
  FullMenuHeader,
  CloseIconLeft,
  CloseIcon,
  SpanText,
  ArtByImage,
  FullMenuMainContent,
  FullMenuContent,
  FullMenuIcon,
  FullMenuSocialIcon,
  FacebookIcon,
  InstagramIcon,
} from '../Css/FullNavbarStyled';
import { Link } from 'react-router-dom';

const FullNavbar = () => {
  return (
    <div>
      <FullMenuSection>
        <Container>
          <FullMenuHeader>
            <CloseIconLeft>
              <Link to="/header">
                <CloseIcon>
                  <MdClose />
                </CloseIcon>
              </Link>
              <SpanText>Close</SpanText>
            </CloseIconLeft>
            <ArtByImage>
              <img
                src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                alt="artbyrfflogo"
              />
            </ArtByImage>
          </FullMenuHeader>
          <FullMenuContent>
            <FullMenuMainContent>
              <ul>
                <li>About Me</li>
                <li>Handmade</li>
                <li>Sculptures & Furniture</li>
                <li>Contact</li>
              </ul>
            </FullMenuMainContent>
          </FullMenuContent>
          <FullMenuIcon>
            <FullMenuSocialIcon>
              <FacebookIcon />
              <InstagramIcon />
            </FullMenuSocialIcon>
          </FullMenuIcon>
        </Container>
      </FullMenuSection>
    </div>
  );
};

export default FullNavbar;
