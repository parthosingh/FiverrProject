import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link, Square, Box, Image, Heading } from '@chakra-ui/react';

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

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6, // Default number of slides shown
    slidesToScroll: 6,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1300, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800, // Tablet screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500, // Mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Heading as="h2" size="2xl" ml={10}>
          Popular Services
        </Heading>
        <br /> <br /> <br />
      </div>
      <div className="container" style={{ width: "98%" }}>
        <Slider {...settings}>
          <div>
          <Link href="https://www.fiverr.com/categories/programming-tech/website-development?source=hplo_subcat_first_step&pos=1" _hover={{ textDecoration: 'none' }} >
          <Square bg="green.500" height="300px" borderRadius="20" width="200px" ml={6}>
           <Box width="100%" height="90%" ml={2} mr={2}>
            <Heading as="h2" size="sm" color="white">Website <br /> Development</Heading>
                <br />
              <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" borderRadius="10" />
           </Box>
          </Square>
          </Link>
         </div>
         <div>
          <Link href="https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2" _hover={{ textDecoration: 'none' }}>
           <Square bg="orange.500" height="300px" borderRadius="20" width="200px" ml={6}>
            <Box width="100%" height="90%" ml={2} mr={2}>
             <Heading as="h2" size="sm" color="white">Logo Design<br /><br /></Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png" borderRadius="10" />
            </Box>
           </Square>
          </Link>
         </div>
         <div>
          <Link href="https://www.fiverr.com/categories/online-marketing/seo-services?source=hplo_subcat_first_step&pos=3" _hover={{ textDecoration: 'none' }}>
           <Square bg="green.500" height="300px" borderRadius="20" width="200px" ml={6}>
            <Box width="100%" height="90%" ml={2} mr={2}>
              <Heading as="h2" size="sm" color="white">SEO <br /><br /></Heading>
                  <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png" borderRadius="10" />
            </Box>
           </Square>
          </Link>
          </div>
          <div>
           <Link href="https://www.fiverr.com/categories/graphics-design/architectural-design-services?source=hplo_subcat_first_step&pos=4" _hover={{ textDecoration: 'none' }}>
            <Square bg="#4D1727" height="300px" borderRadius="20" width="200px" ml={6}>
             <Box width="100%" height="90%" ml={2} mr={2}>
               <Heading as="h2" size="sm" color="white">Architecture & <br /> Interior Design</Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png" borderRadius="10" />
             </Box>
            </Square>
           </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/online-marketing/social-marketing?source=hplo_subcat_first_step&pos=5" _hover={{ textDecoration: 'none' }}>
            <Square bg="#687200" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">Social Media <br /> Marketing</Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/music-audio/voice-overs?source=hplo_subcat_first_step&pos=6" _hover={{ textDecoration: 'none' }}>
            <Square bg="#421300" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">Voice<br /> Over</Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/programming-tech/website-development?source=hplo_subcat_first_step&pos=1" _hover={{ textDecoration: 'none' }} >
            <Square bg="green.500" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">Software <br /> Development</Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2" _hover={{ textDecoration: 'none' }}>
            <Square bg="orange.500" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">Data Science & ML <br/><br/></Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/online-marketing/seo-services?source=hplo_subcat_first_step&pos=3" _hover={{ textDecoration: 'none' }}>
            <Square bg="green.500" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">Product <br /> Photography</Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&pos=2" _hover={{ textDecoration: 'none' }}>
            <Square bg="#00732E" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">E-Commerce<br />Marketing</Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
          <div> 
          <Link href="https://www.fiverr.com/categories/online-marketing/seo-services?source=hplo_subcat_first_step&pos=3" _hover={{ textDecoration: 'none' }}>
            <Square bg="#BE5272" height="300px" borderRadius="20" width="200px" ml={6}>
              <Box width="100%" height="90%" ml={2} mr={2}>
                <Heading as="h2" size="sm" color="white">Video Editing <br /><br /></Heading>
                <br />
                <Image boxSize="75%" width="100%" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png" borderRadius="10" />
              </Box>
            </Square>
          </Link>
          </div>
        </Slider>
      </div>
    </>
  );
}

                