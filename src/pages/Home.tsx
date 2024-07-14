import { Box, useColorModeValue, Image, Container } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import MatrixBackground from '../components/Matrix';
import { CardTestimonials } from '../components/CardTestimonials';
import { Skills } from '../components/Skills';

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <br />
      <Hero></Hero>
      <Container maxW={'container.xl'} display={'flex'} justifyContent={'space-between'} paddingTop={'20'} paddingBottom={'20'}>
      <CardTestimonials></CardTestimonials>
      <CardTestimonials></CardTestimonials>
      <CardTestimonials></CardTestimonials>
      </Container>
      <Skills></Skills>
      <Box>
        <MatrixBackground></MatrixBackground>
      </Box>
    </>
  );
};
