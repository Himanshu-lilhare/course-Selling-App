import {  VStack } from '@chakra-ui/react'
import React from 'react'
import {RotatingLines} from 'react-loader-spinner'
const Loader = () => {
  return (
  <VStack h="100vh" justifyContent={"center"}  >
<div style={{transform:"scale(3)"}}>
<RotatingLines
  strokeColor="#4873da"
  strokeWidth="5"
  animationDuration="0.75"
  width="70"
  visible={true}
/>
</div>
    </VStack>
  )
}

export default Loader