import {
  Box,
  Divider,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";
import NextLink from "next/link";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { categories } from "../../seed/data";

function MobileDrawer({ onClose }) {
  return (
    <Box
      pos={"fixed"}
      top={"0"}
      right={"0"}
      width="100%"
      height={"100%"}
      zIndex={9999}
    >
      {/* overlay */}
      <Box
        bgColor="rgba(0, 0, 0, 0.5)"
        pos={"absolute"}
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
        right="24px"
      />

      {/* Drawer content */}
      <Box
        pos={"absolute"}
        top={"0"}
        left={"0"}
        width="75%"
        maxWidth={"360px"}
        height={"100%"}
        bgColor={"white"}
      >
        <Box py={4} px={4}>
          <Text fontFamily="Poppins" fontSize="19px" fontWeight="600">
            <Box as={"span"} d={"inline"} color="primary">
              Dambe
            </Box>
            Shop
          </Text>
        </Box>
        <Divider />
        <Stack>
          {categories.map(({ id, name, path }) => (
            <Box key={id}>
              <NextLink href={path} passHref>
                <HStack justifyContent="space-between" py={2} px={4}>
                  <Link
                    fontWeight={"400"}
                    fontSize="16px"
                    fontFamily="Poppins"
                    color={"#1c1d1f"}
                    flex={"1"}
                  >
                    {name}
                  </Link>
                  <ChevronRightIcon color={"#1c1d1f"} fontSize="16px" />
                </HStack>
              </NextLink>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default MobileDrawer;
