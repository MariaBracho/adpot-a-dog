import RouterNavigation from "../src/Navigation/RouterNavigation";
import DogContextProvider from "./context/DogContextProvider";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <DogContextProvider>
        <RouterNavigation />
      </DogContextProvider>
    </Box>
  );
}

export default App;
