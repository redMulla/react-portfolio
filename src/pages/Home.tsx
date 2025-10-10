import { Box, Container, VStack } from '@chakra-ui/react';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import ModernBackground from '../components/Matrix';
import { CardTestimonials } from '../components/CardTestimonials';
import { Skills } from '../components/Skills';
import { Fade } from 'react-awesome-reveal';
import { Projects } from '../components/Projects';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

// Sample testimonials data for a more professional approach
const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Vassilly delivered exceptional full-stack development work. The attention to detail and code quality exceeded our expectations.",
    avatar: "https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content: "Professional, reliable, and technically excellent. Vassilly transformed our complex requirements into a seamless user experience.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer at CreativeStudio",
    content: "Outstanding collaboration and implementation. The final product perfectly matched our design vision with robust functionality.",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    rating: 4
  }
];

export const Home = () => {
  return (
    <>
      <Analytics />
      <NavBar />

      {/* Main content with better structure */}
      <VStack spacing={0} w="100%">
        <Hero />

        {/* Testimonials Section with proper spacing */}
        <Box
          w="100%"
          py={{ base: 16, md: 20 }}
          bg="var(--chakra-colors-chakra-body-bg)"
        >
          <Container maxW="container.xl">
            <VStack spacing={8}>
              <Container
                maxW="container.lg"
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="stretch"
                gap={{ base: 8, md: 6 }}
              >
                {testimonialsData.map((testimonial, index) => (
                  <Fade
                    key={index}
                    direction={index % 2 === 0 ? 'up' : 'down'}
                    fraction={0.3}
                    triggerOnce={true}
                    delay={index * 100}
                  >
                    <CardTestimonials {...testimonial} />
                  </Fade>
                ))}
              </Container>
            </VStack>
          </Container>
        </Box>

        <Skills />
        <Projects />
        <AboutSection />
        <Footer />
      </VStack>

      {/* Background effects */}
      <Box position="fixed" top={0} left={0} w="100%" h="100%" zIndex={-1} pointerEvents="none">
        <ModernBackground />
      </Box>
    </>
  );
};
