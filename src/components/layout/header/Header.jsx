import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import './header.css';
import {   RiLoginBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loogut } from '../../../redux/actions/userAction';
export const Header = ({isauthenticate=false,user}) => {
// user.user.role="admin"
   const { onOpen,onClose,isOpen}=useDisclosure()
  const dispatch=useDispatch()

 function logouthandler(){
 
  onClose()
  dispatch(loogut())
 }
  return (

    <div className="headerdiv">
      <Button className='headerbutton'
      position={"fixed"}
      left= "10px"
      width={'12'} height="12" rounded="full" colorScheme={'blue'}
      onClick={onOpen}
      marginTop="10px"
      >
        <RiMenu5Fill  />
      </Button >
      <ColorModeSwitcher marginTop="10px"/>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(3px)"}/>
        <DrawerContent>
          <DrawerHeader textAlign={"center"} borderBottomWidth={"1px"}>
            FIT CODER
          </DrawerHeader>
          <DrawerBody onClick={onClose} className='menubody'>
 <VStack spacing={"4"} alignItems="flex-start">
  <Link  to="/">
     <Button variant="ghost">
      HOME
      </Button>
  </Link>
  <Link to="/courses">
     <Button variant="ghost">
      ALL COURSES
      </Button>
  </Link>
  <Link to="/requestcourse">
     <Button variant="ghost">
      REQUEST A COURSE
      </Button>
  </Link>


  
 </VStack>

 <HStack 
 bottom="10px" left="56px" width="100%">
  {
    isauthenticate ? (<>
    
      <HStack>
        <Link to="/profile">
          <Button variant="ghost">
         PROFILE
          </Button>
        </Link>
        <Button variant="ghost" onClick={logouthandler}>
          <RiLoginBoxLine/>
         LOGOUT 
        </Button>
      </HStack>

  
    </>) : (<>
      <Link to="/login">
 <Button colorScheme={"blue"}>
  LOGIN
 </Button>
 </Link>
 
 <p>OR</p>

 <Link to="/signup">
 <Button colorScheme={"blue"}>
  SIGNUP
 </Button>
 </Link></>)
  }


 </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default Header;
