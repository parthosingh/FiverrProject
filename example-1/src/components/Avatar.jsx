import { Link} from '@chakra-ui/react'
import { Flex, Square,Text,Image,Box } from '@chakra-ui/react'
import "../App.css"

export default function Style(){
  return(
    <>
  <div style={{ width:"94%", marginLeft:"3%"}} > 
<Flex color='white' direction="row" justifyContent="space-between" >
  <Link  href='https://www.fiverr.com/categories/programming-tech?source=hplo_cat_sec_TOP&pos=1' _hover={{textDecoration:'none'}} className='box'>
     <Square  size='140px' borderRadius="20">
     <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech.49dbf0d.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Programming<br/> & Tech</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/graphics-design?source=hplo_cat_sec_TOP&pos=2' _hover={{textDecoration:'none'}} className='box'>
     <Square  size='140px' borderRadius="20">
    <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.3272c08.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Graphics &<br/>  Design</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/online-marketing?source=hplo_cat_sec_TOP&pos=3' _hover={{textDecoration:'none'}} className='box'>
    <Square  size='140px' borderRadius="20">
    <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing.85e8846.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Digital<br/> Marketing</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/writing-translation?source=hplo_cat_sec_TOP&pos=4' _hover={{textDecoration:'none'}}   className='box'>
     <Square  size='140px' borderRadius="20">
     <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.dc66eb8.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Writing &<br/> Translation</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/video-animation?source=hplo_cat_sec_TOP&pos=5' _hover={{textDecoration:'none'}}  className='box'>
    <Square  size='140px' borderRadius="20">
    <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.21fb1d6.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Video &<br/>Animation</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/ai-services?source=hplo_cat_sec_TOP&pos=6' _hover={{textDecoration:'none'}} className='box'>
    <Square  size='140px' borderRadius="20">
    <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services.40511da.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">AI Services</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/music-audio?source=hplo_cat_sec_TOP&pos=7' _hover={{textDecoration:'none'}} className='box'>
    <Square  size='140px' borderRadius="20">
     <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.6a411f2.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Music & Audio</Text>
    </Box>
  </Square>
  </Link>
    <Link  href='https://www.fiverr.com/categories/business?source=hplo_cat_sec_TOP&pos=8' _hover={{textDecoration:'none'}} className='box'>
    <Square  size='140px' borderRadius="20">
    <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.772c3c9.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Business</Text>
    </Box>
  </Square>
  </Link>
   <Link  href='https://www.fiverr.com/categories/consulting-services?source=hplo_cat_sec_TOP&pos=9'_hover={{textDecoration:'none'}}  className='box'>
  <Square  size='140px' borderRadius="20">
    <Box mr="8">
 <Image boxSize='30px' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting.93989a4.svg' w="20"/>
   <br/> <br/>
    <Text color="black" pl="4">Consulting</Text>
    </Box>
  </Square>
  </Link>
</Flex>
</div>
</>
)}