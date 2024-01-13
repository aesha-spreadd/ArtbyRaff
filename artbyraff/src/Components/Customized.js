import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CustomSlide,
  CustomSlideContent,
  CustomSlideImage,
  StyledNextArrow,
  CustomSlideContentAll,
  StyledPrevArrow,
  NameOverlay,
  CustomizedSection,
  NameText,
  Container,
  CustomizedBanner,
  CustomizedHeading,
} from '../Css/CustomizedStyled';

const data = [
  {
    name: `"John Morgan"`,
    img: 'https://artbyraff.com/wp-content/uploads/2021/01/IMG_1552-768x783.jpg',
  },
  {
    name: `"JP Morgan"`,
    img: 'https://artbyraff.com/wp-content/uploads/2021/01/IMG_1552-768x783.jpg',
  },
  {
    name: `"Ellie Anderson"`,
    img: 'https://artbyraff.com/wp-content/uploads/2021/01/IMG_1552-768x783.jpg',
  },
  {
    name: `"Nia Adebayo"`,
    img: 'https://artbyraff.com/wp-content/uploads/2021/01/IMG_1552-768x783.jpg',
  },
  {
    name: `"Rigo Louie"`,
    img: 'https://artbyraff.com/wp-content/uploads/2023/06/image00008-768x764.jpeg',
  },
  {
    name: `"Mia Williams"`,
    img: 'https://artbyraff.com/wp-content/uploads/2021/01/IMG_1552-768x783.jpg',
  },
  {
    name: `"Myra Williams"`,
    img: 'https://artbyraff.com/wp-content/uploads/2021/01/IMG_1552-768x783.jpg',
  },
];

const Customized = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    console.log('Next index:', next);
    setCenterIndex(next);
  };

  const calculateImageOpacity = (currentIndex, slideIndex) => {
    return currentIndex === slideIndex ? 1 : 0.5;
  };

  const settings = {
    dots: false,
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
  };

  useEffect(() => {
    setCenterIndex(settings.initialSlide);
  }, [settings.initialSlide]);

  return (
    <div id="customizessection">
      <CustomizedSection>
        <Container>
          <CustomizedBanner>
            <CustomizedHeading>„ customized “</CustomizedHeading>
          </CustomizedBanner>
          <Slider {...settings}>
            {data.map((d, index) => (
              <CustomSlide key={d.name}>
                <CustomSlideContent>
                  <CustomSlideContentAll isActive={index === centerIndex}>
                    <CustomSlideImage
                      style={{
                        opacity: calculateImageOpacity(centerIndex, index),
                      }}
                    >
                      <img src={d.img} alt="" />
                    </CustomSlideImage>
                    {index === centerIndex && (
                      <NameOverlay>
                        <NameText>{d.name}</NameText>
                      </NameOverlay>
                    )}
                  </CustomSlideContentAll>
                </CustomSlideContent>
              </CustomSlide>
            ))}
          </Slider>
        </Container>
      </CustomizedSection>
    </div>
  );
};

export default Customized;
