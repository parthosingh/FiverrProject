import { Card, CardHeader, CardBody, SimpleGrid,Image,Heading,Text, Box } from '@chakra-ui/react'


export default function SimpleBox(){
  return(
    <>
    
     <Heading size='xl' ml={6}> A whole world of freelance <br/>talent at your fingertips</Heading>
     <br/> <br/> <br/> <br/>
     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
  <Card>
  <Image
    boxSize='35px'ml={6} src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.72379ee.svg'/>
    <CardHeader>
    <br/>
      <Heading size='lg'> Over 700 categories</Heading>
      <br/> 
    </CardHeader>
    <CardBody>
    <br/> 
      <Text>Get results from skilled freelancers<br/> from all over the world, for every task, at any price point.</Text>
    </CardBody>
  </Card>
   <Card>
  <Image
    boxSize='35px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/handshake.287b5d3.svg'/>
    <CardHeader>
    <br/>
      <Heading size='lg'>Clear, transparent pricing</Heading>
      <br/> 
    </CardHeader>
    <CardBody>
      <Text>Pay per project or by the hour (Pro). Payments only get released when you approve.</Text>
    </CardBody>
  </Card>
   <Card>
  <Image
    boxSize='35px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lightning.2cded3f.svg'/>
    <CardHeader>
    <br/>
      <Heading size='lg'> Quality work done faster</Heading>
      <br/> 
    </CardHeader>
    <CardBody>
      <Text>Filter to find the right freelancers quickly and get great work delivered in no time, every time.</Text>
    </CardBody>
  </Card>
   <Card>
  <Image
    boxSize='35px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/support.660ad7f.svg'/>
    <CardHeader>
    <br/>
      <Heading size='lg'> 24/7 award-winning support </Heading>
      <br/> 
    </CardHeader>
    <CardBody>
      <Text>Chat with our team to get your questions answered or resolve any issues with your orders.</Text>
    </CardBody>
  </Card>
 
 
</SimpleGrid>

    </>
  )
}
