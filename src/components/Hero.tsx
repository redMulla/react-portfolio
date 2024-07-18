import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Lottie from 'lottie-react';
import animationData from '../assets/code.json';
// import { Keyboard3d } from './Keyboard3d';

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Ideas into Reality',
        'Dreams into Websites',
        'Challenges into Success',
      ],
      typeSpeed: 90,
      loop: true,
      loopCount: Infinity,
      cursorChar: '/>',
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box bg="var(--chakra-colors-chakra-body-bg)" minH="80vh" py="10">
      <Container maxW="container.xl" pt="10" mt="8">
        <Grid
          h="80%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6,1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={2}
            colSpan={4}
            display="flex"
            // alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Heading as="h1" size="3xl" textAlign="center">
              Vassilly <b className="blueText">Ibinkwiye:</b> Full-Stack Web
              Developer
            </Heading>
            <Text fontSize="3xl" pt="4" pl="4">
              &lt;Turn <span className="blueText" ref={el} />{' '}
            </Text>
          </GridItem>
          <GridItem rowSpan={2} colSpan={2}>
            <Box pt="7">
              {/* <Image src="./images/Hand coding-amico.svg" /> */}
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
              />
            </Box>
            {/* <Keyboard3d></Keyboard3d> */}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
