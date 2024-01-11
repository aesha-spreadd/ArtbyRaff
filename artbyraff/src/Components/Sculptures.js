import React, { useState } from 'react';
import {
  SculpturesSection,
  SculpturesContainer,
  SculpturesInnerWrapper,
  SculpturesHandprintingHeadingTitle,
  SculpturesHandprintingHeadingParagraph,
  CardDetailsImageCircle,
  SculpturesCardDetails,
  SculpturesHandPrintingCardsContent,
  AddToCartBtn,
} from '../Css/SculpturesStyles';
import {
  HandprintingHeadingPart,
  HandprintingHeading,
  HandPrintingProducts,
  HandPrintingCards,
  CardDetailsBox,
  CardDetailsImage,
  CardDetailsMoreInfo,
  CardProductName,
  CardProductPrice,
  CardProductCategory,
  CardProductDescription,
  ButtonWrapper,
  HandPrintButton,
} from '../Css/OriginalsStyled';

const Sculptures = () => {
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  const handleLoadMoreClick = () => {
    setShowLoadMoreButton(!showLoadMoreButton);
  };
  return (
    <div id="sculpturessection">
      <SculpturesSection>
        <SculpturesInnerWrapper>
          <SculpturesContainer>
            <HandprintingHeadingPart>
              <HandprintingHeading>
                <SculpturesHandprintingHeadingTitle>
                  SCULPTURES &
                </SculpturesHandprintingHeadingTitle>
                <SculpturesHandprintingHeadingParagraph>
                  FURNITURE
                </SculpturesHandprintingHeadingParagraph>
              </HandprintingHeading>
            </HandprintingHeadingPart>
            <HandPrintingProducts>
              <HandPrintingCards>
                <SculpturesHandPrintingCardsContent>
                  <SculpturesCardDetails>
                    <CardDetailsBox>
                      <CardDetailsImageCircle>
                        <img
                          src="https://artbyraff.com/wp-content/uploads/2023/06/image00008-768x764.jpeg"
                          alt="Sculpture-painting"
                        />
                      </CardDetailsImageCircle>
                      <CardDetailsMoreInfo>
                        <CardProductName>
                          Untitled 202III – Series
                        </CardProductName>
                        <CardProductPrice>sold</CardProductPrice>
                        <CardProductCategory>
                          MATERIAL : MIXED MEDIA ON CANVAS
                        </CardProductCategory>
                        <CardProductDescription>
                          100 x 100 CM
                        </CardProductDescription>
                        <AddToCartBtn>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="prefix__shopping-basket"
                            width="20"
                            height="20"
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
                        </AddToCartBtn>
                      </CardDetailsMoreInfo>
                    </CardDetailsBox>
                  </SculpturesCardDetails>
                  <SculpturesCardDetails>
                    <CardDetailsBox>
                      <CardDetailsImage>
                        <img
                          src="https://artbyraff.com/wp-content/uploads/2023/06/image00008-768x764.jpeg"
                          alt="Sculpture-painting"
                        />
                      </CardDetailsImage>
                      <CardDetailsMoreInfo>
                        <CardProductName>
                          Untitled 202III – Series
                        </CardProductName>
                        <CardProductPrice>sold</CardProductPrice>
                        <CardProductCategory>
                          MATERIAL : MIXED MEDIA ON CANVAS
                        </CardProductCategory>
                        <CardProductDescription>
                          100 x 100 CM
                        </CardProductDescription>
                        <AddToCartBtn>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="prefix__shopping-basket"
                            width="20"
                            height="20"
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
                        </AddToCartBtn>
                      </CardDetailsMoreInfo>
                    </CardDetailsBox>
                  </SculpturesCardDetails>
                </SculpturesHandPrintingCardsContent>
              </HandPrintingCards>
            </HandPrintingProducts>
          </SculpturesContainer>
          <HandPrintButton>
            {showLoadMoreButton && (
              <ButtonWrapper onClick={handleLoadMoreClick}>
                Load More
              </ButtonWrapper>
            )}
          </HandPrintButton>
        </SculpturesInnerWrapper>
      </SculpturesSection>
    </div>
  );
};

export default Sculptures;
