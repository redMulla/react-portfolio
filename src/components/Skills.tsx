import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => {
  return (
    <Box bg="var(--chakra-colors-chakra-body-bg)" w={'100%'}>
        <Container maxW={'container.xl'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingTop={'10'} paddingBottom={'6'}>

            <Heading justifySelf={'center'} className="blueText" fontSize={'3xl'}> A Foundation For Building Innovative Web Experiences.</Heading>
            </Box>
        </Container>
    </Box>
  )
}
