import { AspectRatio, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PropTypes } from "prop-types";
// import Image from "next/image";

import { Image } from "@chakra-ui/react";

function ProductCard({ product: { photo, name, price } }) {
  return (
    <Stack direction="column">
      <Image src={photo} alt="Product" height={"286px"} />
      <Box fontFamily="Poppins" fontSize="14px">
        <Text color="secondary" fontWeight="700">
          {name}
        </Text>
        <Text color={"#696969"}>{`${price} fcfa`}</Text>
      </Box>
    </Stack>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
