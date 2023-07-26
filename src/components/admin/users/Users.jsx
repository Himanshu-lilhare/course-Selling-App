import { Box, Button,Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getAllUsers, updateUsers } from '../../../redux/actions/adminActions'
import Slidebar from '../Slidebar'
import Loader from '../../layout/header/Loader'
import toast from 'react-hot-toast'
const Users = () => {
  const dispatch=useDispatch()
  const {users,loading,message,error}=useSelector(state=>state.admin)


async function updatehandler(id){
  await dispatch(updateUsers(id))
  dispatch(getAllUsers())
}
async function deletehandler(id){
  await dispatch(deleteUsers(id))
  dispatch(getAllUsers())

}

useEffect(() => {
dispatch(getAllUsers())
 if(message){
  toast.success(message)
  dispatch({type:"clearmessage"})
 }
 if(error){
  toast.error(error)
  dispatch({type:"clearerror"})
 }
},[dispatch,message,error])


  function Row({ele,updatehandler,deletehandler,loading}){
       return (
        <Tr>
       
          <Td p={'1'} py={'8'}>{ele.name}</Td>
          <Td p={'1'} py={'8'}>{ele.email}</Td>
          <Td p={'1'} py={'8'}>{ele.role}</Td>
          <Td p={'1'} py={'8'}>{
   ele.subscription && ele.subscription.status==="active" ? "Active" :"Not active"}</Td>
          <Td isNumeric>
            <HStack justifyContent={"flex-end"}>
<Button variant={"outline"} colorScheme="purple.500" onClick={()=>updatehandler(ele._id)}>
  Update
</Button>
<Button isLoading={loading} onClick={()=> deletehandler(ele._id)}>
<RiDeleteBin7Fill/>
</Button>
            </HStack>
          </Td>
        </Tr>
       )
  }
  return (
loading ? <Loader /> :

    <>
      <Slidebar />
   <Box p={["1","7"]} overflowX="auto"
   pt={["8","16"]}
   >
    <Heading children="ALL USERS" ml={['5','0']} mb={['5',"10px"]} fontSize={['large','larger']}/>
   
    <TableContainer w={["100vw","full"]} h={'90vh'} overflowY={'scroll'}>
<Table variant={"simple"} size="lg">

<Thead>
  <Tr>
 
    <Th p={'1'}>
     Name
    </Th>
    <Th p={'1'}>
     Email
    </Th>
    <Th p={'1'}>
     Role
    </Th>
    <Th p={'1'}>
      Subscription
    </Th>
    <Th p={'1'} isNumeric>
      Change Role
    </Th>
  </Tr>
</Thead>
<Tbody>
  {
    users.map((ele,index)=>{
      return <Row loading={loading} ele={ele} updatehandler={updatehandler} deletehandler={deletehandler}/>
      
    })
  }
</Tbody>
</Table>
    </TableContainer>
   </Box>


    </>
  )
}


export default Users