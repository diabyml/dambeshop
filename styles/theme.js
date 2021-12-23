import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FBB03B",
  },
  fonts: {
    poppins: "Poppins",
  },
  components: {
    Link: {
      colorScheme: {
        primary: {
          color: "#FBB03B",
          borderBottomColor: "#FBB03B",
        },
      },
    },
  },
});

export default theme;
