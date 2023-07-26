import { Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,

  RiEyeFill,
  RiUserFill,
} from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

function Linkbutton({ url,text,active }) {
  return (
    <NavLink to={`/admin/${url}`}>
      <Button p={['1','2']} fontSize={['md','larger']} colorScheme={active ? 'blue' : 'gray'}>
        {`${text}`}
      </Button>
    </NavLink>
  );
}
const Slidebar = () => {
  const location = useLocation();
  return (
    <HStack
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      spacing={['8','10']}
      padding="6"
      justifyContent={"center"}
      margin={['2.5','0']}
      mt={['10','0']}
    >
      <Linkbutton
        url="admincourses"
        text="Courses"
       
        active={location.pathname === '/admin/admincourses'}
      />
      <Linkbutton
        url="users"
        text="Users"
      
        active={location.pathname === '/admin/users'}
      />

      <Linkbutton
        url="createcourse"
        text="Create Course"
       
        active={location.pathname === '/admin/createcourse'}
      />
    </HStack>
  );
};

export default Slidebar;
