import React from 'react';
import { Box, Heading, HStack, VStack,Text } from '@chakra-ui/react';
import './footer.css';
import {
 TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialGithubCircular,
 
} from 'react-icons/ti';
const Footer = () => {
  return (
    <Box 
    boxShadow={'inset 1px 1px 20px rgba(15, 95, 255, 0.5)'}
    border={'1px'}
    borderColor={'blackAlpha.200'}
     padding={'4'} className="footerbox" minH={'10vh'}>
    
       <VStack>
        
      <HStack
        spacing={['5', '10']}
        justifyContent="space-between"
        color={"white"}
        fontSize="40"
        marginTop={'10'}
      >
        <a className='footerIcons' href="https://www.instagram.com/rajlilhare27/" rel='noreferrer' target='_blank'>
          <TiSocialLinkedinCircular style={{backgroundColor:'#1b42c9'}} />
        </a>
        <a className='footerIcons' href="https://www.instagram.com/rajlilhare27/" rel='noreferrer' target='_blank'>
          <TiSocialTwitterCircular style={{backgroundColor:'#1b42c9'}} />
        </a>
        <a className='footerIcons' href="https://www.instagram.com/rajlilhare27/" rel='noreferrer' target='_blank'>
          <TiSocialGithubCircular style={{backgroundColor:'#1b42c9'}} />
        </a>
        <a className='footerIcons' href="https://www.instagram.com/rajlilhare27/" rel='noreferrer' target='_blank'>
          <TiSocialInstagramCircular style={{backgroundColor:'#1b42c9'}} />
        </a>
       
      
        
      </HStack>
      </VStack>
      <VStack marginTop={"10"} alignItems={'center'}
      justifyContent="center"
      width="full">
       <Text fontWeight={'400'}  fontSize={['15px','19px']} letterSpacing="1px"
       textAlign={"center"}
       >
      Made By <span style={{fontSize:"18px",
        fontWeight:'bold',
      color:'#1b42c9' }}>Himanshu Lilhare (Raj Lilhare) #FITCODER</span> 
       </Text>
      </VStack>
      
    </Box>
  );
};

export default Footer;
