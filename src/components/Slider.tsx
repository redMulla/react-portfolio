import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const slider = () => {
  return (
    <Box
      className="slider"
      w={'100%'}
      h={'50px'}
      overflow={'hidden'}
      boxShadow="inner"
      pt={2}
    >
      <Box
        className="list"
        display={'flex'}
        position={'relative'}
        minW={'1000px'}
      >
        <Box
          className="item i1"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-javascript-plain icons"></i>
          <Text>JavaScipt</Text>
        </Box>
        <Box
          className="item i2"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-react-original icons"></i>
          <Text>React</Text>
        </Box>
        <Box
          className="item i3"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-typescript-plain icons"></i>
          <Text>TypeScipt</Text>
        </Box>
        <Box
          className="item i4"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-express-original icons"></i>
          <Text>Express.js</Text>
        </Box>
        <Box
          className="item i5"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-mongodb-plain icons"></i>
          <Text>MongoDB</Text>
        </Box>
        <Box
          className="item i6"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-graphql-plain icons"></i>
          <Text>GraphQL</Text>
        </Box>
        <Box
          className="item i7"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-nodejs-plain-wordmark icons"></i>
          <Text>NodeJS</Text>
        </Box>
        <Box
          className="item i8"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-postgresql-plain icons"></i>
          <Text>PostgreSQL</Text>
        </Box>
        <Box
          className="item i9"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-bootstrap-plain icons"></i>
          <Text>Bootstrap</Text>
        </Box>
        <Box
          className="item i10"
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          justifyContent={'center'}
          minW={'150px'}
          maxW={'150px'}
        >
          <i className="devicon-angular-plain icons"></i>
          <Text>Angular</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default slider;
