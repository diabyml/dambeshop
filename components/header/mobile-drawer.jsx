import { Box, Divider, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";
import NextLink from "next/link";

import categories from "../../seed/categories";

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
        onClick={onClose}
      ></Box>

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
      >
        <Box p={3}>
          <Text fontFamily="Poppins" fontSize="19px" fontWeight="600">
            <Box d={"inline"} color="primary">
              Dambe
            </Box>
            Shop
          </Text>
        </Box>
        <Divider />
        <Stack p={3}>
          {categories.map(({ id, name, path }) => (
            <NextLink href={path} passHref key={id}>
              <Link fontWeight={"400"} fontSize="14px" fontFamily="Poppins">
                {name}
              </Link>
            </NextLink>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default MobileDrawer;
