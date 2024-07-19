import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export const CardTestimonials = () => {
  return (
    <Box
      w={{ sm: 'sm' }}
      bg={useColorModeValue('gray.100', 'black')}
      border={'4px solid'}
      position={'relative'}
      borderRadius={'15px'}
      borderColor={'green'}
      display={'flex'}
      flexDir={'column'}
      alignSelf={'center'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingTop={'3'}
      paddingBottom={'3'}
    >
      {/* Avatar */}
      <Box
        height={'80px'}
        width={'80px'}
        minW={'60px'}
        borderRadius={'50%'}
        overflow={'hidden'}
        margin={'3'}
        border={'1px solid'}
      >
        {/* <Skeleton height={'60px'} width={'100%'} count={6}/> */}
        <Image src="https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg" />
      </Box>
      <Heading margin={'5'} fontSize={'md'} fontWeight={'500'}>
        Ibinkwiye Vassilly delivered a fantastic full-stack web service for us.
        They were responsive, efficient, and the final product is excellent.
        Highly recommend!"
      </Heading>
      <Text justifySelf={'center'} textColor={'GrayText'} mb={'3'}>
        - John Doe
      </Text>
      <Box
        position={'absolute'}
        bottom={'-13px'}
        bg={'var(--chakra-colors-chakra-body-bg)'}
        px={'2'}
        borderRadius={'10px'}
        border={'2px'}
      >
        <FontAwesomeIcon icon={faStarSolid} />
        <FontAwesomeIcon icon={faStarSolid} />
        <FontAwesomeIcon icon={faStarSolid} />
        <FontAwesomeIcon icon={faStarRegular} />
        <FontAwesomeIcon icon={faStarRegular} />
      </Box>
    </Box>
  );
};
