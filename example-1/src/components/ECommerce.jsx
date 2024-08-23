
import { Heading, Text, UnorderedList, ListItem, Button, Box, Image,Link } from '@chakra-ui/react'

import "../App.css"

export default function Commerce() {
    return (
        <>
            <div className="Parentbox">
                <div className="box1">
                    <Heading as='h2' size='2xl' noOfLines={1}>fiverrpro.</Heading>
                    <br /><br /> <br /><br />

                    <Text fontSize='5xl'>New e-Commerce <br />
                        project management <br />service made for your business
                    </Text>

                    <br /><br /> <br /><br />
                    <Heading as='h5' size='sm'>
                        An experienced e-Commerce project manager will plan, coordinate,
                        and execute your project. Overseeing a team of e-Commerce experts, they'll handle
                        everything from site building, design and content to optimization, marketing strategies, and UGC videos.
                        <br /> <br />
                        To get started, you should have:
                        <br /> <br />

                        <UnorderedList>
                            <ListItem>An e-Commerce project requiring expertise in various fields</ListItem>
                            <ListItem>A budget exceeding $1000</ListItem>
                            <ListItem>A desire to get things done, without the hassle</ListItem>
                        </UnorderedList>

                    </Heading>
                    <br />
                    
                        <Button colorScheme='orange'>
                        <Link href="https://pro.fiverr.com/categories/programming-tech/buy/website-development/e-commerce?source=LOHP_business_banner&expert_listings=true">
                            Get Started
                            </Link>  
                        </Button>
                    
                </div>
                <div className='box2'>
                    <Box boxSize='2xl'>
                        <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png' alt='Dan Abramov' />
                    </Box>
                </div>
            </div>
        </>
    )
}
