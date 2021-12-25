import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { PropTypes } from "prop-types";
import Image from "next/image";

function ProductCard({ photo, name, price }) {
  return (
    <Box minWidth={["112px", "271px"]} maxW="271">
      <Image
        src={photo}
        alt="Picture of the author"
        // height={385}
        placeholder="blur"
      />
      <Text>{name}</Text>
      <Text>{price}</Text>
    </Box>
  );
}

ProductCard.propTypes = {
  // photo
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
