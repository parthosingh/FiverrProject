import { Text,Button,Link } from '@chakra-ui/react'

export default function Fingertips(){
    return(
        <>
          <div style={{backgroundColor:"#4D1727"}}>
            <br/> <br/>
            <div>
            <Text fontSize='7xl' style={{color:"white", marginLeft:"17%", marginBottom:"3%"}} >Freelance services at your <span style={{color:"orange"}}>fingertips!</span></Text>
            </div>
            <div>
                <Link href="https://www.fiverr.com/join?source=hplo_get_started" _hover={{ textDecoration: 'none' }} >
               <Button color="black" marginLeft="50%">Join Fiverr</Button>
               </Link>
            </div>
            <br/> <br/>
          </div>
        </>
    )
}