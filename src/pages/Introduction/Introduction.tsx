import { Image } from '@chakra-ui/image';
import { Box, Container, Heading, HStack, VStack } from '@chakra-ui/layout';
import React from 'react';
const Introduction = () => {
  return (
    <Container maxWidth="container.md">
      <VStack>
        <HStack direction="row" justifyContent="space-between" w="80%">
          <Box borderWidth="5px" borderColor="black">
            <Image
              boxSize="200px"
              src="https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png"
              alt="Arjun Dubey"
            />
          </Box>
          <Heading as="h1" size="2xl" pl={5}>
            Arjun Dubey
          </Heading>
        </HStack>
        <Heading as="h3" size="xl" pt={5}>
          Full Stack Developer
        </Heading>
        <Heading as="h2" size="lg">
          I love building cool stuff with code.
        </Heading>
      </VStack>
    </Container>
  );
};

export default Introduction;
