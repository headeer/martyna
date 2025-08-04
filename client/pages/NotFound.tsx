import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
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

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="brand.eerieBlack" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="2xl">
          <VStack spacing={8} textAlign="center" color="brand.aliceBlue">
            <Heading size="4xl" color="brand.sgbusGreen">
              404
            </Heading>
            <Text fontSize="xl" opacity={0.8}>
              Strona, której szukasz, nie została znaleziona.
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
                Wróć do strony głównej
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default NotFound;
