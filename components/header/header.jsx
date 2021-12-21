import React from "react";
import {
  Heading,
  Box,
  Container,
  Flex,
  Stack,
  Link,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import {
  MdOutlineShoppingCart,
  MdSearch,
  MdAccountCircle,
} from "react-icons/md";

import { HamburgerIcon } from "@chakra-ui/icons";

function Header({ variant }) {
  return (
    <Box
      as={"header"}
      //   borderBottomWidth={variant === "light" ? "1px" : "0"}
      bgColor={variant === "light" ? "white" : "transparent"}
      boxShadow={variant === "light" && "xs"}
      py={5}
    >
      <Container maxW={"container.lg"}>
        <Flex justify={"space-between"} align="center">
          <Box>
            <Heading fontSize={19} fontFamily={"poppins"} fontWeight="500">
              <Box display="inline" color={"#FBB03B"}>
                D
              </Box>
              -shop
            </Heading>
          </Box>
          <Box display={["none", null, "block"]}>
            <DesktopLinks />
          </Box>
          <HStack spacing={6}>
            <MdSearch size="24px" />
            <MdOutlineShoppingCart size="24px" />
            <Box display={["none", null, "block"]}>
              <MdAccountCircle size="24px" />
            </Box>
            <IconButton
              aria-label="Menu"
              size="sm"
              icon={<HamburgerIcon />}
              display={["block", null, "none"]}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

const DesktopLinks = () => {
  return (
    <Stack direction="row" spacing={7}>
      <NextLink href="/home" passHref>
        <Link fontWeight={"medium"} fontSize="14px" fontFamily="Poppins">
          Homme
        </Link>
      </NextLink>
      <NextLink href="/home" passHref>
        <Link fontWeight={"medium"} fontSize="14px" fontFamily="Poppins">
          Femme
        </Link>
      </NextLink>
      <NextLink href="/home" passHref>
        <Link fontWeight={"medium"} fontSize="14px" fontFamily="Poppins">
          Enfants
        </Link>
      </NextLink>
    </Stack>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["transparent", "light"]),
};

export default Header;
