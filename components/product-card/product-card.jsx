import { useColorModeValue, Box, Stack, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { PropTypes } from "prop-types";
// import Image from "next/image";

import { Image } from "@chakra-ui/react";

function ProductCard({ product: { photo, name, price } }) {
  return (
    <Stack
      direction="column"
      cursor="pointer"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      rounded={"lg"}
    >
      <Box
        bgColor="#eee"
        bgImage={`url(${photo})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height={["240px", "290"]}
        maxHeight={["240px", "290px"]}
        // height="290px"
        // maxHeight="290px"
        overflow="hidden"
      />
      {/* <Box py={2} fontFamily="Poppins" fontSize="14px" textAlign="center">
        <Text color="secondary" fontWeight="700">
          {name}
        </Text>
        <Text color={"#696969"}>{`${price} fcfa`}</Text>
      </Box> */}
      <Stack pt={4} align={"center"} fontFamily={"Poppins"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          DambeShop
        </Text>
        <Heading fontSize={"md"} fontWeight={500}>
          {name}
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={800} fontSize={"lg"}>
            {`${price} fcfa`}
          </Text>
          <Text
            fontSize={"lg"}
            textDecoration={"line-through"}
            color={"gray.600"}
          >
            $199
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
