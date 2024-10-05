import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import MatrixBackground from '../components/Matrix';
import { CardTestimonials } from '../components/CardTestimonials';
import { Skills } from '../components/Skills';
import { Fade } from 'react-awesome-reveal';
import { Projects } from '../components/Projects';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <br />
      <Hero></Hero>
      <Container
        maxW={'container.2xl'}
        display={'flex'}
        flexWrap={'wrap'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ base: '50px', sm: 5 }}
        alignSelf={'center'}
        paddingTop={'20'}
        paddingBottom={'20'}
      >
        <Fade direction={'up'} fraction={1} triggerOnce={true}>
          <CardTestimonials></CardTestimonials>
        </Fade>
        <Fade direction="down" fraction={1} triggerOnce={true}>
          <CardTestimonials></CardTestimonials>
        </Fade>
        <Fade direction="up" fraction={1} triggerOnce={true}>
          <CardTestimonials></CardTestimonials>
        </Fade>
      </Container>
      <Skills></Skills>

      <Projects></Projects>
      <AboutSection />
      <Footer />
      <Box>
        <MatrixBackground></MatrixBackground>
      </Box>
    </>
  );
};
