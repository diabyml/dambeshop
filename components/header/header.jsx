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
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import {
  MdOutlineShoppingCart,
  MdSearch,
  MdAccountCircle,
} from "react-icons/md";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import { categories } from "../../seed/data";
import SearchModalBox from "./search-modal-box";

function Header({ variant, onToggleDrawer }) {
  const {
    isOpen: isSearchModalOpen,
    onOpen: onSearchModalOpen,
    onClose: onSearchModalClose,
  } = useDisclosure();

  return (
    <>
      <Box
        as={"header"}
        //   borderBottomWidth={variant === "light" ? "1px" : "0"}
        bgColor={variant === "light" ? "white" : "transparent"}
        boxShadow={variant === "light" && "md"}
        py={4}
      >
        <Container maxW={"container.lg"}>
          <Flex align="center">
            <HStack spacing={4}>
              {/* <IconButton
                aria-label="Menu"
                size="sm"
                icon={<HamburgerIcon />}
                display={["block", null, "none"]}
                onClick={onToggleDrawer}
              /> */}

              <Box
                display={["block", null, "none"]}
                cursor={"pointer"}
                onClick={onToggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                >
                  <rect width="30" height="1.5"></rect>
                  <rect y="7" width="20" height="1.5"></rect>
                  <rect y="14" width="30" height="1.5"></rect>
                </svg>
              </Box>

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
            </HStack>
            <Box display={["none", null, "block"]} ml={4}>
              <DesktopLinks />
            </Box>
            <HStack spacing={6} flex={"1"} justifyContent={"flex-end"}>
              <Box display={["block", null, "none"]}>
                <MdSearch size="24px" onClick={onSearchModalOpen} />
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
            </HStack>
          </Flex>
        </Container>
      </Box>
      <SearchModalBox isOpen={isSearchModalOpen} onClose={onSearchModalClose} />
    </>
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

Header.propTypes = {
  variant: PropTypes.oneOf(["transparent", "light"]),
};

export default Header;
