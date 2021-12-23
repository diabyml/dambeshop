import { Box, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

function MobileDrawer({ onClose }) {
  return (
    <Box
      pos={"fixed"}
      top={"0"}
      right={"0"}
      width="100%"
      height={"100%"}
      zIndex={"9999"}
    >
      {/* overlay */}
      <Box
        bgColor="rgba(0, 0, 0, 0.5)"
        pos={"fixed"}
        top={"0"}
        right={"0"}
        width="100%"
        height={"100%"}
        zIndex={"hide"}
      />

      <IconButton
        aria-label="Close Drawer"
        size="md"
        borderRadius="full"
        bgColor="white"
        color="black"
        boxShadow="md"
        icon={<CloseIcon />}
        onClick={onClose}
        position="absolute"
        top="24px"
        left="24px"
      />

      {/* Drawer content */}
      <Box
        pos={"fixed"}
        top={"0"}
        right={"0"}
        width="75%"
        maxWidth={"360px"}
        height={"100%"}
        bgColor={"white"}
      ></Box>
    </Box>
  );
}

export default MobileDrawer;
