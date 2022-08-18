import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    gray: "#B1A7A6",
    text: "#121212",
    grayLight: "#EAE3E2",
    green: "#009B72",
    grayIcon: "#545454",
    blue: "#009DDC",
    drawerShare: "#212121",
  },
};

export const theme = extendTheme({
  colors,
  layerStyles: {
    title: {
      display: "flex",
      justifyContent: "flex-start",
      color: "brand.text",
      fontSize: "18px",
      fontWeight: "bold",
      width: "210px",
      margin: "10px",
    },
  },
});
