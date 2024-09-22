import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Projects = () => {
  return (
    <Container
      maxW={'container.2xl'}
      w={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      py={'20'}
      //   bg={'var(--chakra-colors-chakra-body-bg)'}
      bg={'rgba(0, 0, 0, 0.8)'}
    >
      <Heading textColor={'white'} fontSize={'6xl'}>
        Projects
      </Heading>
      ;
    </Container>
  );
};
