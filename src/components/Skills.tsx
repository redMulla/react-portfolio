import React from 'react';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Lottie from 'lottie-react';
import phoneAnimation from '../assets/mobile.json';
import Slider from './Slider';

export const Skills = () => {
  return (
    <Box bg="var(--chakra-colors-chakra-body-bg)" w={'100%'}>
      <Container maxW={'container.xl'} pb={4}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          paddingTop={'10'}
          paddingBottom={'6'}
        >
          <Heading textAlign={'center'} className="blueText" fontSize={'4xl'}>
            {' '}
            A Foundation For Building Innovative Web Experiences.
          </Heading>
        </Box>
        <Flex flexDir={'row'} mt={'50px'} alignItems={'center'}>
          <Image
            src="./images/lapii.svg"
            maxH={{ md: '200px', lg: '300px', xl: '400px' }}
            display={{ base: 'none', md: 'block' }}
          />

          <Box
            display={'flex'}
            justifyContent={'center'}
            flexDir={'column'}
            h="100%"
            w={'100%'}
            zIndex={'1'}
            alignItems={'center'}
          >
            <Image
              src="./images/lapii.svg"
              maxH={{ base: '200px', md: '', lg: '300px', xl: '400px' }}
              // position={'absolute'}
              display={{ base: 'block', md: 'none' }}
              ml={'auto'}
              mr={'auto'}
              left={'0'}
              right={'0'}
              mb={'5'}
            />
            <Heading as={'h3'} fontSize={'3xl'} mb={'3'} textAlign={'center'}>
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
        <Box maxW={'600px'} m={'auto'} p={0}>
          <Lottie
            animationData={phoneAnimation}
            loop={true}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
          />
        </Box>
        <Box>
          <Heading
            as={'h3'}
            fontSize={'4xl'}
            textAlign={'center'}
            mb={'5'}
            className="blueText"
          >
            Skills
          </Heading>
          <Slider></Slider>
        </Box>
      </Container>
    </Box>
  );
};
