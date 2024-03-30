import { Box, Text, Divider } from "@chakra-ui/react";

function Hint() {
  return (
    <Box alignContent={"center"} h="auto" p={4} rounded="md">
      <Text color="white" fontWeight={"bold"} mb={2}>
        Ingredients
      </Text>
      <Divider colorScheme="blackAlpha" />
      <Text color={"white"}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. "
      </Text>
    </Box>
  );
}

export default Hint;
