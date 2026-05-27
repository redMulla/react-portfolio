import {
  Box,
  Text,
  useColorModeValue,
  Avatar,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const CardTestimonials: React.FC<TestimonialProps> = ({
  name,
  role,
  content,
  avatar,
  rating,
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const nameColor = useColorModeValue('gray.800', 'white');

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStarSolid : faStarRegular}
          color="#FFD700"
          size="sm"
        />
      );
    }
    return stars;
  };

  return (
    <Box
      maxW="sm"
      w="full"
      bg={bgColor}
      boxShadow="xl"
      rounded="xl"
      p={6}
      position="relative"
      border="1px solid"
      borderColor={borderColor}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '2xl',
      }}
    >
      {/* Quote Icon */}
      <Box position="absolute" top={4} left={4} opacity={0.1}>
        <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      </Box>

      <VStack spacing={4} align="center">
        {/* Avatar */}
        <Avatar
          size="lg"
          src={avatar}
          name={name}
          border="3px solid"
          borderColor="blue.500"
        />

        {/* Content */}
        <Text
          fontSize="md"
          textAlign="center"
          color={textColor}
          fontStyle="italic"
          lineHeight="1.6"
          px={2}
        >
          "{content}"
        </Text>

        {/* Name and Role */}
        <VStack spacing={1}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color={nameColor}
            textAlign="center"
          >
            {name}
          </Text>
          <Text fontSize="sm" color={textColor} textAlign="center">
            {role}
          </Text>
        </VStack>

        {/* Rating */}
        <HStack spacing={1}>{renderStars()}</HStack>
      </VStack>
    </Box>
  );
};
