import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
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
  const variants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display={'flex'} flexDir={'column'} position="fixed" zIndex={'4'}>
      <Box
        top="0"
        p="10px"
        bg={useColorModeValue('gray.100', 'black')}
        // bg="var(--chakra-colors-chakra-body-bg)"
        width="100vw"
        py="20px"
        // boxShadow="xl"
        // borderBottom="2px"
        // zIndex={'4'}
      >
        <Container
          maxW="container.xl"
          display="flex"
          justifyContent="space-between"
        >
          <Text fontSize="2xl" className="blueText" fontWeight="bold">
            My Portfolio
          </Text>
          <Button
            onClick={toggleColorMode}
            bg={useColorModeValue('gray.100', 'black')}
            // bg="var(--chakra-colors-chakra-body-bg)"
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Container>
      </Box>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: 'easeIn' }}
        variants={variants}
        style={{ position: 'relative' }}
      >
        <Box
          minW={'100%'}
          minH={'3px'}
          bg={'blue.500'}
          // position={'relative'}
          // className="animate"
          // left={0}
        ></Box>
      </motion.div>
    </Box>
  );
};
