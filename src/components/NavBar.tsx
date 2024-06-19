import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Button
          onClick={toggleColorMode}
          bg={useColorModeValue('white', 'black')}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Container>
    </Box>
  );
};
