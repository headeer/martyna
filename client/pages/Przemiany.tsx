import { Link } from "react-router-dom";
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Button,
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const theme = extendTheme({
  colors: {
    brand: {
      eerieBlack: "#1a1a1a",
      oxfordBlue: "#0f1b3c", 
      sgbusGreen: "#9be564",
      aliceBlue: "#e9f1f7",
      rosyBrown: "#b38d97"
    }
  }
});

export default function Przemiany() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="brand.eerieBlack" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="2xl">
          <VStack spacing={8} textAlign="center" color="brand.aliceBlue">
            <Heading size="2xl" color="brand.sgbusGreen">
              Przemiany Wojowników
            </Heading>
            <Text fontSize="xl" opacity={0.8}>
              Ta strona jest w trakcie przygotowania. Wróć wkrótce, aby zobaczyć pełną galerię przemian moich klientów.
            </Text>
            <Link to="/">
              <Button 
                bg="brand.sgbusGreen"
                color="brand.eerieBlack"
                _hover={{ opacity: 0.8 }}
                leftIcon={<ArrowBackIcon />}
                size="lg"
                borderRadius="full"
              >
                Powrót do strony głównej
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}
