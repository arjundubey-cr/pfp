import React from 'react';
import { Image } from '@chakra-ui/image';
import { SimpleGrid } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Box, Container, Link } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaGithub } from 'react-icons/fa';
import { projectsInfo } from './projects_info';
const Projects = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Container maxW="container.xl" paddingTop={4}>
      <Heading p={3}>My Projects</Heading>
      <SimpleGrid
        spacing={isNotSmallerScreen ? '30px' : '10px'}
        minChildWidth="250px"
      >
        {projectsInfo.map(val => (
          <Box borderColor="blackAlpha.800" borderWidth="2px">
            <Image src={val.imageLink} alt="itsoka" />
            <Box borderWidth="2px" borderTopColor="blackAlpha.800">
              {val.name} <br />
            </Box>
            <Box
              d="flex"
              w="100%"
              justifyContent="space-around"
              alignItems="center"
              borderWidth="2px"
              borderTopColor="blackAlpha.800"
            >
              <div>{val.techStackUsed}</div>
              <Link href={val.githubLink}>
                <FaGithub />
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
