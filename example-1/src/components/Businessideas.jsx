import { Card, Divider, CardBody, Heading, Stack, Image, Text } from '@chakra-ui/react';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Business() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
   
  };

  return (
    <>
      <Text fontSize='5xl' ml="1%">Guides to help you grow</Text>
  <div style={{ width:"97%", marginLeft:"1%"}}>
      <Slider {...settings}>
      
          <Card maxW='md'>
            <Image
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Start a side business</Heading>
            </Stack>
          </Card>
        
          <Card maxW='md'>
            <Image
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Ecommerce business ideas</Heading>
            </Stack>
          </Card>
        
          <Card maxW='md'>
            <Image
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Start an online business and work from home</Heading>
            </Stack>
          </Card>
        
          <Card maxW='md'>
            <Image
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Build a website from scratch</Heading>
            </Stack>
          </Card>
       
          <Card maxW='md'>
            <Image
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Grow your business with AI</Heading>
            </Stack>
          </Card>
      
          <Card maxW='md'>
            <Image
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Create a logo for your business</Heading>
            </Stack>
          </Card>
        
      </Slider>
      </div>
    </>
  );
}
