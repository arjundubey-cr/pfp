import { Text } from "@chakra-ui/react";
import { Container, Heading, VStack } from "@chakra-ui/layout";
import React from "react";
const Introduction = () => {
  return (
    <Container maxWidth="container.md">
      <VStack>
        <Heading fontSize="6xl" as="h1">
          Arjun Dubey
        </Heading>
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
