import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  OriginalsContainer,
  OriginalsSection,
  OriginalHandprintingInner,
  HandprintingHeadingPart,
  HandprintingHeadingTitle,
  HandprintingHeading,
  HandprintingHeadingParagraph,
  HandPrintingProducts,
  HandPrintingCards,
  HandPrintingCardsContent,
  CardDetails,
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

import { AddToCartBtn } from '../Css/SculpturesStyles';

import { cardsData } from '../Data/Card';

const Originals = ({ cardsData }) => {
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  const handleLoadMoreClick = () => {
    setShowLoadMoreButton(!showLoadMoreButton);
  };
  return (
    <div id="originalssection">
      <OriginalsSection>
        <OriginalHandprintingInner>
          <OriginalsContainer>
            <HandprintingHeadingPart>
              <HandprintingHeading>
                <HandprintingHeadingTitle>Originals</HandprintingHeadingTitle>
                <HandprintingHeadingParagraph>
                  On Canvas
                </HandprintingHeadingParagraph>
              </HandprintingHeading>
            </HandprintingHeadingPart>
            <HandPrintingProducts>
              <HandPrintingCards>
                <HandPrintingCardsContent>
                  {cardsData.map((card, index) => (
                    <CardDetails key={index}>
                      <CardDetailsBox>
                        <CardDetailsImage>
                          <img src={card.imageSrc} alt={`Card ${index}`} />
                        </CardDetailsImage>
                        <CardDetailsMoreInfo>
                          <CardProductName>{card.productName}</CardProductName>
                          <CardProductPrice>
                            {card.productPrice}
                          </CardProductPrice>
                          <CardProductCategory>
                            {card.productCategory}
                          </CardProductCategory>
                          <CardProductDescription>
                            {card.productDescription}
                          </CardProductDescription>
                          {card.addToCartbtn && (
                            <AddToCartBtn>{card.addToCartbtn}</AddToCartBtn>
                          )}
                        </CardDetailsMoreInfo>
                      </CardDetailsBox>
                    </CardDetails>
                  ))}
                </HandPrintingCardsContent>
              </HandPrintingCards>
            </HandPrintingProducts>
          </OriginalsContainer>
          <HandPrintButton>
            {showLoadMoreButton && (
              <ButtonWrapper onClick={handleLoadMoreClick}>
                Load More
              </ButtonWrapper>
            )}
          </HandPrintButton>
        </OriginalHandprintingInner>
      </OriginalsSection>
    </div>
  );
};

Originals.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      productPrice: PropTypes.string.isRequired,
      productCategory: PropTypes.string.isRequired,
      productDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Originals;
