import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function SimpleProductCard({ product: { photo, name, price } }) {
  return (
    <Center>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          //   mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${photo})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            alt={"Product"}
            src={photo}
          />
        </Box>
        <Stack pt={10} align={"center"} fontFamily={"Poppins"}>
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
      </Box>
    </Center>
  );
}
