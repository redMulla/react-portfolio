import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

export const Skills = () => {
  return (
    <Box bg="var(--chakra-colors-chakra-body-bg)" w={'100%'} pb={'5'}>
      <Container maxW={'container.xl'}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          paddingTop={'10'}
          paddingBottom={'6'}
        >
          <Heading justifySelf={'center'} className="blueText" fontSize={'4xl'}>
            {' '}
            A Foundation For Building Innovative Web Experiences.
          </Heading>
        </Box>
        <Flex flexDir={'row'} mt={'50px'} alignItems={'center'}>
          <Image src="./images/lapii.svg" maxH={'400px'} />
          <Box
            display={'flex'}
            justifyContent={'center'}
            flexDir={'column'}
            h="100%"
            w={'100%'}
            alignItems={'center'}
          >
            <Heading fontSize={'3xl'} mb={'3'}>
              Commitment to Quality and Integrity
            </Heading>
            <Flex alignItems={'center'} w={'100%'} justifyContent={'center'}>
              {/* <Box mr={'2'}>
                <i className="devicon-javascript-plain icons"></i>
              </Box>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarRegular} /> */}

              <Text fontSize={'xl'} w={'100%'} h={'100%'} textAlign={'center'}>
                As a Full Stack Developer, I am dedicated to delivering
                high-quality, scalable web applications. I ensure meticulous
                attention to detail and adherence to best practices for optimal
                performance and maintainability. My work is guided by strong
                ethical principles, prioritizing integrity, transparency, and
                professionalism. I aim to build software that meets client
                needs, stands the test of time, and earns trust through
                reliability and excellence.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
