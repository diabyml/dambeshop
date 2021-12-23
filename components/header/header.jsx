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
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { v4 as uuid } from "uuid";

import {
  MdOutlineShoppingCart,
  MdSearch,
  MdAccountCircle,
} from "react-icons/md";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

function Header({ variant }) {
  return (
    <Box
      as={"header"}
      //   borderBottomWidth={variant === "light" ? "1px" : "0"}
      bgColor={variant === "light" ? "white" : "transparent"}
      boxShadow={variant === "light" && "md"}
      py={4}
    >
      <Container maxW={"container.lg"}>
        <Flex align="center">
          <Box>
            <NextLink href="/" passHref>
              <Heading
                fontSize={19}
                fontFamily={"poppins"}
                fontWeight="500"
                cursor="pointer"
              >
                <Box display="inline" color={"#FBB03B"}>
                  D
                </Box>
                -shop
              </Heading>
            </NextLink>
          </Box>
          <Box display={["none", null, "block"]} ml={4}>
            <DesktopLinks />
          </Box>
          <HStack spacing={6} flex={"1"} justifyContent={"flex-end"}>
            <Box display={["block", null, "none"]}>
              <MdSearch size="24px" />
            </Box>
            <Box display={["none", null, "block"]} flex={"1"}>
              <InputGroup maxW="400px">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Rechercher"
                  variant="outline"
                  size="md"
                  borderRadius={"full"}
                  borderColor="gray.600"
                />
              </InputGroup>
            </Box>
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
      {categories.map(({ id, name, path }) => (
        <NextLink href={path} passHref key={id}>
          <Link fontWeight={"medium"} fontSize="14px" fontFamily="Poppins">
            {name}
          </Link>
        </NextLink>
      ))}
    </Stack>
  );
};

const categories = [
  {
    id: uuid(),
    name: "Homme",
    path: "/homme",
  },
  {
    id: uuid(),
    name: "Femme",
    path: "/femme",
  },
  {
    id: uuid(),
    name: "Enfants",
    path: "/enfants",
  },
];

Header.propTypes = {
  variant: PropTypes.oneOf(["transparent", "light"]),
};

export default Header;
