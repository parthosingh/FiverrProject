
import { Heading, Text, Card, Stack, CardBody, CardFooter, Button } from '@chakra-ui/react';
import React from "react";
import ReactPlayer from 'react-player';
import video1 from "../video/Haerfest.mp4";
import video2 from "../video/Lavender.mp4";
import video3 from "../video/Nadam.mp4";
import video4 from "../video/Routed.mp4";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Fashion() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    };

    return (
        <>
            <Heading as='h2' size='2xl' ml="10">What they're saying about Fiverr</Heading>
            <br /> <br />
            <div style={{ width:"95%", marginLeft:"3%"}}>
            <Slider {...settings}>
                <div >
               
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        display='flex'
                        alignItems='center'
                        ml="2%"
                      
                    >
                      
                        <div style={{ flex: '1'}}>
                            <ReactPlayer url={video1} width="100%" height="auto" controls={true} />
                        </div>
                        <Stack spacing={4} flex='1' p={4}>
                            <CardBody>
                                <Heading size='md'>Tim and Dan Joo, Co-Founders| HAFERST</Heading>
                                <br/> <br/>
                                <Text fontSize='4xl' as='i'>" When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."</Text>
                            </CardBody>
                           
                        </Stack>
                    </Card>
                </div>
                {/* Add more slides as needed */}
                <div>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        display='flex'
                        alignItems='center'
                    >
                        <div style={{ flex: '1', padding: '10px' }}>
                            <ReactPlayer url={video2} width="100%" height="auto" controls={true} />
                        </div>
                        <Stack spacing={4} flex='1' p={4}>
                            <CardBody>
                                <Heading size='md'> Brighid Gannon (DNP, PMHNP-BC), Co-FounderCompany | Lavender</Heading>
                                <br/> <br/>
                                <Text fontSize='4xl' as='i'>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</Text>
                            </CardBody>
                           
                        </Stack>
                    </Card>
                </div>
                {/* Add additional slides here */}
                <div>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        display='flex'
                        alignItems='center'
                    >
                        <div style={{ flex: '1', padding: '10px' }}>
                            <ReactPlayer url={video3} width="100%" height="auto" controls={true} />
                        </div>
                        <Stack spacing={4} flex='1' p={4}>
                            <CardBody>
                                <Heading size='md'>Caitlin Tormey, Chief Commercial Officer| NAADAM </Heading>
                                <br/> <br/>
                                <Text fontSize='4xl' as='i'>"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."</Text>
                            </CardBody>
                           
                        </Stack>
                    </Card>
                </div>
                {/* Add additional slides here */}
                <div>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        display='flex'
                        alignItems='center'
                    >
                        <div style={{ flex: '1', padding: '10px' }}>
                            <ReactPlayer url={video4} width="100%" height="auto" controls={true} />
                        </div>
                        <Stack spacing={4} flex='1' p={4}>
                            <CardBody>
                                <Heading size='md'>Kay Kim, Co-FounderCompany  | rooted</Heading>
                                <br/> <br/>
                                <Text fontSize='4xl' as='i'>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</Text>
                            </CardBody>
                           
                        </Stack>
                    </Card>
                    
                </div>
                {/* Add additional slides here */}
                </Slider>
                </div>
        </>
    );
}
