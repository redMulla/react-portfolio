import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const NavBar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      p="10px"
      bg={useColorModeValue('white', 'black')}
      width="100vw"
      py="20px"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
      >
        <div>NavBar</div>
        <div>Navbar</div>
      </Container>
    </Box>
  );
};
