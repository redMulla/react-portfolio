import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Home = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} display='flex' alignItems='center' justifyContent='center' >

        <div>Home</div>
    </Box>
  )
}
