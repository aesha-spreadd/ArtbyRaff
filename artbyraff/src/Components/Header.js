import { SlArrowUp } from 'react-icons/sl';
import {
  HeaderSection,
  Container,
  HeaderLogoSection,
  HeaderData,
  HeaderLeftLink,
  HeaderToggleLogo,
  HeaderArtByMainLogo,
  HeaderMainLogo,
  HeaderCartMain,
  HeaderRightIcon,
  ItemCount,
  SocialIconsSection,
  Icons,
  FacebookIcon,
  InstagramIcon,
  RhsCircle,
  RhsLinks,
  RhsLinksCircle,
  RhsLinksListItem,
  RhsLinksList,
  RhsLink,
  RhsLinkes,
  SpanLink,
  ScrollButtonContainer,
} from '../Css/HeaderStyled';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <HeaderSection>
        <HeaderLogoSection>
          <Container>
            <HeaderData>
              <HeaderLeftLink>
                <Link to="/fullnavbar">
                  <HeaderToggleLogo>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="16"
                      viewBox="0 0 37 16"
                    >
                      <g
                        id="prefix__Group_8703"
                        data-name="Group 8703"
                        transform="translate(-193 -53)"
                      >
                        <path
                          id="prefix__Rectangle_38"
                          d="M0 0H37V4H0z"
                          className="prefix__cls-12"
                          data-name="Rectangle 38"
                          transform="translate(193 53)"
                        ></path>
                        <path
                          id="prefix__Rectangle_39"
                          d="M0 0H23V4H0z"
                          className="prefix__cls-12"
                          data-name="Rectangle 39"
                          transform="translate(193 65)"
                        ></path>
                      </g>
                    </svg>
                  </HeaderToggleLogo>
                </Link>
              </HeaderLeftLink>
              <HeaderMainLogo>
                <HeaderArtByMainLogo>
                  <img
                    src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                    alt="artbyrfflogo"
                  />
                </HeaderArtByMainLogo>
              </HeaderMainLogo>
              <HeaderRightIcon>
                <HeaderCartMain>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="prefix__shopping-basket"
                    width="22.903"
                    height="21.001"
                    viewBox="0 0 22.903 21.001"
                  >
                    <g id="prefix__Group_14" data-name="Group 14">
                      <path
                        id="prefix__Path_5"
                        d="M289.928 25.759h2.008l-2.976-5.106a.866.866 0 1 0-1.5.875z"
                        className="prefix__cls-13"
                        data-name="Path 5"
                        transform="translate(-273.834 -20.222)"
                        fill="#fff"
                      ></path>
                      <path
                        id="prefix__Path_6"
                        d="M106.771 21.57a.866.866 0 1 0-1.5-.875l-2.971 5.111h2.008z"
                        className="prefix__cls-13"
                        data-name="Path 6"
                        transform="translate(-97.49 -20.265)"
                        fill="#fff"
                      ></path>
                      <path
                        id="prefix__Path_7"
                        d="M21.427 171.278H1.472A1.471 1.471 0 0 0 0 172.75v1.632a1.471 1.471 0 0 0 1.472 1.472h.461l1.42 7.7a2.017 2.017 0 0 0 1.867 1.627h12.168a2.017 2.017 0 0 0 1.867-1.627l1.429-7.7h.748a1.471 1.471 0 0 0 1.472-1.472v-1.632a1.477 1.477 0 0 0-1.477-1.472zm-13.3 7.692v3.32a.832.832 0 0 1-1.664 0v-4.655a.832.832 0 1 1 1.664 0zm2.671 0v3.32a.832.832 0 0 1-1.664 0v-4.655a.831.831 0 0 1 .832-.832.849.849 0 0 1 .832.832zm2.682 1.93v1.392a.832.832 0 0 1-1.664 0v-4.655a.849.849 0 0 1 .832-.832.831.831 0 0 1 .832.832zm2.671 0v1.392a.832.832 0 0 1-1.664 0v-4.655a.832.832 0 1 1 1.664 0z"
                        className="prefix__cls-13"
                        data-name="Path 7"
                        transform="translate(0 -164.175)"
                        fill="#fff"
                      ></path>
                    </g>
                  </svg>
                  <ItemCount>1</ItemCount>
                </HeaderCartMain>
              </HeaderRightIcon>
            </HeaderData>
          </Container>
        </HeaderLogoSection>
      </HeaderSection>

      <SocialIconsSection>
        <ul>
          <li>
            <Icons>
              <FacebookIcon />
            </Icons>
          </li>
          <li>
            <Icons>
              <InstagramIcon />
            </Icons>
          </li>
        </ul>
      </SocialIconsSection>

      <RhsLinksCircle className="rhs-links-circle">
        <RhsLinksList className="c">
          <RhsLinksListItem className="first">
            <RhsCircle>
              <a href="#aboutmesection">
                <RhsLink>&nbsp;</RhsLink>
              </a>
            </RhsCircle>
            <RhsLinks>
              <RhsLinkes className="section-titles">About Me</RhsLinkes>
            </RhsLinks>
            <SpanLink />
          </RhsLinksListItem>

          <RhsLinksListItem className="first">
            <RhsCircle>
              <a href="#originalssection">
                <RhsLink>&nbsp;</RhsLink>
              </a>
            </RhsCircle>
            <RhsLinks>
              <RhsLinkes className="section-titles">Handpainting</RhsLinkes>
            </RhsLinks>
            <SpanLink />
          </RhsLinksListItem>
          <RhsLinksListItem className="first">
            <RhsCircle>
              <a href="#sculpturessection">
                <RhsLink>&nbsp;</RhsLink>
              </a>
            </RhsCircle>
            <RhsLinks>
              <RhsLinkes className="section-titles">
                SCULPTURES & FURNITURE
              </RhsLinkes>
            </RhsLinks>
            <SpanLink />
          </RhsLinksListItem>
          <RhsLinksListItem className="first">
            <RhsCircle>
              <RhsLink href="/">&nbsp;</RhsLink>
            </RhsCircle>
            <RhsLinks>
              <RhsLinkes className="section-titles">CUSTOMIZED</RhsLinkes>
            </RhsLinks>
            <SpanLink />
          </RhsLinksListItem>

          <RhsLinksListItem className="first">
            <RhsCircle>
              <a href="#contactsection">
                <RhsLink>&nbsp;</RhsLink>
              </a>
            </RhsCircle>
            <RhsLinks>
              <RhsLinkes className="section-titles">Need Custom Card</RhsLinkes>
            </RhsLinks>
            <SpanLink />
          </RhsLinksListItem>
        </RhsLinksList>
      </RhsLinksCircle>

      <ScrollButtonContainer onClick={scrollToTop} isVisible={isVisible}>
        <SlArrowUp />
      </ScrollButtonContainer>
    </div>
  );
};

export default Header;
