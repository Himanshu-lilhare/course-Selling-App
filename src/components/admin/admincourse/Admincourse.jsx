import { Box, Button,  Heading, HStack,  Table,  TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { createCourseLecture, deleteCourseLecture, deleteCourses } from '../../../redux/actions/adminActions'
import { getCourses, getCoursesLectures } from '../../../redux/actions/courseAction'
import Slidebar from '../Slidebar'
import Coursemodal from './Coursemodal'

const Admincourse = () => {
  const {isOpen,onClose,onOpen}=useDisclosure()
  const dispatch=useDispatch()
  const {lectures,courses:course}=useSelector(state=>state.courses)
  const {loading,message,error}=useSelector(state=>state.admin)

  const [courseid,setcourseid]=useState("")
   const [coursetitle,setcoursetitle]=useState("")

//   const course=[{
//     _id:"hdufudfuytruygfhgifg",
//     title:"react course",
//    poster:{
//     url:"gfg",
//   },
//     category:"web dev",
//     createdby:"raj lilahre",
//  views:23,
// lectures:12

   
//   }]
function courseviewhandler(id,title,isOpen){
  
  dispatch(getCoursesLectures(id))
 
  setcourseid(id)
  console.log(courseid)
  setcoursetitle(title)
 isOpen()
 
}
function deletecoursehandler(id){
   dispatch(deleteCourses(id))
}

async function deletehandler(lectureid,courseid,setdeleteLoading){
  console.log(lectureid)
  console.log(courseid)
await  dispatch(deleteCourseLecture(courseid,lectureid))
dispatch(getCoursesLectures(courseid))
}
async function addlecturehandler(e,title,description,id,video){
  
e.preventDefault()
console.log(id)
console.log(title)
const myform=new FormData()
myform.append("title",title)
myform.append("description",description)
myform.append("file",video)
await dispatch(createCourseLecture(id,myform))
  dispatch(getCoursesLectures(id))
}
 
useEffect(
  ()=>{
dispatch(getCourses())

if(error){
toast.error(error)
dispatch({type:"clearerror"})
}
if(message){
  toast.success(message)
  dispatch({type:"clearmessage"})
}
}  ,[dispatch,error,message])


  function Row({ele,updatehandler,deletecoursehandler,loading}){
    
       return (
        <Tr fontSize={['sm','md']}>
        
          <Td p={'1'} py={'8'}>{ele.title}</Td>
        
          <Td p={'1'} py={'8'}>
       {ele.category}
          </Td>
          
          <Td p={'1'} py={'8'} isNumeric>{ele.views}</Td>
          <Td p={'1'}  py={'8'} isNumeric>
            {ele.noOfVideos}
          </Td>
          
          <Td p={'1'} py={'8'} isNumeric>
            <HStack justifyContent={"flex-end"}>
<Button variant={"outline"} colorScheme="purple.500" onClick={()=>courseviewhandler(ele._id,ele.title,onOpen)}>
  View lecture
</Button>
<Button isLoading={loading} onClick={()=> deletecoursehandler(ele._id)}>
<RiDeleteBin7Fill/>
</Button>
            </HStack>
          </Td>
        </Tr>
       )
  }
  return (
    <>
    <Slidebar />
   <Box p={["1","6"]} overflowX="auto"
   py={["1","16"]}
   
   >
    <Heading children="ALL COURSE" ml={['5','0']} mb={['5',"10px"]} fontSize={['large','larger']}/>
    <TableContainer w={["100vw","full"]}>
<Table variant={"simple"} size="lg">

<Thead>
  <Tr>
   
    <Th p={'1'}>
     Title
    </Th>
   
    <Th p={'1'}>
      Category
    </Th>
   
    <Th p={'1'} isNumeric>
      Impressions
    </Th>
    <Th p={'1'} isNumeric>
      Lectures
    </Th>
    <Th p={'1'} isNumeric>
      Delete
    </Th>
  </Tr>
</Thead>
<Tbody>
  {
    course.map((ele,index)=>{
      return <Row key={index} ele={ele} courseviewhandler={courseviewhandler} deletecoursehandler={deletecoursehandler}/>
      
    })
  }
</Tbody>
</Table>
    </TableContainer>
    <Coursemodal 
    isOpen={isOpen} onClose={onClose} id={courseid} coursetitle={coursetitle}
    deletelecturehandler={deletehandler} addlecturehandler={addlecturehandler} lectures={lectures}
    loading={loading}
    />
   </Box>


    </>
  )
}


export default Admincourse