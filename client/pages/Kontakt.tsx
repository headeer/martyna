import { Link } from "react-router-dom";
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Button,
  ChakraProvider,
  extendTheme,
  HStack
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

export default function Kontakt() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="brand.eerieBlack" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="2xl">
          <VStack spacing={8} textAlign="center" color="brand.aliceBlue">
            <Heading size="2xl" color="brand.sgbusGreen">
              Kontakt
            </Heading>
            <Text fontSize="xl" opacity={0.8}>
              Strona kontaktowa z formularzem i szczegółowymi informacjami będzie dostępna wkrótce.
            </Text>
            <VStack spacing={2} opacity={0.8}>
              <Text>📧 beniamin@wysokinski.fit</Text>
              <Text>📱 +48 123 456 789</Text>
              <Text>📍 Studio treningowe w centrum Warszawy</Text>
            </VStack>
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
