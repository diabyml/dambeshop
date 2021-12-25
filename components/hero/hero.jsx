import {
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "../../styles/hero.module.css";
function Hero() {
  return (
    <Box minH={"calc(230px + 9vmax)"} className={styles.hero}>
      <Container color={"white"} maxW="container.md" pt={["25%", null, 7]}>
        <Heading
          fontFamily={"Poppins"}
          fontWeight="bold"
          fontSize={["3xl", null, "5xl"]}
        >
          Collections <br />
          Traditionnelles
        </Heading>
        <HStack mt={[5, null, 6]} spacing={"22px"}>
          <IconButton
            bgColor={"primary"}
            // variant="unstyled"
            color={"white"}
            aria-label="Shop now"
            icon={<ArrowForwardIcon />}
            borderRadius="full"
            _hover={{ bgColor: "primary" }}
          />
          <Text fontFamily="Poppins" fontWeight="600" fontSize="13px">
            ACHETER
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}
export default Hero;
