
import { Flex, Spacer, Box,Heading, ButtonGroup, Button,Text,HStack,Card, CardBody,Link,Popover,PopoverTrigger,PopoverContent,PopoverCloseButton,PopoverArrow,PopoverBody
,Divider } from '@chakra-ui/react'

function Navbar() {
    return(
        <>
     <Card >
       <CardBody>
  
     <Flex  minWidth='max-content' alignItems='center'>
  <Box p='2' ml={2}>
    <Heading size='2xl'> <HStack><Text> fiveer</Text>
    <Box  h='10' color="green">.</Box> </HStack></Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='6' mr={5} >
    {/* Fiverr Pro */}
  <Popover>
      <PopoverTrigger>
      <Button>Fiveer Pro ∨</Button>
      </PopoverTrigger>
      <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <Link href="https://pro.fiverr.com/?source=header_pop_up" target="_blank" _hover={{ textDecoration: 'none' }}>
      <Heading size="xs" pl="4%">I'm looking to hire</Heading>
      <PopoverBody>My team needs vetted freelance talent <br/>
      and premium business solution </PopoverBody>
      <Divider/>
      </Link>
      <Link href="https://www.fiverr.com/cp/pro-freelancers?source=header_pop_up" target="_blank" _hover={{ textDecoration: 'none' }}>
       <Heading size="xs" pl="4%">I want to offer pro services</Heading>
      <PopoverBody>I'd like to work on business projects as a <br/>
      Pro freelancer or agency </PopoverBody>
      </Link>
      </PopoverContent>
      </Popover>
    {/* Explore Button */}
    <Popover>
      <PopoverTrigger>
      <Button>Explore ∨</Button>
      </PopoverTrigger>
      <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <Heading size="xs" pl="4%">Discover</Heading>
      <PopoverBody>Inspiring projects made on Fiverr</PopoverBody>
      <Divider/>
      <Heading size="xs"  pl="4%">Community</Heading>
      <PopoverBody>Connect with Fiverr's team and community</PopoverBody>
      <Divider/>
      <Heading size="xs"  pl="4%">Guides</Heading>
      <PopoverBody>In-depth guides covering business topics</PopoverBody>
      <Divider/>
      <Heading size="xs"  pl="4%">Podcast</Heading>
      <PopoverBody>Inside tips from top business minds</PopoverBody>
      <Divider/>
      <Heading size="xs"  pl="4%">Learn</Heading>
      <PopoverBody>Professional online courses, led by experts</PopoverBody>
      <Divider/>
       <Heading size="xs"  pl="4%">Blog</Heading>
      <PopoverBody>News, information and community stories</PopoverBody>
      <Divider/>
      <Heading size="xs"  pl="4%">Logo Maker</Heading>
      <PopoverBody>Create your logo instantly</PopoverBody>
      </PopoverContent>
      </Popover>
      {/* English */}
      <Popover>
  <PopoverTrigger>
    <Button>◍English</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <Heading size="xs"  pl="4%" color="green">Language</Heading>
     <br/>
     <Divider/>
     <Link href="https://www.fiverr.com/" _hover={{ textDecoration: 'none' }}>
      <Heading size="md"  pl="4%">English</Heading>
     </Link>
     <br/>
     <Divider/>
     <Link href="https://de.fiverr.com/" _hover={{ textDecoration: 'none' }}>
      <Heading size="md"  pl="4%">Deutsche</Heading>
     </Link>
      <br/>
      <Divider/>
     <Link href="https://es.fiverr.com/" _hover={{ textDecoration: 'none' }}>
       <Heading size="md"  pl="4%">Espanol</Heading>
     </Link>
      <br/>
       <Divider/>
     <Link href="https://fr.fiverr.com/" _hover={{ textDecoration: 'none' }}>
      <Heading size="md"  pl="4%">Francais</Heading>
     </Link>
      <br/>
       <Divider/>
     <Link href="https://br.fiverr.com/" _hover={{ textDecoration: 'none' }}>
       <Heading size="md"  pl="4%">Portugues</Heading>
     </Link>
      <br/>
       <Divider/>
      <Link href="https://it.fiverr.com/" _hover={{ textDecoration: 'none' }}>
       <Heading size="md"  pl="4%">italiano</Heading>
      </Link>
      <br/>
       <Divider/>
        <Link href="https://nl.fiverr.com/" _hover={{ textDecoration: 'none' }}>
         <Heading size="md"  pl="4%">Nederlands</Heading>
        </Link>
      <br/>
       <Divider/>
   </PopoverContent>
</Popover>
    {/* Become a seller */}
        <Link href="https://www.fiverr.com/start_selling?source=top_nav" _hover={{ textDecoration: 'none' }} >
         <Button bg="white">Become a Seller</Button>
        </Link>
    {/* Signin */}
        <Link href="https://www.fiverr.com/join?source=hplo_get_started" _hover={{ textDecoration: 'none' }} >
         <Button bg="white">Sign in</Button>
        </Link>
    {/* Join */}
        <Link href="https://www.fiverr.com/join?source=hplo_get_started" _hover={{ textDecoration: 'none' }} >
         <Button colorScheme='teal'>Join</Button>
        </Link>
  </ButtonGroup>
  </Flex> 
      </CardBody>
   </Card>
        </>
    )
}

export default Navbar;
