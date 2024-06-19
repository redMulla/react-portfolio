import { Box, useColorModeValue, Image } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <br />
      <Hero></Hero>
    </>
  );
};
