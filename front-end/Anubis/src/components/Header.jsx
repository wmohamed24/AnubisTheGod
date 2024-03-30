import { HStack, Box, Text, Image } from "@chakra-ui/react";
import anubis from "../assets/anubis.png";

function Header() {
  return (
    <>
      <HStack justify={"space-between"}>
        <HStack h="auto">
          <Image
            src={anubis}
            alt="Dish"
            width="10%"
            height="auto"
            objectFit="contain"
          />
          <Text color="white" fontSize={20} fontWeight="bold">
            Anubis is your GOD
          </Text>
        </HStack>

        <Box h="10" alignContent={"center"} bg="orange.200" p={4} rounded="md">
          <Text fontSize="lg">Round 3/3 Score: 9,000</Text>
        </Box>
      </HStack>
    </>
  );
}

export default Header;
