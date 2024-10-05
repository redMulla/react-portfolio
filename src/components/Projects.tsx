import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react';
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
        <Link href="https://ihela.bi/en/" isExternal>
          <Box
            boxSize={300}
            border={'2px'}
            borderColor={'rgb(61, 106, 255)'}
            borderRadius={'10px'}
            overflow={'hidden'}
            cursor={'pointer'}
            className="cont"
          >
            <Box
              width={'100%'}
              h={'75%'}
              bg={'red'}
              borderBottom={'2px'}
              borderColor={'rgb(61, 106, 255)'}
              overflow={'hidden'}
              position={'relative'}
            >
              <Box
                w={'100%'}
                h={'100%'}
                bg="rgba(0, 0, 0, 0.8)"
                position={'absolute'}
                top={'-100%'}
                fontFamily={'Nunito sans'}
                p={'10px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                className="overlay"
              >
                <Box fontSize={'lg'} fontWeight={'bold'} color={'white'}>
                  <Heading fontSize={'2xl'} mb={2}>
                    <u>iHela</u>
                  </Heading>
                  <span>
                    Grateful for the opportunity to work on the iHela DBS and
                    ERP project as a front-end developer!
                  </span>
                </Box>
              </Box>
              <Image
                src="./images/project.png"
                height={'100%'}
                objectFit={'cover'}
                className="scale"
              ></Image>
            </Box>
            <Box
              height={'25%'}
              width={'100%'}
              fontFamily={'Nunito sans'}
              px={'10px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={'10px'}
            >
              <Box>
                <Badge
                  variant="solid"
                  colorScheme="red"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Angular
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="purple"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Bootstrap
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="blue"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  TypeScript
                </Badge>
              </Box>
            </Box>
          </Box>
        </Link>
        <Link href="https://tiketa.bi" isExternal>
          <Box
            boxSize={300}
            border={'2px'}
            borderColor={'rgb(61, 106, 255)'}
            borderRadius={'10px'}
            overflow={'hidden'}
            cursor={'pointer'}
            className="cont"
          >
            <Box
              width={'100%'}
              h={'75%'}
              bg={'red'}
              borderBottom={'2px'}
              borderColor={'rgb(61, 106, 255)'}
              overflow={'hidden'}
              position={'relative'}
            >
              <Box
                w={'100%'}
                h={'100%'}
                bg="rgba(0, 0, 0, 0.8)"
                position={'absolute'}
                top={'-100%'}
                fontFamily={'Nunito sans'}
                p={'10px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                className="overlay"
              >
                <Box fontSize={'lg'} fontWeight={'bold'} color={'white'}>
                  <Heading fontSize={'2xl'} mb={2}>
                    <u>Tiketa</u>
                  </Heading>
                  <span>An event and tickets management app.</span>
                </Box>
              </Box>
              <Image
                src="./images/tiketa.png"
                height={'100%'}
                objectFit={'cover'}
                className="scale"
              ></Image>
            </Box>
            <Box
              height={'25%'}
              width={'100%'}
              fontFamily={'Nunito sans'}
              px={'10px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={'10px'}
            >
              <Box>
                <Badge
                  variant="solid"
                  colorScheme="blue"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  React
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="green"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  NodeJs
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="outline"
                  colorScheme="green"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Express
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="pink"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                  mt={0}
                >
                  GraphQL
                </Badge>
              </Box>
            </Box>
          </Box>
        </Link>
        <Link href="https://ntwaza.exec.bi/" isExternal>
          <Box
            boxSize={300}
            border={'2px'}
            borderColor={'rgb(61, 106, 255)'}
            borderRadius={'10px'}
            overflow={'hidden'}
            cursor={'pointer'}
            className="cont"
          >
            <Box
              width={'100%'}
              h={'75%'}
              bg={'red'}
              borderBottom={'2px'}
              borderColor={'rgb(61, 106, 255)'}
              overflow={'hidden'}
              position={'relative'}
            >
              <Box
                w={'100%'}
                h={'100%'}
                bg="rgba(0, 0, 0, 0.8)"
                position={'absolute'}
                top={'-100%'}
                fontFamily={'Nunito sans'}
                p={'10px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                className="overlay"
              >
                <Box fontSize={'lg'} fontWeight={'bold'} color={'white'}>
                  <Heading fontSize={'2xl'} mb={2}>
                    <u>Tiketa eConnect</u>
                  </Heading>
                  <span>
                    Grateful for the opportunity to work on the iHela DBS and
                    ERP project as a front-end developer!
                  </span>
                </Box>
              </Box>
              <Image
                src="./images/ntwaza.png"
                height={'100%'}
                objectFit={'cover'}
                className="scale"
              ></Image>
            </Box>
            <Box
              height={'25%'}
              width={'100%'}
              fontFamily={'Nunito sans'}
              px={'10px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={'10px'}
            >
              <Box>
                <Badge
                  variant="solid"
                  colorScheme="red"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Angular
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="purple"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Bootstrap
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="blue"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  TypeScript
                </Badge>
              </Box>
            </Box>
          </Box>
        </Link>

        <Link href="https://safideals.com/" isExternal>
          <Box
            boxSize={300}
            border={'2px'}
            borderColor={'rgb(61, 106, 255)'}
            borderRadius={'10px'}
            overflow={'hidden'}
            cursor={'pointer'}
            className="cont"
          >
            <Box
              width={'100%'}
              h={'75%'}
              bg={'red'}
              borderBottom={'2px'}
              borderColor={'rgb(61, 106, 255)'}
              overflow={'hidden'}
              position={'relative'}
            >
              <Box
                w={'100%'}
                h={'100%'}
                bg="rgba(0, 0, 0, 0.8)"
                position={'absolute'}
                top={'-100%'}
                fontFamily={'Nunito sans'}
                p={'10px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                className="overlay"
              >
                <Box fontSize={'lg'} fontWeight={'bold'} color={'white'}>
                  <span>
                    Grateful for the opportunity to work on the iHela DBS and
                    ERP project as a front-end developer!
                  </span>
                </Box>
              </Box>
              <Image
                src="./images/safideals.png"
                height={'100%'}
                objectFit={'cover'}
                className="scale"
              ></Image>
            </Box>
            <Box
              height={'25%'}
              width={'100%'}
              fontFamily={'Nunito sans'}
              px={'10px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={'10px'}
            >
              <Box>
                <Badge
                  variant="solid"
                  colorScheme="red"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Angular
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="purple"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  Bootstrap
                </Badge>
              </Box>

              <Box>
                <Badge
                  variant="solid"
                  colorScheme="blue"
                  fontFamily={'Nunito sans'}
                  maxH={'fit-content'}
                  rounded={'full'}
                  px={'8px'}
                >
                  TypeScript
                </Badge>
              </Box>
            </Box>
          </Box>
        </Link>
      </Flex>
    </Container>
  );
};
