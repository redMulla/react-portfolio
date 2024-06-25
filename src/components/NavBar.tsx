import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Text,
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
      bg={useColorModeValue('gray.100', 'black')}
      width="100vw"
      py="20px"
      boxShadow="xl"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
      >
        <Text fontSize="xl" className="blueText" fontWeight="bold">
          My Portfolio
        </Text>
        <Button
          onClick={toggleColorMode}
          bg={useColorModeValue('gray.100', 'black')}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Container>
    </Box>
  );
};
