import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
const ProjectModal = (props: any) => {
  const { isOpen, onClose, content } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{content.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={content.imageLink} />
          {content.description}
        </ModalBody>
        <ModalFooter>
          <Button
            as="a"
            href="https://github.com/arjundubey-cr/tnpw"
            colorScheme="gray"
            mr={3}
          >
            View on Github
          </Button>
          <Button colorScheme="facebook">Open Website</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
