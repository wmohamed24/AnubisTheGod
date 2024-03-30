import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Image,
  Input,
  Flex,
  VStack,
  Grid,
  theme,
  Center,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Hint from "./components/Hint";
import Search from "./components/Search";
import god1 from "./assets/1.png";

function App() {
  return (
    <Box height="100%" backgroundColor="#3A506B">
      <Grid
        h="100vh"
        templateRows="auto 1fr"
        templateColumns="40% 1fr"
        templateAreas={`"header header"
                      "sidebar main"`}
      >
        <Box gridArea="header" p={4} bg="#00000060">
          <Header></Header>
        </Box>
        <Box
          alignContent="center"
          justifyContent="center"
          gridArea="sidebar"
          p={4}
        >
          <Center>
            <Image
              rounded={"lg"}
              width={"400px"}
              height="auto"
              objectFit="contain"
              src={god1}
            ></Image>
          </Center>
        </Box>
        <Box gridArea="main" p={4} paddingTop={10}>
          <Hint></Hint>
          <Hint></Hint>
          <Hint></Hint>
          <Search></Search>
        </Box>
      </Grid>
    </Box>
  );
}

export default App;

<Grid templateColumns="repeat(2, 1fr)" gap={6}>
  <VStack spacing={4} align="stretch">
    <Box h="10" bg="orange.100" p={4} rounded="md" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold">
        FoodGuessr
      </Text>
    </Box>
    <Box h="auto" bg="orange.100" p={4} rounded="md" boxShadow="md">
      <Image src="path-to-your-image.jpg" alt="Dish" />
    </Box>
  </VStack>
  <VStack spacing={4} align="stretch">
    <Box h="10" bg="orange.200" p={4} rounded="md" boxShadow="md">
      <Text fontSize="lg">Round 3/3 Score: 9,000</Text>
    </Box>
    <Box h="auto" bg="orange.200" p={4} rounded="md" boxShadow="md">
      <Text mb={2}>Ingredients</Text>
      {/* List your ingredients here */}
      <Text mb={2}>Description</Text>
      {/* Add description content here */}
      <Text mb={2}>Name</Text>
      {/* Add name content here */}
      <Input placeholder="Guess a country.." />
      <Button colorScheme="red" mt={2}>
        Guess the country this dish is from!
      </Button>
    </Box>
  </VStack>
</Grid>;
