import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Text,
  useColorMode,
  useColorModeValue,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.95)',
    'rgba(26, 32, 44, 0.95)'
  );
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW="container.xl" py={4}>
        <HStack justify="space-between" align="center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.400, blue.600, purple.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Vassilly Ibinkwiye
            </Text>
          </motion.div>

          {/* Navigation Actions */}
          <HStack spacing={4}>
            {/* Theme Toggle */}
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
              rounded="full"
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
                transform: 'scale(1.05)',
              }}
              transition="all 0.2s"
            />
          </HStack>
        </HStack>
      </Container>

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        style={{
          transformOrigin: 'left',
          height: '2px',
          background: 'linear-gradient(90deg, #3182CE, #805AD5)',
        }}
      />
    </Box>
  );
};
