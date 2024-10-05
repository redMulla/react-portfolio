import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.900')}>
      <Container maxW={'container.xl'} pb={'30px'}>
        <Heading textAlign={'center'} py={'10'} className="blueText">
          About Me
        </Heading>

        <Box
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
          flexDir={{ base: 'column', lg: 'row' }}
          pb={6}
        >
          <Box
            maxW={300}
            mb={{ base: '60px', lg: 0 }}
            me={{ base: 0, lg: '30px' }}
          >
            <Box
              boxSize={300}
              minH={300}
              minW={300}
              borderRadius={'20px'}
              overflow={'hidden'}
              mb={5}
              border={'2px'}
              borderColor={'blue.500'}
            >
              <Image
                src={'/images/profile.png'}
                alt={'Profile Image'}
                boxSize={'100%'}
              />
            </Box>

            <Flex justifyContent={'space-around'} alignItems={'center'}>
              <Link
                href="https://www.instagram.com/red_vassily/"
                isExternal
                sx={{
                  '&:hover': {
                    textColor: 'blue.500',
                  },
                }}
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </Link>

              <Link
                href="https://x.com/Vassilly3"
                isExternal
                sx={{
                  '&:hover': {
                    textColor: 'blue.500',
                  },
                }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/vassilly-red-v-ibinkwiye-3884131b9"
                isExternal
                sx={{
                  '&:hover': {
                    textColor: 'blue.500',
                  },
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </Link>

              <Link
                href="https://github.com/redMulla"
                isExternal
                sx={{
                  '&:hover': {
                    textColor: 'blue.500',
                  },
                }}
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </Link>
            </Flex>
          </Box>

          <Box maxW={'600px'} fontSize={'xl'} textAlign={'center'}>
            <Text>
              Hi there! I’m <span className="blueText">Vassilly Ibinkwiye</span>
              , a 29-year-old Full-Stack web developer with three years of
              hands-on experience crafting seamless digital experiences. I
              thrive on challenges, viewing each project as an opportunity to
              learn and innovate. My journey in web development has taught me
              the importance of blending functionality with creativity, and I
              love transforming complex problems into elegant solutions.
            </Text>
            <Text my={2}>
              Beyond coding, I have a deep passion for music. Whether I’m
              jamming on my instrument or diving into a new playlist, music
              fuels my creativity and inspires my work. I believe that the
              rhythm and harmony found in music parallel the art of web
              design—both require balance, creativity, and a touch of intuition.
            </Text>
            <Text>
              I’m always eager to collaborate and connect with fellow creatives
              and visionaries. If you’re looking for someone who is not only
              skilled in web development but also brings a fresh perspective and
              a love for innovation, let’s create something extraordinary
              together!
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
