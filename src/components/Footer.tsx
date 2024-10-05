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
} from '@chakra-ui/react';
import { useState } from 'react';

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
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

  return (
    <Box as="footer" p={5} bg={'black'} textColor={'gray.300'}>
      <Container maxW="container.xl">
        <Heading as="h3" fontSize="3xl" mb={4} textAlign={'center'}>
          Contact Me
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              resize="none"
            />
          </FormControl>
          <Box display={'flex'} justifyContent={'center'} my={10}>
            <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
              Send Message
            </Button>
          </Box>
        </form>

        <Flex borderTop={'2px'} width={'100%'} pt={3} justifyContent={'center'}>
          <Text>
            &copy; {currentYear} Vassilly Charite. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactForm;
