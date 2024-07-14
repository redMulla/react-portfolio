import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

export const CardTestimonials = () => {
  
  return (
    <Box w="sm"  bg={useColorModeValue('blue.100', 'blue.900')} borderRadius={'15px'} display={'flex'}flexDir={'column'} justifyContent={"center"} alignItems={'center'} paddingTop={'3'} paddingBottom={'3'}>
        {/* Avatar */}
        <Box height={'80px'} minH={'0px'} width={'80px'} minW={"60px"} borderRadius={'50%'}  overflow={'hidden'} margin={'3'} border={'1px solid'}>
          {/* <Skeleton height={'60px'} width={'100%'} count={6}/> */}
          <Image src='https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg'/>
        </Box>
        <Heading margin={'5'} fontSize={'md'} fontWeight={'500'} >Ibinkwiye Vassilly delivered a fantastic full-stack web service for us. They were responsive, efficient, and the final product is excellent. Highly recommend!"</Heading>
        <Text justifySelf={'center'} textColor={'GrayText'}>- John Doe</Text>
    </Box>
  )
}
