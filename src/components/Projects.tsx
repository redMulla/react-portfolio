import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';

export const Projects = () => {
  return (
    <Container
      maxW={'container.2xl'}
      w={'100%'}
      overflow={'hidden'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      py={'20'}
      //   bg={'var(--chakra-colors-chakra-body-bg)'}
      bg={'rgba(0, 0, 0, 0.8)'}
    >
      <Heading textColor={'white'} fontSize={'5xl'}>
        Projects
      </Heading>
      <Flex
        mt={'90px'}
        gap={20}
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          boxSize={300}
          border={'2px'}
          borderColor={'rgb(61, 106, 255)'}
          borderRadius={'10px'}
          overflow={'hidden'}
          className="cont"
        >
          <Box
            width={'100%'}
            h={'75%'}
            bg={'red'}
            borderBottom={'2px'}
            borderColor={'rgb(61, 106, 255)'}
            overflow={'hidden'}
          >
            <Image
              src="./images/project.png"
              height={'100%'}
              objectFit={'cover'}
              className="scale"
            ></Image>
          </Box>
          <Box height={'100%'} width={'100%'}></Box>
        </Box>
        <Box boxSize={300} bg={'white'}></Box>
        <Box boxSize={300} bg={'white'}></Box>
        <Box boxSize={300} bg={'white'}></Box>
      </Flex>
    </Container>
  );
};
