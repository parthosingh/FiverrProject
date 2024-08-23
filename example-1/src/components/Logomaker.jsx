import { Heading,Text,Button, Link,Box, Image } from '@chakra-ui/react'
import "../App.css"
export default function Logo(){
    return(
        <>
        <div className="logo" style={{width: "95%", marginLeft:"1%" ,backgroundColor:"#FFF6F2"}}>

            <div style={{ width:"50%", paddingLeft:"1%"}}>
            <Heading>fiverrlogomaker.</Heading>
            <br/><br/>
            <Text fontSize='5xl'>Make an incredible<br/>
            logo <span style={{color:"orange"}}>in seconds</span>  </Text>
            <br/> <br/> <br/>
            <Text fontSize='xl'>Pre-designed by top talent. Just add your touch.</Text>
            <br/> <br/>
            <Link href="https://www.fiverr.com/logo-maker?source=LOHP_banner" target='_blank'>
            <Button colorScheme='green' color="black" >Try Fiverr Logo Maker.</Button>
            </Link>
            <br/> <br/> <br/> <br/> 
            </div>

            <div style={{width:"50%", padding:"10%"}}>
            <Box >
               <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png' alt='Dan Abramov' />
            </Box>
            </div>
        </div>
        
        </>
    )
}