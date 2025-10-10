import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Lottie from 'lottie-react';
import animationData from '../assets/code.json';
import { Zoom, Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

export const Hero = () => {
  const el = useRef(null);
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, purple.50, pink.50)',
    'linear(to-br, gray.900, blue.900, purple.900)'
  );

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Ideas into Reality',
        'Visions into Applications',
        'Concepts into Solutions',
        'Dreams into Digital Experiences',
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      cursorChar: '|',
      backDelay: 2000,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box 
      minH="100vh" 
      bgGradient={bgGradient}
      pt={{ base: 20, md: 24 }}
      pb={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        w="300px"
        h="300px"
        bgGradient="radial(circle, blue.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(40px)"
      />
      <Box
        position="absolute"
        bottom="20%"
        left="5%"
        w="200px"
        h="200px"
        bgGradient="radial(circle, purple.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(30px)"
      />

      <Container maxW="container.xl" h="full">
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: 8, lg: 12 }}
          alignItems="center"
          minH="80vh"
        >
          {/* Content Section */}
          <GridItem>
            <VStack spacing={6} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
              <Fade direction="up" triggerOnce={true} delay={100}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={useColorModeValue('gray.600', 'gray.300')}
                  fontWeight="medium"
                  letterSpacing="wide"
                  textTransform="uppercase"
                >
                  Full-Stack Developer
                </Text>
              </Fade>

              <Zoom fraction={0.3} triggerOnce={true} delay={200}>
                <Heading
                  as="h1"
                  size={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  lineHeight="shorter"
                  fontWeight="bold"
                >
                  <Text as="span" color={useColorModeValue('gray.800', 'white')}>
                    Hi, I'm{' '}
                  </Text>
                  <Text
                    as="span"
                    bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                    bgClip="text"
                  >
                    Vassilly Ibinkwiye
                  </Text>
                </Heading>
              </Zoom>

              <Fade direction="up" triggerOnce={true} delay={400}>
                <Box>
                  <Text 
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} 
                    color={useColorModeValue('gray.700', 'gray.200')}
                    fontWeight="medium"
                    minH={{ base: '60px', md: '80px' }}
                  >
                    I transform{' '}
                    <Text
                      as="span"
                      color="blue.500"
                      fontWeight="bold"
                      ref={el}
                    />
                  </Text>
                </Box>
              </Fade>

              <Fade direction="up" triggerOnce={true} delay={600}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={useColorModeValue('gray.600', 'gray.300')}
                  maxW="600px"
                  lineHeight="relaxed"
                >
                  Crafting modern, scalable web applications with cutting-edge technologies. 
                  From concept to deployment, I deliver exceptional digital experiences.
                </Text>
              </Fade>

              <Fade direction="up" triggerOnce={true} delay={800}>
                <HStack spacing={4} pt={4}>
                  <Button
                    size="lg"
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    color="white"
                    _hover={{
                      bgGradient: 'linear(to-r, blue.500, purple.600)',
                      transform: 'translateY(-2px)',
                      boxShadow: 'xl',
                    }}
                    transition="all 0.3s ease"
                    rounded="full"
                    px={8}
                  >
                    View My Work
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="blue.400"
                    color="blue.400"
                    _hover={{
                      bg: 'blue.50',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.3s ease"
                    rounded="full"
                    px={8}
                  >
                    Get In Touch
                  </Button>
                </HStack>
              </Fade>
            </VStack>
          </GridItem>

          {/* Animation Section */}
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                maxW={{ base: '300px', md: '400px', lg: '500px' }}
                w="full"
                position="relative"
              >
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="radial(circle, blue.200, transparent)"
                  opacity={0.3}
                  borderRadius="full"
                  filter="blur(20px)"
                  transform="scale(1.2)"
                />
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                />
              </Box>
            </motion.div>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
