import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

export const Hero = () => {
  return (
    <Container maxW="container.xl" pt="10" mt="8">
      <Grid
        h="80%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6,1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={4}></GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <Box>
            <Image src="./images/Hand coding-amico.svg" />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
