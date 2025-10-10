import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
  HStack,
  useColorModeValue,
  Grid,
  GridItem,
  Link,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgGradient = useColorModeValue(
    'linear(to-br, gray.900, blue.900, purple.900)',
    'linear(to-br, gray.900, blue.900, purple.900)'
  );
  const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100');
  const inputBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200');
  const textColor = 'gray.300';
  const headingColor = 'white';

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xyzygjep', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message sent.',
          description: "We've received your message!",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/red_vassily/",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: faTwitter,
      href: "https://x.com/Vassilly3",
      label: "Twitter",
      color: "#1DA1F2"
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/vassilly-red-v-ibinkwiye-3884131b9",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: faGithub,
      href: "https://github.com/redMulla",
      label: "GitHub",
      color: "#fff"
    }
  ];

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "ivassillycharite@gmail.com",
      href: "mailto:ivassillycharite@gmail.com"
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+971 50 493 0652",
      href: "tel:+971504930652"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Dubai, UAE",
      href: "#"
    }
  ];

  return (
    <Box 
      as="footer" 
      bgGradient={bgGradient}
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        w="400px"
        h="400px"
        bgGradient="radial(circle, blue.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(50px)"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="10%"
        w="300px"
        h="300px"
        bgGradient="radial(circle, purple.400, transparent)"
        opacity={0.1}
        borderRadius="full"
        filter="blur(40px)"
      />

      <Container maxW="container.2xl" py={{ base: 16, md: 20 }} px={{base: 2, sm: 5, md: 10, lg: 14, xl: 20}}>
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
                Let's Work Together
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="600px"
              >
                Ready to bring your ideas to life? Let's discuss your next project
              </Text>
            </VStack>
          </Fade>

          {/* Contact Content */}
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gap={{ base: 12, lg: 16 }}
            w="full"
          >
            {/* Contact Info */}
            <GridItem>
              <Fade direction="left" triggerOnce={true} delay={200}>
                <VStack spacing={8} align="start">
                  <Box>
                    <Heading size="lg" color={headingColor} mb={4}>
                      Get In Touch
                    </Heading>
                    <Text color={textColor} fontSize="lg" lineHeight="1.8">
                      I'm always open to discussing new opportunities, 
                      creative projects, or just having a friendly chat about technology.
                    </Text>
                  </Box>

                  {/* Contact Details */}
                  <VStack spacing={4} align="start" w="full">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href={contact.href} isExternal>
                          <HStack spacing={4} p={3} rounded="lg" _hover={{ bg: 'whiteAlpha.100' }}>
                            <Box
                              w={10}
                              h={10}
                              bg="blue.500"
                              rounded="full"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <FontAwesomeIcon icon={contact.icon} size="sm" />
                            </Box>
                            <VStack align="start" spacing={0}>
                              <Text fontSize="sm" color="gray.400">
                                {contact.label}
                              </Text>
                              <Text color="white" fontWeight="medium">
                                {contact.value}
                              </Text>
                            </VStack>
                          </HStack>
                        </Link>
                      </motion.div>
                    ))}
                  </VStack>

                  {/* Social Links */}
                  <Box>
                    <Text color={textColor} mb={4} fontSize="lg" fontWeight="medium">
                      Follow Me
                    </Text>
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
                              color="gray.300"
                              _hover={{
                                bg: 'whiteAlpha.200',
                                color: social.color,
                                transform: 'translateY(-2px)',
                              }}
                              transition="all 0.3s ease"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </Fade>
            </GridItem>

            {/* Contact Form */}
            <GridItem>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <Box
                  bg={cardBg}
                  p={8}
                  rounded="2xl"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  boxShadow="xl"
                >
                  <VStack spacing={6} as="form" onSubmit={handleSubmit}>
                    <Heading size="md" color={headingColor} textAlign="center">
                      Send Me a Message
                    </Heading>

                    <FormControl isRequired>
                      <FormLabel color={textColor}>Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        bg={inputBg}
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _focus={{
                          borderColor: 'blue.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)',
                        }}
                        rounded="lg"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color={textColor}>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        bg={inputBg}
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _focus={{
                          borderColor: 'blue.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)',
                        }}
                        rounded="lg"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color={textColor}>Message</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        resize="none"
                        rows={5}
                        bg={inputBg}
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _placeholder={{ color: 'gray.400' }}
                        _focus={{
                          borderColor: 'blue.400',
                          boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)',
                        }}
                        rounded="lg"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      size="lg"
                      w="full"
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      color="white"
                      _hover={{
                        bgGradient: 'linear(to-r, blue.500, purple.600)',
                        transform: 'translateY(-2px)',
                        boxShadow: 'xl',
                      }}
                      transition="all 0.3s ease"
                      rounded="lg"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Fade>
            </GridItem>
          </Grid>

          {/* Footer Bottom */}
          <Box w="full">
            <Divider borderColor="whiteAlpha.300" />
            <Flex
              pt={8}
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align="center"
              gap={4}
            >
              <Text color={textColor} textAlign="center">
                &copy; {currentYear} Vassilly Ibinkwiye. All rights reserved.
              </Text>
              <Text color={textColor} fontSize="sm" textAlign="center">
                Built with ❤️ using React & Chakra UI
              </Text>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactForm;