import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// Project data for better organization
const projectsData = [
  {
    title: 'iHela',
    description:
      'Comprehensive DBS and ERP system with modern frontend architecture. Built for efficient business management and data processing.',
    image: './images/project.png',
    url: 'https://ihela.bi/en/',
    technologies: [
      { name: 'Angular', color: 'red' },
      { name: 'Bootstrap', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
    ],
    featured: true,
  },
  // {
  //   title: "Tiketa",
  //   description: "Modern event and ticket management platform with real-time booking capabilities and seamless user experience.",
  //   image: "./images/tiketa.png",
  //   url: "https://tiketa.bi",
  //   technologies: [
  //     { name: "React", color: "blue" },
  //     { name: "NodeJs", color: "green" },
  //     { name: "Express", color: "green", variant: "outline" },
  //     { name: "GraphQL", color: "pink" }
  //   ]
  // },
  // {
  //   title: "Ntwaza eConnect",
  //   description: "Advanced shipment management system optimizing logistics operations for enhanced customer satisfaction and efficiency.",
  //   image: "./images/ntwaza.png",
  //   url: "https://ntwaza.exec.bi/",
  //   technologies: [
  //     { name: "React", color: "blue" },
  //     { name: "NodeJs", color: "green" },
  //     { name: "Express", color: "green", variant: "outline" },
  //     { name: "GraphQL", color: "pink" }
  //   ]
  // },
  // {
  //   title: "Safi Deals",
  //   description: "Ethical marketplace platform connecting buyers and sellers in a secure, transparent environment built on trust and integrity.",
  //   image: "./images/safideals.png",
  //   url: "https://safideals.com/",
  //   technologies: [
  //     { name: "React", color: "blue" },
  //     { name: "NodeJs", color: "green" },
  //     { name: "Express", color: "green", variant: "outline" },
  //     { name: "GraphQL", color: "pink" }
  //   ]
  // }
  {
    title: 'RentalGuard',
    description:
      'An intelligent protection platform designed to safeguard landlords and property managers by screening tenants, detecting fraud, and mitigating rental risks.',
    image: './images/rentalguard.png',
    url: 'https://rental-guard.vercel.app/',
    technologies: [
      { name: 'React', color: 'blue' },
      { name: 'TailwindCSS', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Supabase', color: 'orange' },
    ],
  },
  {
    title: 'Tasty Bites',
    description:
      'A small restaurant website for whatsapp food orders and menu display.',
    image: './images/tastybites.png',
    url: 'https://restaurant-website-client-two.vercel.app//',
    technologies: [
      { name: 'NextJS', color: 'gray' },
      { name: 'TailwindCSS', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'MongoDB', color: 'green' },
    ],
  },
  {
    title: 'Royal Cut',
    description:
      'A Salon website for booking appointments and services using WhatsApp.',
    image: './images/royalcut.png',
    url: 'https://royal-cut.vercel.app/',
    technologies: [
      { name: 'NextJS', color: 'gray' },
      { name: 'TailwindCSS', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
    ],
  },
];

export const Projects = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, blue.50)',
    'linear(to-br, gray.900, blue.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const headingColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      w="100%"
      bgGradient={bgGradient}
      py={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="200px"
        h="200px"
        bgGradient="radial(circle, blue.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(30px)"
      />

      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Section Header */}
          <Fade direction="up" triggerOnce={true}>
            <VStack spacing={4} textAlign="center">
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                bgClip="text"
                fontWeight="bold"
              >
                Featured Projects
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="600px"
              >
                A showcase of my recent work in full-stack development,
                featuring modern web applications built with cutting-edge
                technologies.
              </Text>
            </VStack>
          </Fade>

          {/* Projects Grid */}
          <Box w="100%">
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              alignItems="stretch"
              gap={{ base: 6, md: 8 }}
            >
              {projectsData.map((project, index) => (
                <Fade
                  key={index}
                  direction="up"
                  triggerOnce={true}
                  delay={index * 100}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      maxW="sm"
                      w="full"
                      bg={cardBg}
                      boxShadow="xl"
                      rounded="2xl"
                      overflow="hidden"
                      position="relative"
                      border="1px solid"
                      borderColor={borderColor}
                      transition="all 0.3s ease"
                      _hover={{
                        boxShadow: '2xl',
                        transform: 'translateY(-4px)',
                      }}
                    >
                      {/* Project Image */}
                      <Box position="relative" overflow="hidden" h="200px">
                        <Image
                          src={project.image}
                          alt={project.title}
                          w="full"
                          h="full"
                          objectFit="cover"
                          transition="transform 0.3s ease"
                          _hover={{ transform: 'scale(1.05)' }}
                        />
                        <Box
                          position="absolute"
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                          bgGradient="linear(to-t, blackAlpha.600, transparent)"
                          opacity={0}
                          transition="opacity 0.3s ease"
                          _hover={{ opacity: 1 }}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Link href={project.url} isExternal>
                            <Box
                              bg="whiteAlpha.900"
                              color="gray.800"
                              px={4}
                              py={2}
                              rounded="full"
                              fontWeight="bold"
                              display="flex"
                              alignItems="center"
                              gap={2}
                              _hover={{ bg: 'white' }}
                              transition="all 0.2s ease"
                            >
                              View Project <ExternalLinkIcon />
                            </Box>
                          </Link>
                        </Box>
                      </Box>

                      {/* Project Content */}
                      <VStack p={6} align="start" spacing={4}>
                        <VStack align="start" spacing={2} w="full">
                          <Heading
                            size="lg"
                            color={headingColor}
                            fontWeight="bold"
                          >
                            {project.title}
                          </Heading>
                          <Text
                            color={textColor}
                            fontSize="sm"
                            lineHeight="1.6"
                            noOfLines={3}
                          >
                            {project.description}
                          </Text>
                        </VStack>

                        {/* Technologies */}
                        <Box w="full">
                          <Flex flexWrap="wrap" gap={2}>
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant={'solid'}
                                colorScheme={tech.color}
                                rounded="full"
                                px={3}
                                py={1}
                                fontSize="xs"
                                fontWeight="medium"
                              >
                                {tech.name}
                              </Badge>
                            ))}
                          </Flex>
                        </Box>
                      </VStack>
                    </Box>
                  </motion.div>
                </Fade>
              ))}
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
