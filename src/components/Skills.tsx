import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'
import React from 'react'

export const Skills = () => {
  return (
    <Box bg="var(--chakra-colors-chakra-body-bg)" w={'100%'} pb={'5'}>
      <Container maxW={'container.xl'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingTop={'10'} paddingBottom={'6'}>

          <Heading justifySelf={'center'} className="blueText" fontSize={'3xl'}> A Foundation For Building Innovative Web Experiences.</Heading>
          </Box>

          <Box display={'flex'} justifyContent={'center'} flexDir={'column'}>
            <Heading fontSize={'2xl'} mb={'3'}>Front-end Development</Heading>
            <Flex alignItems={'center'}>
              <Box mr={'2'}>
                <i className="devicon-javascript-plain icons"></i>
              </Box>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarRegular} />
            </Flex>
        </Box>
      </Container>
    </Box>
  )
}
