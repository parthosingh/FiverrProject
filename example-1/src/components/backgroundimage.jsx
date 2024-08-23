 import { Box } from '@chakra-ui/react';
 import Image from "../image/1.png";
 import { Heading,HStack,VStack,InputGroup,Input,IconButton,Badge} from '@chakra-ui/react';
 import { SearchIcon } from '@chakra-ui/icons';
 import { Avatar, WrapItem,Wrap,Text } from '@chakra-ui/react'
 
 export default function BackgroundImage() {
   return (
     <>
       <Box
         style={{
          //  border: "1px solid black",
           maxWidth: "100%",
           height: "550px",
           backgroundImage: `url(${Image})`,
           backgroundSize: "100% 100%",
           backgroundRepeat: "no-repeat",
           marginLeft: "50px",
           marginTop: "50px",
           marginRight: "50px",
         }}
       >
       <div class= "parent">
        <br/> <br/> <br/> <br/>
    <VStack>
    
             <Heading size='lg' fontSize='50px' textAlign="center"  color="white">
               Find the right  <span style={{color: "green"}}>freelance </span><br/>service, right away
               <br/>
               <br/>
             </Heading>  
    </VStack> 
            
    
    <HStack>
       <InputGroup
          style={{
          border: "3px solid white",
          width: "45%", // Controls the overall width of the InputGroup
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "10px"
          }} >
       <Input
          type="search"
          placeholder="Search for any service..."
          width="100%" // Ensures the input takes full width of InputGroup
          p={7}
          bg="white"
          border="none" // Removes input border to match the style
         _focus={{ 
          boxShadow: 'none', // Removes the shadow effect
          borderColor: 'transparent', // Removes the blue border
            }}  />
       <IconButton
          colorScheme="green"
          border="none"
          p={7}
          aria-label="Search database"
          icon={<SearchIcon />}
        />
       </InputGroup>
    </HStack>
      <br/> <br/> <br/> <br/> 
    <div className='tag' style={{ width: "50%", margin:"auto" }}>
      <Wrap spacing="25px">
         <WrapItem>
         <Box p={4}>
          <Badge colorScheme='green' p={2}><h3>Trusted By:</h3></Badge>
         </Box>
        </WrapItem>
        <WrapItem>
         <Avatar 
        name='Google' 
        size="lg" 
        src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/25_ByTheNumbers_Hero_1.gif' 
       />
  </WrapItem>
  <WrapItem>
    <Avatar 
      name='Kola Tioluwani' 
      size="lg" 
      src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/448376188098673.65a7c8ed2c016.gif' 
    />
  </WrapItem>
  <WrapItem>
    <Avatar 
      name='Kola Tioluwani' 
      size="lg" 
      src='https://miro.medium.com/v2/resize:fit:1400/1*PwutZVzQGSEdkRKQjWKzhQ.gif' 
    />
  </WrapItem>
  <WrapItem>
    <Avatar 
      name='Kola Tioluwani' 
      size="lg" 
      src='https://media3.giphy.com/media/o41J0Bue0JyJ8jyFjA/giphy.gif' 
    />
  </WrapItem>
  <WrapItem>
    <Avatar 
      name='Kola Tioluwani' 
      size="lg" 
      src='https://miro.medium.com/v2/resize:fit:960/1*bkUPXMqhEbZcCscOrz1Bvw.gif' 
    />
  </WrapItem>
  <WrapItem>
    <Avatar 
      name='Kola Tioluwani' 
      size="lg" 
      src='https://media2.giphy.com/media/uMAB14Ng8KTHSzhqui/200w.gif?cid=6c09b952jo7cwjis4rbcs55ckneuvex772ewtyr1i5uppm7u&ep=v1_gifs_search&rid=200w.gif&ct=g' 
    />
  </WrapItem>
</Wrap>
       </div>
       </div>
       </Box>  
     </>
   );
 }

