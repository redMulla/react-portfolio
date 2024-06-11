import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavBar } from '../components/NavBar'

export const Home = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} display='flex' flexDir='column' alignItems='center' justifyContent='center' >
        <NavBar></NavBar>
        <br />
        <div>Home</div>
    </Box>
  )
}
