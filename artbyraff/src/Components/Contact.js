import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {
  FooterSection,
  FooterContent,
  CopyText,
  FooterText,
  DesignDevelopeText,
  HeartIcon,
} from '../Css/FooterStyled';
import {
  ContactSection,
  ContactInnerWrapper,
  Container,
  ContactFormMain,
  ConatctHeadingPart,
  ContactMainHeading,
  ContactMainParagraph,
  ContactFormDataPart,
  ContactFormData,
  ContactFormDataHeading,
  ContactText,
  ContactTextWrapName,
  Input,
  ContactFooter,
  ContactFooterMain,
  ContactFooterPart,
  ContactLeftInner,
  ContactFooterBox,
  FooterLogo,
  FooterMainLink,
  FooterLink,
  FooterName,
  FooterContactInfo,
  FooterDescription,
  FooterMail,
  FooterHed,
  FooterEmailData,
  InputWithEmail,
  InputBtn,
  ContactRightInner,
  ContactBoxRight,
  ContactBoxRightDescription,
  DescriptionHed,
  DescriptionEmail,
  IconWrapper,
  FacebookIcon,
  ContactIcons,
  InstagramIcon,
  SpanText,
  InputCheckbox,
  CheckBoxInner,
  ContactFormBtn,
  InputButton,
} from '../Css/ContactStyled';

const Contact = () => {
  return (
    <div id="contactsection">
      <ContactSection>
        <ContactInnerWrapper>
          <ContactFormMain>
            <Container>
              <ConatctHeadingPart>
                <ContactMainHeading>COMMISSIONS</ContactMainHeading>
                <ContactMainParagraph>
                  ARE YOU INTERESTED IN PURCHASING A VERY SPECIAL PIECE?
                </ContactMainParagraph>
              </ConatctHeadingPart>
              <ContactFormDataPart>
                <ContactFormData>
                  <ContactFormDataHeading>
                    Drop your contact details here. We will connect you back !!
                  </ContactFormDataHeading>

                  <ContactText>
                    <SpanText> What is your </SpanText>
                    <ContactTextWrapName>
                      <Input
                        type="text"
                        name="your-name"
                        id="your-name"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name*"
                      />
                    </ContactTextWrapName>
                    <SpanText> ? </SpanText>
                    <SpanText> What is your </SpanText>
                    <ContactTextWrapName>
                      <Input
                        type="text"
                        name="your-name"
                        id="your-name"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Telephone Number"
                      />
                    </ContactTextWrapName>
                    <SpanText> ? </SpanText>
                    <SpanText> What is your </SpanText>
                    <ContactTextWrapName>
                      <Input
                        type="email"
                        name="your-name"
                        id="your-name"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email address*"
                      />
                    </ContactTextWrapName>
                    <SpanText> ? </SpanText>
                    <ContactTextWrapName>
                      <Input
                        type="email"
                        name="your-name"
                        id="your-name"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Is there anything else what you want to say?"
                      />
                    </ContactTextWrapName>
                    <CheckBoxInner>
                      <ContactTextWrapName>
                        <InputCheckbox
                          type="checkbox"
                          name="accept-privacy-policy"
                          id="accept-privacy-policy"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </ContactTextWrapName>
                      <SpanText> Accept privacy policy</SpanText>
                    </CheckBoxInner>
                    <ContactFormBtn>
                      <ContactFormBtn>
                        <InputButton type="button">Send Request</InputButton>
                      </ContactFormBtn>
                    </ContactFormBtn>
                  </ContactText>
                </ContactFormData>
              </ContactFormDataPart>
            </Container>
          </ContactFormMain>

          <ContactFooter>
            <ContactFooterMain>
              <Container>
                <ContactFooterPart>
                  <ContactLeftInner>
                    <ContactFooterBox>
                      <FooterLogo>
                        <img
                          src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                          alt="artbyrafflogo"
                        />
                      </FooterLogo>
                      <FooterMainLink>
                        <FooterLink>
                          <FooterName>About Me</FooterName>
                          <FooterName>Privacy Policy</FooterName>
                          <FooterName>Imprint</FooterName>
                        </FooterLink>
                      </FooterMainLink>
                    </ContactFooterBox>
                    <FooterContactInfo>
                      <FooterDescription>
                        Raffaello Djordjevic
                      </FooterDescription>
                      <FooterMail>E-Mail: raffaello@artbyraff.com</FooterMail>
                    </FooterContactInfo>
                    <FooterHed>Subscribe Newsletter</FooterHed>
                    <FooterEmailData>
                      <InputWithEmail
                        type="email"
                        name="your-name"
                        id="your-name"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name*"
                      />
                      <InputBtn />
                    </FooterEmailData>
                  </ContactLeftInner>
                  <ContactRightInner>
                    <ContactBoxRight>
                      <ContactBoxRightDescription>
                        <DescriptionHed>Raffaello Djordjevic</DescriptionHed>
                        <DescriptionEmail>
                          E-Mail: raffaello@artbyraff.com
                        </DescriptionEmail>
                      </ContactBoxRightDescription>
                      <ContactIcons>
                        <IconWrapper>
                          <FacebookIcon />
                          <InstagramIcon />
                        </IconWrapper>
                      </ContactIcons>
                    </ContactBoxRight>
                  </ContactRightInner>
                </ContactFooterPart>
              </Container>
            </ContactFooterMain>
          </ContactFooter>
          <FooterSection>
            <Container>
              <FooterContent>
                <FooterText>
                  <CopyText>© 2024 ArtbyRaff</CopyText>
                </FooterText>
                <FooterText>
                  <HeartIcon />
                  <DesignDevelopeText>
                    Designed and developed by Appsandmore24
                  </DesignDevelopeText>
                </FooterText>
              </FooterContent>
            </Container>
          </FooterSection>
        </ContactInnerWrapper>
      </ContactSection>
    </div>
  );
};

export default Contact;
