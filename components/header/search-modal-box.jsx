import React from "react";
import {
  Box,
  Button,
  CloseButton,
  Divider,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchModalBox({ isOpen, onClose }) {
  const initialRef = React.useRef();
  return (
    <Modal
      onClose={onClose}
      size={"full"}
      isOpen={isOpen}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent>
        <HStack p={3} spacing={4}>
          <SearchIcon color={"gray.400"} />
          <Input
            ref={initialRef}
            placeholder="Rechercher..."
            variant="unstyled"
          />
          <CloseButton onClick={onClose} />
        </HStack>
        <Divider />
        <Box p={3}></Box>
      </ModalContent>
    </Modal>
  );
}

export default SearchModalBox;
