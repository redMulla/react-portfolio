import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  GridItem, 
  Heading, 
  Image, 
  Text, 
  VStack, 
  useColorModeValue,
  SimpleGrid,
  Flex
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import phoneAnimation from '../assets/mobile.json';
import Slider from './Slider';
import { Fade, Zoom } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

export const Skills = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, purple.50, blue.50)',
    'linear(to-br, gray.800, gray.900, purple.900)'
  );
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const principles = [
    {
      title: "Quality First",
      description: "Meticulous attention to detail and adherence to best practices for optimal performance.",
      icon: "🎯"
    },
    {
      title: "Scalable Solutions",
      description: "Building applications that grow with your business needs and stand the test of time.",
      icon: "🚀"
    },
    {
      title: "Professional Ethics",
      description: "Guided by integrity, transparency, and professionalism in every project.",
      icon: "⚡"
    }
  ];

  return (
    <Box 
      bgGradient={bgGradient}
      w="100%" 
      py={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="15%"
        left="5%"
        w="250px"
        h="250px"
        bgGradient="radial(circle, purple.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(35px)"
      />
      <Box
        position="absolute"
        bottom="10%"
        right="10%"
        w="200px"
        h="200px"
        bgGradient="radial(circle, blue.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(30px)"
      />

      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Section Header */}
          <Fade direction="up" triggerOnce={true}>
            <VStack spacing={4} textAlign="center">
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                bgClip="text"
                fontWeight="bold"
                lineHeight="shorter"
              >
                Building Innovative Web Experiences
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="700px"
                lineHeight="relaxed"
              >
                A foundation built on quality, integrity, and cutting-edge technology
              </Text>
            </VStack>
          </Fade>

          {/* Main Content Grid */}
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gap={{ base: 12, lg: 16 }}
            alignItems="center"
            w="full"
          >
            {/* Left Side - Image */}
            <GridItem>
              <Zoom triggerOnce={true} delay={200}>
                <Box position="relative" display="flex" justifyContent="center">
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="radial(circle, blue.200, transparent)"
                    opacity={0.3}
                    borderRadius="full"
                    filter="blur(25px)"
                    transform="scale(1.3)"
                  />
                  <Image
                    src="./images/lapii.svg"
                    maxH={{ base: '250px', md: '300px', lg: '400px' }}
                    w="auto"
                    filter="drop-shadow(0 10px 30px rgba(0,0,0,0.1))"
                  />
                </Box>
              </Zoom>
            </GridItem>

            {/* Right Side - Content */}
            <GridItem>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <VStack spacing={8} align="start">
                  <Box>
                    <Heading
                      size="xl"
                      color={headingColor}
                      mb={4}
                      fontWeight="bold"
                    >
                      Commitment to{' '}
                      <Text as="span" color="blue.500">
                        Excellence
                      </Text>
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={textColor}
                      lineHeight="1.8"
                      mb={6}
                    >
                      As a Full Stack Developer, I am dedicated to delivering
                      high-quality, scalable web applications that exceed expectations
                      and drive business success.
                    </Text>
                  </Box>

                  {/* Principles Cards */}
                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4} w="full">
                    {principles.map((principle, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          bg={cardBg}
                          p={4}
                          rounded="xl"
                          border="1px solid"
                          borderColor={borderColor}
                          boxShadow="sm"
                          _hover={{ boxShadow: 'md' }}
                          transition="all 0.3s ease"
                        >
                          <Flex align="start" gap={3}>
                            <Text fontSize="2xl" flexShrink={0}>
                              {principle.icon}
                            </Text>
                            <Box>
                              <Heading size="sm" color={headingColor} mb={2}>
                                {principle.title}
                              </Heading>
                              <Text fontSize="sm" color={textColor} lineHeight="1.6">
                                {principle.description}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </motion.div>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Fade>
            </GridItem>
          </Grid>

          {/* Mobile Animation */}
          <Fade direction="up" triggerOnce={true} delay={600}>
            <Box maxW="500px" w="full" position="relative">
              <Box
                position="absolute"
                inset={0}
                bgGradient="radial(circle, purple.200, transparent)"
                opacity={0.2}
                borderRadius="full"
                filter="blur(20px)"
                transform="scale(1.2)"
              />
              <Lottie
                animationData={phoneAnimation}
                loop={true}
                autoplay={true}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
              />
            </Box>
          </Fade>

          {/* Skills Section */}
          <VStack spacing={8} w="full">
            <Fade direction="up" triggerOnce={true} delay={800}>
              <Heading
                fontSize={{ base: '3xl', md: '4xl' }}
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                fontWeight="bold"
                textAlign="center"
              >
                Technical Skills
              </Heading>
            </Fade>
            
            <Fade direction="up" triggerOnce={true} delay={1000}>
              <Box w="full">
                <Slider />
              </Box>
            </Fade>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
