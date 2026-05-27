import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Avatar,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade, Zoom } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, white, blue.50, purple.50)',
    'linear(to-br, gray.800, gray.900, blue.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const githubColor = useColorModeValue('#333', '#fff');
  const socialHoverBg = useColorModeValue('gray.100', 'gray.600');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const socialLinks = [
    {
      icon: faInstagram,
      href: 'https://www.instagram.com/red_vassily/',
      label: 'Instagram',
      color: '#E4405F',
    },
    {
      icon: faTwitter,
      href: 'https://x.com/Vassilly3',
      label: 'Twitter',
      color: '#1DA1F2',
    },
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/vassilly-red-v-ibinkwiye-3884131b9',
      label: 'LinkedIn',
      color: '#0077B5',
    },
    {
      icon: faGithub,
      href: 'https://github.com/redMulla',
      label: 'GitHub',
      color: githubColor,
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Happy Clients', value: '20+' },
  ];

  return (
    <Box
      bgGradient={bgGradient}
      py={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="20%"
        left="5%"
        w="300px"
        h="300px"
        bgGradient="radial(circle, purple.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(40px)"
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
              >
                About Me
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="600px"
              >
                Get to know the person behind the code
              </Text>
            </VStack>
          </Fade>

          {/* Main Content */}
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr 2fr' }}
            gap={{ base: 12, lg: 16 }}
            alignItems="start"
            w="full"
          >
            {/* Profile Section */}
            <GridItem>
              <Zoom triggerOnce={true} delay={200}>
                <VStack spacing={8} align="center">
                  {/* Profile Image */}
                  <Box position="relative">
                    <Box
                      position="absolute"
                      inset={0}
                      bgGradient="radial(circle, blue.400, transparent)"
                      opacity={0.3}
                      borderRadius="full"
                      filter="blur(20px)"
                      transform="scale(1.2)"
                    />
                    <Avatar
                      size="2xl"
                      src="/images/profile.png"
                      name="Vassilly Ibinkwiye"
                      border="4px solid"
                      borderColor="blue.500"
                      boxShadow="xl"
                      w={{ base: '200px', md: '250px' }}
                      h={{ base: '200px', md: '250px' }}
                    />
                  </Box>

                  {/* Social Links */}
                  <HStack spacing={4}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={social.href} isExternal>
                          <IconButton
                            aria-label={social.label}
                            icon={<FontAwesomeIcon icon={social.icon} />}
                            size="lg"
                            variant="ghost"
                            rounded="full"
                            color={textColor}
                            _hover={{
                              bg: socialHoverBg,
                              color: social.color,
                              transform: 'translateY(-2px)',
                            }}
                            transition="all 0.3s ease"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </HStack>

                  {/* Stats */}
                  <Box
                    bg={cardBg}
                    p={6}
                    rounded="xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor={borderColor}
                    w="full"
                  >
                    <SimpleGrid columns={2} spacing={4}>
                      {stats.map((stat, index) => (
                        <Stat key={index} textAlign="center">
                          <StatNumber
                            fontSize="2xl"
                            fontWeight="bold"
                            color="blue.500"
                          >
                            {stat.value}
                          </StatNumber>
                          <StatLabel fontSize="sm" color={textColor}>
                            {stat.label}
                          </StatLabel>
                        </Stat>
                      ))}
                    </SimpleGrid>
                  </Box>
                </VStack>
              </Zoom>
            </GridItem>

            {/* Content Section */}
            <GridItem>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <VStack spacing={6} align="start" textAlign="left">
                  <Box>
                    <Heading size="lg" color={headingColor} mb={4}>
                      Hi there! I'm{' '}
                      <Text as="span" color="blue.500">
                        Vassilly Ibinkwiye
                      </Text>
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={textColor}
                      lineHeight="1.8"
                    >
                      A 30-year-old Full-Stack web developer with three years of
                      hands-on experience crafting seamless digital experiences.
                      I thrive on challenges, viewing each project as an
                      opportunity to learn and innovate. My journey in web
                      development has taught me the importance of blending
                      functionality with creativity, and I love transforming
                      complex problems into elegant solutions.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="md" color={headingColor} mb={3}>
                      Beyond the Code
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={textColor}
                      lineHeight="1.8"
                    >
                      Beyond coding, I have a deep passion for music. Whether
                      I'm jamming on my instrument or diving into a new
                      playlist, music fuels my creativity and inspires my work.
                      I believe that the rhythm and harmony found in music
                      parallel the art of web design—both require balance,
                      creativity, and a touch of intuition.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="md" color={headingColor} mb={3}>
                      Let's Create Together
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={textColor}
                      lineHeight="1.8"
                    >
                      I'm always eager to collaborate and connect with fellow
                      creatives and visionaries. If you're looking for someone
                      who is not only skilled in web development but also brings
                      a fresh perspective and a love for innovation, let's
                      create something extraordinary together!
                    </Text>
                  </Box>
                </VStack>
              </Fade>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutSection;
