import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Button,
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Badge,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  Circle,
  SimpleGrid,
  ScaleFade,
  SlideFade,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Slide,
  IconButton
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon, StarIcon, WarningIcon, CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { FaInstagram, FaWhatsapp, FaClock, FaBolt, FaFire, FaChartLine, FaDumbbell, FaUserAlt, FaArrowRight, FaTrophy, FaBrain, FaLightbulb, FaRocket, FaChevronLeft } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { GiMuscleUp, GiStrongMan, GiMuscularTorso, GiSwordman, GiBiceps, GiCrossedSwords } from "react-icons/gi";

// Custom theme with our color palette
const theme = extendTheme({
  colors: {
    brand: {
      eerieBlack: "#1a1a1a",
      oxfordBlue: "#0f1b3c", 
      sgbusGreen: "#9be564",
      aliceBlue: "#e9f1f7",
      rosyBrown: "#b38d97",
      ctaPrimary: "#ff8c00",
      ctaHover: "#e67300",
      ctaFocus: "#cc6600"
    }
  },
  styles: {
    global: {
      body: {
        bg: "brand.eerieBlack",
        color: "brand.aliceBlue"
      }
    }
  }
});

// Motion Box component
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const transformations = [
    {
      name: "Marcin",
      age: "34",
      profession: "Manager IT",

      duration: "16 tygodni",
      results: "-12,5kg + PODWYŻKA + ŻONA ZNÓW CIĘ CHCE + SZACUNEK ZESPOŁU",
      before: "Żona mówiła, że jestem 'wygodny'. Szef dawał projekty młodszym.",
      after: "Teraz to JA jestem tym facetem, na którego wszyscy patrzą z zazdrością.",
      training: "Marcin na treningi przyjeżdża po godzinie 21... Nasze treningi kończymy po godz 22 w nocy.. Ten wyjątkowo zawzięty wojownik po całym dniu pracy znajduje jeszcze siły i chęci na mocny trening",
      clickbait: "ZEMSTA NAJLEPIEJ PODANA NA ZIMNO - CASE MARCIN",
      testimonial: "Pierwszy raz czuję się prawdziwie silny i pewny siebie.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2Fa245eb3e9a4c413fa11f575dd661c8aa?format=webp&width=800",
      icon: <FaFire />
    },
    {
      name: "Piotr",
      age: "31",
      profession: "Konsultant finansowy",

      duration: "8 tygodni",
      results: "-4,5kg + MUSKULATURA + NOWA DZIEWCZYNA + 3 PROPOZYCJE PRACY",
      before: "Koleżanki z pracy traktowały mnie jak brata. Zero respect.",
      after: "Budzę się o 5 rano na trening z BEN'em. Teraz wszyscy pytają o mój 'sekret'.",
      training: "Piotrek wstawał ok. 5tej nad ranem żeby być u mnie na treningach o 06.00. Zawsze zmotywowany, uważny i słuchający wskazówek",
      clickbait: "OD NIEWIDZIALNEGO DO ALPHA MALE W 8 TYGODNI",
      testimonial: "Te najbardziej wymagające serie najbardziej rozwijaj�� umysł.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2F4e75f237fd5e4b419566323aafff0846?format=webp&width=800",
      icon: <FaBolt />
    },
    {
      name: "Tomek",
      age: "29",
      profession: "Właściciel agencji",

      duration: "20 tygodni",
      results: "-5kg + SIŁA x100 + NOWI DUZI KLIENCI + RESPEKT W BRANŻY",
      before: "Stres, nadwaga, zero energii. Klienci nie traktowali mnie poważnie.",
      after: "Ben nauczył mnie, że charakter = cash. Teraz wiedzą, z kim mają do czynienia.",
      training: "Sylwetka zdecydowanie na duży +. Progres siłowy. Poprawione partie priorytetowe (klatka+ ramiona). Samopoczucie i pewność siebie x100",
      clickbait: "JAK ZMIENIĆ BIZNES POPRZEZ ZMIANĘ CIAŁA",
      testimonial: "Ben nauczył mnie, że prawdziwa siła to nie tylko mięśnie, ale charakter.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2Fbb0b512de0ca4850aa669c61d42e3e53?format=webp&width=800",
      icon: <GiStrongMan />
    },
    {
      name: "Michał",
      age: "32",
      profession: "Senior Developer",

      duration: "15 tygodni",
      results: "+6kg CZYSTEJ MASY MIĘŚNIOWEJ + AWANS + NOWA PEWNOŚĆ SIEBIE",
      before: "Programista-widmo. Nikt mnie nie zauważał podczas meetingów.",
      after: "Nie zdołali mnie złamać dzięki Benowi. Dziś jestem nie do zatrzymania.",
      training: "Ćwiczyliśmy 3x w tygodniu przez ok. pół roku. Po wspólnej rozmowie stwierdziliśmy, iż Michał jest gotowy rozpocząć samodzielne treningi",
      clickbait: "Z NIEWIDZIALNEGO DEVELOPERA DO TEAM LEADERA",
      testimonial: "Nie zdołali mnie złamać dzięki Benowi. Dziś jestem nie do zatrzymania.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2F9b3e702c7bea43448fc633d72a620de9?format=webp&width=800",
      icon: <GiMuscleUp />
    },
    {
      name: "Olaf",
      age: "35",
      profession: "Account Manager",

      duration: "10+ tygodni",
      results: "+6,5kg MIĘŚNI + WIĘKSZE KONTO + RESPEKT KLIENTÓW",
      before: "Klienci negocjowali ze mną ceny jak z nastolatkiem.",
      after: "W życiu wszystko może być twoją kolejną serią. Wszystko może być okazją do dalszego treningu.",
      training: "Co prawda z Olafem współpracujemy dłużej, ale od ponad 2 miesięcy Olaf postanowił mocno ruszyć z tematem. Regularne treningi, odpowiednia regeneracja i oczywiście dobrze zbilansowana dieta",
      clickbait: "PRZEKSZTAŁCENIE SALES W ALPHA SPRZEDAWCĘ",
      testimonial: "W życiu wszystko może być twoją kolejną serią. Wszystko może być okazją do dalszego treningu.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2F082c1df269be46ceb79c020423d357f7?format=webp&width=800",
      icon: <FaChartLine />
    },
    {
      name: "Grzegorz",
      age: "28",
      profession: "Marketing Specialist",

      duration: "5 tygodni",
      results: "-4,5kg + PROMOCJA + NOWA ENERGIA + SIŁY SPECJALNE",
      before: "Młody w firmie, traktowany jak praktykant pomimo doświadczenia.",
      after: "Dopóki walczysz, jesteś zwycięzcą.",
      training: "Efekty 5 tygodniowej współpracy z Grzegorzem",
      clickbait: "EKSPRESOWA PRZEMIANA - 5 TYGODNI DO ALPHA",
      testimonial: "Dopóki walczysz, jesteś zwycięzcą.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2Fbaa30420b1124413bed0020fdcbb2b52?format=webp&width=800",
      icon: <FaDumbbell />
    }
  ];

  const alphaQuotes = [
    "Nie zdołali mnie złamać. Nic i nikt nie zdoła.",
    "Forma zaczyna się w głowie. Trening to sposób myślenia.",
    "Słabi szukają złotych rozwiązań. Silni szukają prawdy o sobie.",
    "Najpierw zmieniasz głowę, potem ciało. Reszta to marketing.",
    "Prawdziwa przemiana to praca nad sobą.",
    "Sukces nie polega na byciu widocznym; chodzi o cichą harówkę, która prowadzi do wielkości.",
    "Motywacja pozwala Ci zacząć. Nawyk pozwala Ci wytrwać.",
    "Zwycięzcy muszą być samolubni, bo najpierw muszą zadbać o siebie, żeby potem móc zadbać o innych."
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="brand.eerieBlack">
        {/* Top Social Proof Bar */}
        <Box
          bg="brand.sgbusGreen"
          color="brand.eerieBlack"
          py={2}
          fontSize="xs"
          fontWeight="bold"
          textAlign="center"
        >
          <Container maxW="container.xl">
            <HStack justify="center" spacing={8} flexWrap="wrap">
              <HStack>
                <FaClock />
                <Text>ODPOWIEM NA IG W 3 MINUTY</Text>
              </HStack>
              <HStack>
                <GiMuscularTorso />
                <Text>112+ PRZEMIAN</Text>
              </HStack>
              <HStack>
                <FaBolt />
                <Text>9 LAT DOŚWIADCZENIA</Text>
              </HStack>
              <HStack>
                <GiStrongMan />
                <Text>12 TYGODNI DO CELU</Text>
              </HStack>
            </HStack>
          </Container>
        </Box>

        {/* Navigation - Glassmorphism Style */}
        <Box
          position="sticky"
          top={0}
          left={0}
          right={0}
          bg="rgba(26, 26, 26, 0.9)"
          backdropFilter="blur(20px)"
          zIndex={1000}
          boxShadow="0 8px 30px rgba(0, 0, 0, 0.12)"
        >
          <Container maxW="container.xl">
            <Flex h={16} alignItems="center" justifyContent="space-between">
              <Box>
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2F1a02de44025f4302ab856bd30ba9bf66?format=webp&width=800"
                  alt="BW Logo"
                  h="40px"
                  w="auto"
                />
              </Box>
              <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                <Button
                  variant="ghost"
                  color="brand.aliceBlue"
                  _hover={{ color: "brand.sgbusGreen", bg: "rgba(155, 229, 100, 0.1)" }}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  START
                </Button>
                <Link to="/przemiany">
                  <Button
                    variant="ghost"
                    color="brand.aliceBlue"
                    _hover={{ color: "brand.sgbusGreen", bg: "rgba(155, 229, 100, 0.1)" }}
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    PRZEMIANY
                  </Button>
                </Link>
                <Link to="/program-90-dni">
                  <Button
                    variant="ghost"
                    color="brand.aliceBlue"
                    _hover={{ color: "brand.sgbusGreen", bg: "rgba(155, 229, 100, 0.1)" }}
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    MISJA 90
                  </Button>
                </Link>
                <Link to="/arsenal-zywieniowy">
                  <Button
                    variant="ghost"
                    color="brand.aliceBlue"
                    _hover={{ color: "brand.sgbusGreen", bg: "rgba(155, 229, 100, 0.1)" }}
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    DIETA
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  color="brand.aliceBlue"
                  _hover={{ color: "brand.sgbusGreen", bg: "rgba(155, 229, 100, 0.1)" }}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  WIEDZA
                </Button>
                <Link to="/kontakt">
                  <Button
                    bg="brand.ctaPrimary"
                    color="white"
                    _hover={{ bg: "brand.ctaHover", transform: "translateY(-2px)" }}
                    fontSize="lg"
                    fontWeight="black"
                    px={6}
                    boxShadow="0 4px 15px rgba(255, 140, 0, 0.3)"
                    transition="all 0.3s"
                    borderRadius="full"
                  >
                    KONTAKT
                  </Button>
                </Link>
              </HStack>
            </Flex>
          </Container>
        </Box>

        {/* Hero Section with Alpha Mindset */}
        <Box
          minH="85vh"
          position="relative"
          display="flex"
          alignItems="center"
          pt={20}
          pb={12}
        >
          {/* Background Image - Hyperrealistic Warrior */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgImage="url('https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2F8cbebb7738de45e0b1029f44ff11b453?format=webp&width=800')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            opacity={0.4}
          />
          {/* Dark Overlay for Better Text Readability */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-r, rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.6))"
          />
          
          <Container maxW="container.xl" position="relative" zIndex={2}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
              <GridItem>
                <ScaleFade initialScale={0.9} in={isVisible}>
                  <VStack align="start" spacing={8}>
                    <Badge
                      fontSize="lg"
                      px={6}
                      py={3}
                      bg="rgba(255, 0, 0, 0.2)"
                      color="#ff4444"
                      backdropFilter="blur(10px)"
                      borderRadius="full"
                      fontWeight="black"
                      textTransform="uppercase"
                      border="1px solid rgba(255, 0, 0, 0.3)"
                    >
                      BRUTAL REALITY CHECK
                    </Badge>

                    <Heading
                      size="4xl"
                      color="brand.aliceBlue"
                      lineHeight="1.1"
                      fontWeight="black"
                    >
                      ZNOWU CIEBIE{" "}
                      <Text as="span" color="brand.ctaPrimary">
                        PRZEGAPILI
                      </Text>{" "}
                      NA AWANSIE?
                    </Heading>

                    <VStack align="start" spacing={4}>
                      <Text fontSize="xl" color="brand.aliceBlue" opacity={0.9}>
                        Podczas gdy TY siedzisz w domu z piwem i wymówkami...
                      </Text>
                      <Text fontSize="xl" color="brand.aliceBlue" fontWeight="bold">
                        ...TAMTEN GOŚĆ z Twojej firmy właśnie dostał{" "}
                        <Text as="span" color="brand.sgbusGreen">podwyżkę</Text>,
                        <Text as="span" color="brand.sgbusGreen"> szacunek szefa</Text> i
                        <Text as="span" color="brand.sgbusGreen"> zainteresowanie kobiet</Text>, które kiedyś były Twoje.
                      </Text>
                      <Text fontSize="2xl" color="brand.ctaPrimary" fontWeight="black">
                        DLACZEGO?
                      </Text>
                      <Text fontSize="xl" color="brand.aliceBlue" fontWeight="bold">
                        Bo przestał być{" "}
                        <Text as="span" color="#ff4444" textDecoration="line-through">
                          NIEWIDZIALNY
                        </Text>.
                      </Text>
                    </VStack>

                    <Box
                      p={6}
                      bg="linear-gradient(135deg, rgba(15, 27, 60, 0.8) 0%, rgba(255, 140, 0, 0.1) 100%)"
                      backdropFilter="blur(20px)"
                      borderRadius="xl"
                      border="2px solid rgba(255, 140, 0, 0.3)"
                      boxShadow="0 15px 40px rgba(255, 140, 0, 0.2)"
                    >
                      <Text fontSize="xl" fontWeight="bold" color="brand.aliceBlue" textAlign="center">
                        Za 90 DNI będziesz tym facetem,{" "}
                        <Text as="span" color="brand.sgbusGreen">
                          którego wszyscy podziwiają w milczeniu
                        </Text>
                      </Text>
                      <Text fontSize="lg" color="brand.ctaPrimary" textAlign="center" mt={2} fontStyle="italic">
                        (a Twoi "koledzy" będą żałować, że Cię lekceważyli)
                      </Text>
                    </Box>
                    
                    <VStack spacing={6}>
                      <HStack spacing={4} flexWrap="wrap" justify="center">
                        <Button
                          size="lg"
                          bg="brand.ctaPrimary"
                          color="white"
                          _hover={{ bg: "brand.ctaHover", transform: "translateY(-2px)" }}
                          rightIcon={<ChevronRightIcon />}
                          px={8}
                          py={6}
                          borderRadius="full"
                          fontWeight="black"
                          textTransform="uppercase"
                          transition="all 0.3s"
                          boxShadow="0 10px 30px rgba(255, 140, 0, 0.3)"
                        >
                          SPRAWDŹ, CZY JESTEŚ GOTOWY
                        </Button>

                        <Button
                          size="lg"
                          variant="outline"
                          borderColor="rgba(233, 241, 247, 0.3)"
                          color="brand.aliceBlue"
                          bg="rgba(233, 241, 247, 0.1)"
                          backdropFilter="blur(10px)"
                          _hover={{ bg: "rgba(233, 241, 247, 0.2)", borderColor: "brand.aliceBlue" }}
                          px={8}
                          py={6}
                          borderRadius="full"
                          fontWeight="bold"
                        >
                          ZOBACZ PRZEMIANY
                        </Button>
                      </HStack>

                      {/* Read More Teaser */}
                      <VStack spacing={2} mt={8}>
                        <Text color="brand.aliceBlue" fontSize="sm" opacity={0.7} textAlign="center">
                          ↓ Sprawdź brutalne historie transformacji ↓
                        </Text>
                        <Text color="brand.sgbusGreen" fontSize="xs" fontWeight="bold" textAlign="center" animation="pulse 2s infinite">
                          CZYTAJ DALEJ
                        </Text>
                      </VStack>
                    </VStack>
                  </VStack>
                </ScaleFade>
              </GridItem>
              
              <GridItem>
                <SlideFade in={isVisible} offsetY="50px">
                  <Box position="relative">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2Fbf105d18569f4a8ca33df0dd1042b258?format=webp&width=800"
                      alt="Beniamin Wysokiński - Trener Personalny"
                      borderRadius="2xl"
                      boxShadow="0 20px 60px rgba(0, 0, 0, 0.5)"
                      filter="grayscale(20%) contrast(1.1)"
                    />
                    <Box
                      position="absolute"
                      bottom={4}
                      left={4}
                      right={4}
                      bg="rgba(26, 26, 26, 0.8)"
                      backdropFilter="blur(20px)"
                      p={4}
                      borderRadius="xl"
                      border="1px solid rgba(155, 229, 100, 0.3)"
                    >
                      <Text color="brand.sgbusGreen" fontWeight="bold" fontSize="lg">
                        BENIAMIN WYSOKIŃSKI
                      </Text>
                      <Text color="brand.aliceBlue" fontSize="sm">
                        Mentor Transformacji Wojownik��w | Warszawa
                      </Text>
                    </Box>
                  </Box>
                </SlideFade>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        {/* Pain Section - Cinematic Nightmare Reveal */}
        <Box
          py={32}
          bg="linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)"
          color="brand.aliceBlue"
          position="relative"
          overflow="hidden"
        >
          {/* Dark atmospheric background */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.05) 0%, transparent 70%)"
          />

          <Container maxW="container.xl" position="relative" zIndex={2}>
            <VStack spacing={20}>
              {/* Dramatic Header */}
              <VStack spacing={8} textAlign="center" maxW="5xl" mx="auto">
                <Box
                  bg="linear-gradient(135deg, rgba(255, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0.2) 100%)"
                  px={12}
                  py={6}
                  borderRadius="full"
                  border="3px solid #ff4444"
                  boxShadow="0 0 50px rgba(255, 68, 68, 0.4), inset 0 0 30px rgba(255, 0, 0, 0.1)"
                  backdropFilter="blur(20px)"
                >
                  <Text
                    fontSize="3xl"
                    fontWeight="black"
                    color="#ff4444"
                    textTransform="uppercase"
                    letterSpacing="3px"
                    textShadow="0 0 20px rgba(255, 68, 68, 0.7)"
                  >
                    💀 ROZPOZNAJESZ SIĘ W TYM KOSZMARZE? 💀
                  </Text>
                </Box>

                <Text fontSize="xl" color="brand.aliceBlue" opacity={0.8} fontStyle="italic">
                  Każdy z tych scenariuszy to dzień z życia niewidzialnego mężczyzny...
                </Text>
              </VStack>

              {/* Pain Points - Clean List */}
              <VStack spacing={6} w="full" maxW="4xl" mx="auto">
                {[
                  {
                    title: "Wchodzisz do biura i NIKT Cię nie zauważa",
                    subtitle: "jesteś jak mebel w tle",
                    icon: "👻"
                  },
                  {
                    title: "Ona patrzy na Ciebie jak na 'good friend'",
                    subtitle: "nigdy jak na MĘŻCZYZNĘ",
                    icon: "💔"
                  },
                  {
                    title: "Kolesie z działu IT zarabiają więcej od Ciebie",
                    subtitle: "pomimo że masz większe doświadczenie",
                    icon: "💰"
                  },
                  {
                    title: "W lustrze widzisz swojego ojca w Twoim wieku",
                    subtitle: "i to Cię przeraża",
                    icon: "🪞"
                  },
                  {
                    title: "Instagram Twojego kolegi z liceum",
                    subtitle: "ma lepsze życie niż Ty",
                    icon: "📱"
                  },
                  {
                    title: "Kupiłeś już 5 karnetów na siłownię",
                    subtitle: "każdy wykorzystany w 20%",
                    icon: "🏋️"
                  },
                  {
                    title: "Twoje zdjęcia profilowe są sprzed 3 lat",
                    subtitle: "bo teraz wyglądasz gorzej",
                    icon: "📸"
                  },
                  {
                    title: "Kolejny weekend sam w domu",
                    subtitle: "podczas gdy inni żyją pełnią życia",
                    icon: "🏠"
                  }
                ].map((pain, index) => (
                  <Box
                    key={index}
                    bg="rgba(26, 26, 26, 0.8)"
                    p={6}
                    borderRadius="xl"
                    border="1px solid rgba(255, 68, 68, 0.3)"
                    w="full"
                  >
                    <HStack spacing={4} align="center">
                      <Text fontSize="2xl">{pain.icon}</Text>
                      <VStack align="start" spacing={1} flex={1}>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color="brand.aliceBlue"
                          lineHeight="1.3"
                        >
                          "{pain.title}"
                        </Text>
                        <Text
                          fontSize="sm"
                          color="#ff4444"
                          fontStyle="italic"
                        >
                          {pain.subtitle}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>

              {/* Final Quote */}
              <Box
                bg="rgba(26, 26, 26, 0.9)"
                p={8}
                borderRadius="2xl"
                border="2px solid #ff4444"
                maxW="4xl"
                mx="auto"
                textAlign="center"
              >
                <VStack spacing={6}>
                  <Text fontSize="4xl">💔</Text>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.aliceBlue" lineHeight="1.4">
                    "Najgorsze? Wiesz, że zasługujesz na więcej.{" "}
                    <Text as="span" color="#ff4444">
                      Ale każdy poniedziałek jest taki sam.
                    </Text>{" "}
                    Każda próba kończy się porażką.{" "}
                    <Text as="span" color="#ff4444" fontWeight="black">
                      Każda porażka pogłębia WSTYD.
                    </Text>"
                  </Text>

                  <Box mt={6} p={4} bg="rgba(155, 229, 100, 0.1)" borderRadius="xl">
                    <Text fontSize="lg" color="brand.sgbusGreen" fontWeight="bold">
                      Ale co jeśli powiem Ci, że to wszystko może się zmienić w 90 dni?
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Brutal Truth Section */}
        <Box py={24} bg="brand.eerieBlack" color="brand.aliceBlue">
          <Container maxW="container.xl">
            <VStack spacing={12}>
              <VStack spacing={6} textAlign="center">
                <Heading size="3xl" color="brand.ctaPrimary" fontWeight="black" textTransform="uppercase">
                  BRUTALNA PRAWDA, KTÓREJ NIKT CI NIE POWIE:
                </Heading>
              </VStack>

              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} w="full">
                <GridItem>
                  <VStack spacing={6} align="start">
                    <Text fontSize="2xl" fontWeight="bold" color="#ff4444" mb={4}>
                      ❌ CO CIĘ NISZCZY:
                    </Text>
                    {[
                      "89% trenerów to sprzedawcy wymówek dla słabych",
                      "Żaden plan nie zadziała, je��li Twoja GŁOWA nie jest gotowa",
                      "Twoi \"przyjaciele\" NIE CHCĄ, żebyś się zmienił",
                      "Każdy dzień zwlekania to dzień, w którym TAMTEN GOŚĆ Cię wyprzedza"
                    ].map((item, index) => (
                      <HStack key={index} align="start">
                        <Text fontSize="xl" color="#ff4444">❌</Text>
                        <Text fontSize="lg" color="brand.aliceBlue">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </GridItem>

                <GridItem>
                  <VStack spacing={6} align="start">
                    <Text fontSize="2xl" fontWeight="bold" color="brand.sgbusGreen" mb={4}>
                      ✅ CO CIĘ WYZWOLI:
                    </Text>
                    {[
                      "Prawdziwa przemiana to PSYCHOLOGICZNA WOJNA ze słabością",
                      "Potrzebujesz MENTORA, nie kolejnego \"trenera fitness\"",
                      "Sukces to najsłodsza ZEMSTA na wszystkich, którzy Cię lekceważyli",
                      "Alpha nie prosi o szacunek - WYMUSZA go swoją obecnością"
                    ].map((item, index) => (
                      <HStack key={index} align="start">
                        <Text fontSize="xl" color="brand.sgbusGreen">✅</Text>
                        <Text fontSize="lg" color="brand.aliceBlue">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </GridItem>
              </Grid>
            </VStack>
          </Container>
        </Box>

        {/* Authority Section with Alpha Quote */}
        <Box py={20} bg="brand.eerieBlack">
          <Container maxW="container.xl">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
              <GridItem>
                <VStack align="start" spacing={6}>
                  <Badge 
                    fontSize="lg" 
                    px={4} 
                    py={2} 
                    bg="rgba(155, 229, 100, 0.2)" 
                    color="brand.sgbusGreen" 
                    fontWeight="black"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(155, 229, 100, 0.3)"
                    borderRadius="full"
                  >
                    MENTOR TRANSFORMACJI
                  </Badge>

                  <Heading size="xl" color="brand.aliceBlue">
                    BENIAMIN WYSOKIŃSKI
                  </Heading>

                  <Text fontSize="lg" color="brand.sgbusGreen" fontWeight="bold">
                    Trener Osobisty i Żywieniowy | Warszawa
                  </Text>

                  <VStack align="start" spacing={4}>
                    {[
                      "9 lat doświadczenia w transformowaniu mężczyzn",
                      'Program "Atletyczna Forma w 90 dni"',
                      "Proste i skuteczne plany treningowe oraz żywieniowe",
                      "Treningi w profesjonalnym studio w centrum Warszawy"
                    ].map((item, index) => (
                      <HStack key={index} align="start">
                        <CheckCircleIcon color="brand.sgbusGreen" mt={1} />
                        <Text color="brand.aliceBlue">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Box
                    p={6}
                    bg="rgba(15, 27, 60, 0.6)"
                    backdropFilter="blur(20px)"
                    borderRadius="xl"
                    border="1px solid rgba(155, 229, 100, 0.2)"
                    w="full"
                  >
                    <Text fontSize="xl" color="brand.aliceBlue" fontStyle="italic">
                      "Forma zaczyna się w głowie. Trening to nie tylko mięśnie i pot. To decyzja, styl życia i sposób myślenia o sobie."
                    </Text>
                  </Box>

                  <Badge
                    bg="rgba(155, 229, 100, 0.2)"
                    color="brand.sgbusGreen"
                    fontSize="lg"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontWeight="black"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(155, 229, 100, 0.3)"
                  >
                    Nie zdołali mnie złamać. Nic i nikt nie zdoła.
                  </Badge>
                </VStack>
              </GridItem>

              <GridItem>
                <Box position="relative">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F1da19f26bd614858b393d192aecff340%2Ff467baa5e8c54ec684719cce6aa0b2b7?format=webp&width=800"
                    alt="Beniamin Wysokiński - Physique"
                    borderRadius="2xl"
                    boxShadow="0 20px 60px rgba(155, 229, 100, 0.2)"
                  />
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                    bg="rgba(26, 26, 26, 0.8)"
                    backdropFilter="blur(20px)"
                    px={4}
                    py={2}
                    borderRadius="full"
                    border="1px solid rgba(155, 229, 100, 0.3)"
                  >
                    <Text color="brand.sgbusGreen" fontWeight="bold" fontSize="sm">
                      REZULTAT WŁASNEJ PRACY
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        {/* Transformations Section - "ZEMSTA NAJLEPIEJ PODANA NA ZIMNO" */}
        <Box py={24} bg="brand.oxfordBlue">
          <Container maxW="container.xl">
            <VStack spacing={16}>
              <VStack spacing={6} textAlign="center">
                <Badge
                  fontSize="2xl"
                  px={10}
                  py={4}
                  bg="linear-gradient(135deg, rgba(255, 140, 0, 0.3) 0%, rgba(155, 229, 100, 0.2) 100%)"
                  color="brand.ctaPrimary"
                  fontWeight="black"
                  backdropFilter="blur(20px)"
                  border="2px solid rgba(255, 140, 0, 0.5)"
                  borderRadius="full"
                  boxShadow="0 15px 40px rgba(255, 140, 0, 0.3)"
                >
                  👑 ŚWIADKOWIE TRANSFORMACJI
                </Badge>
                <Heading size="3xl" color="brand.aliceBlue" fontWeight="black" textTransform="uppercase">
                  ZEMSTA NAJLEPIEJ PODANA NA ZIMNO
                </Heading>
                <Text fontSize="2xl" color="brand.ctaPrimary" fontWeight="bold">
                  Oni już nie są niewidzialni. Teraz to ONI są tym gościem.
                </Text>
                <Text fontSize="lg" color="brand.aliceBlue" opacity={0.8}>
                  Prawdziwe historie, prawdziwe zarobki, prawdziwa zemsta na przeciętności
                </Text>
              </VStack>

              <Box w="full" overflow="hidden">
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={8}
                  minChildWidth="350px"
                >
                  {transformations.map((transformation, index) => (
                    <Card
                      key={index}
                      bg="rgba(233, 241, 247, 0.05)"
                      backdropFilter="blur(20px)"
                      borderRadius="3xl"
                      overflow="hidden"
                      border="1px solid rgba(233, 241, 247, 0.1)"
                      transition="all 0.4s"
                      _hover={{
                        transform: "translateY(-15px)",
                        boxShadow: "0 25px 60px rgba(155, 229, 100, 0.15)",
                        border: "1px solid rgba(155, 229, 100, 0.3)"
                      }}
                      maxW="400px"
                      mx="auto"
                    >
                      <Box position="relative">
                        <Image
                          src={transformation.image}
                          alt={`Przemiana ${transformation.name}`}
                          h={72}
                          w="full"
                          objectFit="cover"
                        />

                        <Badge
                          position="absolute"
                          top={4}
                          right={4}
                          bg="rgba(155, 229, 100, 0.2)"
                          color="brand.sgbusGreen"
                          backdropFilter="blur(10px)"
                          px={4}
                          py={2}
                          borderRadius="full"
                          fontWeight="black"
                          fontSize="sm"
                          border="1px solid rgba(155, 229, 100, 0.3)"
                        >
                          {transformation.duration}
                        </Badge>

                        <Box
                          position="absolute"
                          top={4}
                          left={4}
                          bg="rgba(26, 26, 26, 0.8)"
                          backdropFilter="blur(10px)"
                          borderRadius="full"
                          p={3}
                          color="brand.sgbusGreen"
                          fontSize="xl"
                        >
                          {transformation.icon}
                        </Box>

                        <Box
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          bgGradient="linear(to-t, rgba(26,26,26,0.95), transparent)"
                          p={6}
                        >
                          <Text color="brand.ctaPrimary" fontSize="xs" fontWeight="bold" mb={1}>
                            {transformation.clickbait}
                          </Text>
                          <Text color="brand.aliceBlue" fontSize="lg" fontWeight="bold">
                            WOJOWNIK {transformation.name.toUpperCase()}
                          </Text>
                          <Text color="brand.sgbusGreen" fontSize="sm" fontWeight="bold">
                            {transformation.age} lat | {transformation.profession}
                          </Text>
                        </Box>
                      </Box>

                      <CardBody p={6}>
                        <VStack align="start" spacing={5}>
                          <Text color="brand.ctaPrimary" fontWeight="black" fontSize="lg" textAlign="center" w="full">
                            {transformation.results}
                          </Text>

                          {/* Before/After Section */}
                          <VStack spacing={3} w="full">
                            <Box
                              bg="rgba(255, 0, 0, 0.1)"
                              backdropFilter="blur(10px)"
                              p={4}
                              borderRadius="xl"
                              w="full"
                              border="1px solid rgba(255, 0, 0, 0.3)"
                            >
                              <Text color="#ff4444" fontSize="xs" fontWeight="bold" mb={2}>
                                PRZED:
                              </Text>
                              <Text color="brand.aliceBlue" fontSize="sm" fontStyle="italic">
                                "{transformation.before}"
                              </Text>
                            </Box>

                            <Box
                              bg="rgba(155, 229, 100, 0.1)"
                              backdropFilter="blur(10px)"
                              p={4}
                              borderRadius="xl"
                              w="full"
                              border="1px solid rgba(155, 229, 100, 0.3)"
                            >
                              <Text color="brand.sgbusGreen" fontSize="xs" fontWeight="bold" mb={2}>
                                PO {transformation.duration.toUpperCase()}:
                              </Text>
                              <Text color="brand.aliceBlue" fontSize="sm" fontWeight="bold">
                                "{transformation.after}"
                              </Text>
                            </Box>
                          </VStack>
                        </VStack>
                      </CardBody>

                      <CardFooter p={6} pt={0}>
                        <Button
                          w="full"
                          bg="brand.ctaPrimary"
                          color="white"
                          _hover={{
                            bg: "brand.ctaHover",
                            transform: "scale(1.02)"
                          }}
                          borderRadius="2xl"
                          fontWeight="black"
                          size="lg"
                          py={6}
                          boxShadow="0 4px 15px rgba(255, 140, 0, 0.3)"
                        >
                          CHCĘ TAKĄ ZEMSTĘ
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>

              <Center>
                <Button
                  size="lg"
                  bg="brand.ctaPrimary"
                  color="white"
                  _hover={{ bg: "brand.ctaHover", transform: "translateY(-2px)", boxShadow: "0 10px 30px rgba(255, 140, 0, 0.3)" }}
                  px={8}
                  py={6}
                  borderRadius="full"
                  fontWeight="black"
                  textTransform="uppercase"
                  fontSize="lg"
                  boxShadow="0 4px 15px rgba(255, 140, 0, 0.3)"
                >
                  CHCĘ ZOSTAĆ NASTĘPNY
                </Button>
              </Center>
            </VStack>
          </Container>
        </Box>

        {/* Real Instagram Testimonials Section - Glassmorphism */}
        <Box py={20} bg="brand.eerieBlack">
          <Container maxW="container.xl">
            <VStack spacing={12}>
              <VStack spacing={4} textAlign="center">
                <HStack justify="center">
                  <FaInstagram color="#9be564" size="40px" />

                </HStack>
                <Heading size="2xl" color="brand.aliceBlue">
                  PRAWDZIWE ROZMOWY Z INSTAGRAM
                </Heading>
                <Text fontSize="lg" color="brand.aliceBlue" opacity={0.8}>
                  Bez wyreżyserowanych opinii - tylko autentyczne wiadomości od moich wojowników
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {/* Instagram Conversations with Glassmorphism */}
                {[
                  {
                    user: "@warszawamatt",
                    message: "Ben! Akanie! Co za trening! Padam na twarz i całe napięcie z głowy zeszło. Jesteś najlepszy!",
                    reply: "Dzięki łobuzie 😎💪 piona 👊",
                    time: "Dzisiaj, 20:23 - #AKANTEAM"
                  },
                  {
                    user: "@tomerhapolani", 
                    message: "A tak by the way, to sobotni trening był rewelacyjny. Zakwasy w nogach i na ❤️ jeszcze trzymają.",
                    reply: "To ja Dziękuje za te słowa",
                    time: "Zadowolony klient to dla mnie największa pochwała"
                  },
                  {
                    user: "@klient",
                    message: "Bendzamin, powiem Ci, że patrzę w lustro i nacieszyć się nie mogę. Naprawdę jest lepiej!",
                    reply: "Mój zawodnik 💪💪💪",
                    time: "#INSTRUKTORSIŁOWNI - Więcej komentarza uważam za zbędne 💯"
                  }
                ].map((conversation, index) => (
                  <Box
                    key={index}
                    bg="rgba(233, 241, 247, 0.05)"
                    backdropFilter="blur(20px)"
                    borderRadius="3xl"
                    p={6}
                    border="1px solid rgba(233, 241, 247, 0.1)"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 40px rgba(155, 229, 100, 0.1)"
                    }}
                  >
                    <VStack spacing={4} align="start">
                      <HStack>
                        <Box bg="rgba(155, 229, 100, 0.2)" backdropFilter="blur(10px)" borderRadius="full" p={2}>
                          <FaInstagram color="#9be564" />
                        </Box>
                        <Text color="brand.sgbusGreen" fontWeight="bold">{conversation.user}</Text>
                      </HStack>

                      <Box bg="rgba(155, 229, 100, 0.1)" backdropFilter="blur(10px)" p={4} borderRadius="xl" w="full">
                        <Text color="brand.aliceBlue" fontSize="sm">
                          "{conversation.message}"
                        </Text>
                      </Box>

                      <Box bg="rgba(15, 27, 60, 0.6)" backdropFilter="blur(10px)" p={4} borderRadius="xl" w="full">
                        <Text color="brand.aliceBlue" fontSize="sm">
                          "{conversation.reply}"
                        </Text>
                      </Box>

                      <Text color="brand.sgbusGreen" fontSize="xs" opacity={0.8}>
                        ✓ {conversation.time}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>

              <Center>
                <Box textAlign="center">
                  <Text color="brand.aliceBlue" fontSize="lg" mb={4}>
                    Gotowy zaciągnąć się do elity?
                  </Text>
                  <Button
                    bg="brand.ctaPrimary"
                    color="white"
                    size="lg"
                    leftIcon={<FaInstagram />}
                    borderRadius="full"
                    px={8}
                    py={6}
                    fontWeight="black"
                    _hover={{ bg: "brand.ctaHover", transform: "scale(1.05)" }}
                    boxShadow="0 4px 15px rgba(255, 140, 0, 0.3)"
                    onClick={() => setIsPanelOpen(true)}
                  >
                    NAWIĄŻ KONTAKT
                  </Button>
                </Box>
              </Center>
            </VStack>
          </Container>
        </Box>

        {/* Premium 12 Week Program Section - Enhanced UX/UI Design */}
        <Box py={40} bg="brand.eerieBlack" color="brand.aliceBlue" position="relative" overflow="hidden">
          {/* Dynamic Background Elements */}
          <Box
            position="absolute"
            top="20%"
            left="10%"
            w="300px"
            h="300px"
            bgGradient="radial(circle, rgba(155, 229, 100, 0.15) 0%, transparent 70%)"
            borderRadius="full"
            filter="blur(80px)"
          />
          <Box
            position="absolute"
            bottom="10%"
            right="15%"
            w="400px"
            h="400px"
            bgGradient="radial(circle, rgba(255, 140, 0, 0.1) 0%, transparent 70%)"
            borderRadius="full"
            filter="blur(100px)"
          />

          <Container maxW="container.xl" position="relative" zIndex={2}>
            <VStack spacing={24}>
              {/* Header Section */}
              <VStack spacing={10} textAlign="center" maxW="6xl" mx="auto">
                <Box
                  bg="linear-gradient(135deg, rgba(155, 229, 100, 0.2) 0%, rgba(255, 140, 0, 0.1) 100%)"
                  px={8}
                  py={4}
                  borderRadius="full"
                  border="2px solid"
                  borderColor="brand.sgbusGreen"
                  boxShadow="0 0 40px rgba(155, 229, 100, 0.3)"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="black"
                    color="brand.sgbusGreen"
                    textTransform="uppercase"
                    letterSpacing="2px"
                  >
                    NIEWIDZIALNY → NIEUNIKNIONY
                  </Text>
                </Box>

                <Heading
                  size="4xl"
                  lineHeight="1.1"
                  fontWeight="black"
                  textTransform="uppercase"
                  bgGradient="linear(45deg, brand.aliceBlue 0%, brand.sgbusGreen 50%, brand.ctaPrimary 100%)"
                  bgClip="text"
                  textAlign="center"
                  maxW="5xl"
                >
                  "90 DNI DO ZEMSTY NA PRZECIĘTNOŚCI"
                </Heading>

                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color="brand.aliceBlue"
                  textAlign="center"
                  maxW="4xl"
                  lineHeight="1.3"
                >
                  To nie fitness. To{" "}
                  <Text
                    as="span"
                    color="brand.ctaPrimary"
                    fontWeight="black"
                    textShadow="0 0 20px rgba(255, 140, 0, 0.5)"
                  >
                    REKONSTRUKCJA ALPHA MALE.
                  </Text>{" "}
                  Przestań być niewidzialny - zostań tym gościem, na którego wszyscy patrzą z zazdrością.
                </Text>

                <Box
                  bg="linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(15, 27, 60, 0.9) 100%)"
                  backdropFilter="blur(30px)"
                  color="brand.aliceBlue"
                  p={8}
                  borderRadius="3xl"
                  border="1px solid rgba(155, 229, 100, 0.3)"
                  maxW="5xl"
                  boxShadow="0 25px 60px rgba(0, 0, 0, 0.4)"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "3xl",
                    padding: "2px",
                    background: "linear-gradient(135deg, rgba(155, 229, 100, 0.6), rgba(255, 140, 0, 0.4))",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude"
                  }}
                >
                  <Text fontSize="2xl" fontStyle="italic" color="brand.sgbusGreen" fontWeight="bold" textAlign="center">
                    "Czy za rok będziesz tym samym niewidzialnym gościem... czy TYM, na którego wszyscy patrzą z respektem?"
                  </Text>
                </Box>
              </VStack>

              {/* Premium Phase Cards */}
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                gap={10}
                w="full"
                maxW="7xl"
                mx="auto"
              >
                {[
                  {
                    step: "01",
                    title: "RESET UMYSŁU",
                    subtitle: "Tygodnie 1-4",
                    description: "Unicestwiamy blokady mentalne z przeszłości. Budujesz mindset ZABÓJCY (nie ofiary). Pierwsze 5kg w dół + energia na MAXIMUM.",
                    color: "brand.sgbusGreen",
                    bgGradient: "linear(135deg, rgba(155, 229, 100, 0.15) 0%, rgba(155, 229, 100, 0.05) 100%)",
                    icon: <FaBrain />
                  },
                  {
                    step: "02",
                    title: "BUDOWA MASZYNY",
                    subtitle: "Tygodnie 5-8",
                    description: "Ciało staje się bronią psychologiczną. Ludzie zaczynają Cię ZAUWAŻAĆ. Przyrost masy mięśniowej + drastyczny ubytek tłuszczu.",
                    color: "brand.ctaPrimary",
                    bgGradient: "linear(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0.05) 100%)",
                    icon: <FaRocket />
                  },
                  {
                    step: "03",
                    title: "ZEMSTA WOJOWNIKA",
                    subtitle: "Tygodnie 9-12",
                    description: "Finalizacja transformacji. Stajesz się tym, który WSZYSTKICH WYPRZEDZA. Nowa tożsamość: Niepokonany Alpha Male.",
                    color: "brand.aliceBlue",
                    bgGradient: "linear(135deg, rgba(233, 241, 247, 0.15) 0%, rgba(233, 241, 247, 0.05) 100%)",
                    icon: <FaTrophy />
                  }
                ].map((phase, index) => (
                  <GridItem key={index}>
                    <Box
                      bg="rgba(26, 26, 26, 0.9)"
                      backdropFilter="blur(20px)"
                      borderRadius="3xl"
                      border="1px solid rgba(155, 229, 100, 0.2)"
                      overflow="hidden"
                      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      _hover={{
                        transform: "translateY(-15px) scale(1.02)",
                        boxShadow: "0 35px 80px rgba(155, 229, 100, 0.25)",
                        border: "1px solid rgba(155, 229, 100, 0.5)"
                      }}
                      position="relative"
                      height="100%"
                      minH="400px"
                    >
                      {/* Gradient Background */}
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bg={phase.bgGradient}
                        opacity={0.6}
                      />

                      {/* Content */}
                      <VStack spacing={6} p={8} position="relative" zIndex={2} height="100%" justify="center">
                        {/* Phase Number */}
                        <Box
                          w="120px"
                          h="120px"
                          bg="linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(15, 27, 60, 0.9) 100%)"
                          borderRadius="50%"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          border="3px solid"
                          borderColor={phase.color}
                          boxShadow={`0 15px 40px ${phase.color === 'brand.sgbusGreen' ? 'rgba(155, 229, 100, 0.4)' : phase.color === 'brand.ctaPrimary' ? 'rgba(255, 140, 0, 0.4)' : 'rgba(233, 241, 247, 0.4)'}`}
                          position="relative"
                          _before={{
                            content: '""',
                            position: "absolute",
                            top: "-5px",
                            left: "-5px",
                            right: "-5px",
                            bottom: "-5px",
                            borderRadius: "50%",
                            background: `conic-gradient(from 0deg, ${phase.color}, transparent, ${phase.color})`,
                            opacity: 0.6,
                            zIndex: -1
                          }}
                        >
                          <VStack spacing={2}>
                            <Box color={phase.color} fontSize="2xl">
                              {phase.icon}
                            </Box>
                            <Text
                              fontSize="2xl"
                              fontWeight="black"
                              color={phase.color}
                            >
                              {phase.step}
                            </Text>
                          </VStack>
                        </Box>

                        {/* Phase Content */}
                        <VStack spacing={4} textAlign="center">
                          <Heading
                            size="xl"
                            color="brand.aliceBlue"
                            fontWeight="black"
                            textTransform="uppercase"
                            letterSpacing="1px"
                          >
                            FAZA {phase.step}
                          </Heading>

                          <Text
                            fontSize="2xl"
                            fontWeight="black"
                            color={phase.color}
                            textTransform="uppercase"
                          >
                            {phase.title}
                          </Text>

                          <Badge
                            fontSize="lg"
                            px={4}
                            py={2}
                            bg={`rgba(${phase.color === 'brand.sgbusGreen' ? '155, 229, 100' : phase.color === 'brand.ctaPrimary' ? '255, 140, 0' : '233, 241, 247'}, 0.2)`}
                            color={phase.color}
                            borderRadius="full"
                            fontWeight="bold"
                            border="1px solid"
                            borderColor={phase.color}
                          >
                            {phase.subtitle}
                          </Badge>

                          <Text
                            color="brand.aliceBlue"
                            fontSize="lg"
                            lineHeight="1.6"
                            opacity={0.9}
                            textAlign="center"
                            px={2}
                          >
                            {phase.description}
                          </Text>
                        </VStack>
                      </VStack>
                    </Box>
                  </GridItem>
                ))}
              </Grid>

              {/* Premium CTA Section */}
              <VStack spacing={16} textAlign="center" w="full" maxW="800px" mx="auto" mt={20}>
                <VStack spacing={8}>
                  <Heading
                    size="3xl"
                    color="brand.aliceBlue"
                    fontWeight="black"
                    lineHeight="1.2"
                    bgGradient="linear(45deg, brand.aliceBlue 0%, brand.sgbusGreen 100%)"
                    bgClip="text"
                    textTransform="uppercase"
                  >
                    GOTOWY ZOSTAĆ NOWYM ALPHA?
                  </Heading>
                  <Text
                    fontSize="2xl"
                    color="brand.aliceBlue"
                    opacity={0.9}
                    lineHeight="1.4"
                    fontWeight="medium"
                  >
                    Za 90 dni będziesz tym facetem, na którego wszyscy patrzą z zazdrością (a Twoi "koledzy" będą żałować, że Cię lekceważyli)
                  </Text>
                </VStack>

                <Button
                  size="xl"
                  bg="linear-gradient(135deg, brand.ctaPrimary 0%, #ff6b00 100%)"
                  color="white"
                  _hover={{
                    bg: "linear-gradient(135deg, brand.ctaHover 0%, #e55a00 100%)",
                    transform: "translateY(-8px) scale(1.05)",
                    boxShadow: "0 25px 60px rgba(255, 140, 0, 0.4)"
                  }}
                  px={16}
                  py={8}
                  borderRadius="2xl"
                  fontWeight="black"
                  fontSize="xl"
                  textTransform="uppercase"
                  rightIcon={<FaArrowRight />}
                  boxShadow="0 15px 40px rgba(255, 140, 0, 0.3)"
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  letterSpacing="1px"
                  border="2px solid transparent"
                  _focus={{
                    border: "2px solid brand.sgbusGreen",
                    boxShadow: "0 0 0 4px rgba(155, 229, 100, 0.3)"
                  }}
                >
                  CHCĘ ZEMSTY NA PRZECIĘTNOŚCI
                </Button>

                <VStack spacing={6}>
                  <HStack
                    spacing={12}
                    color="brand.aliceBlue"
                    opacity={0.9}
                    fontSize="lg"
                    flexWrap="wrap"
                    justify="center"
                    fontWeight="bold"
                  >
                    <HStack>
                      <WarningIcon color="brand.ctaPrimary" />
                      <Text>Tylko 8 miejsc miesięcznie</Text>
                    </HStack>
                    <HStack>
                      <CheckCircleIcon color="brand.sgbusGreen" />
                      <Text>112+ mężczyzn już nie jest niewidzialnych</Text>
                    </HStack>
                    <HStack>
                      <FaFire color="#ff8c00" />
                      <Text>TAMTEN GOŚĆ nie czeka na "lepszy moment"</Text>
                    </HStack>
                  </HStack>

                  <Box
                    bg="rgba(255, 140, 0, 0.1)"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 140, 0, 0.3)"
                    borderRadius="xl"
                    p={4}
                    maxW="600px"
                  >
                    <Text
                      color="brand.ctaPrimary"
                      fontSize="lg"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      UWAGA: Nie dla słabych umysłów. Tylko dla wojowników gotowych na brutalną prawdę.
                    </Text>
                  </Box>
                </VStack>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box py={20} bg="brand.oxfordBlue">
          <Container maxW="container.xl">
            <VStack spacing={12} textAlign="center">
              <VStack spacing={4}>
                <Heading size="2xl" color="brand.aliceBlue">
                  OSTATNI APEL PRZED BITWĄ
                </Heading>
                <Text fontSize="xl" color="brand.aliceBlue" opacity={0.8}>
                  "Im dłużej czekasz na atak, tym silniejszy staje się wróg."
                </Text>
              </VStack>
              
              <HStack spacing={6}>
                <Button 
                  size="lg" 
                  bg="brand.ctaPrimary"
                  color="white"
                  _hover={{ bg: "brand.ctaHover", transform: "translateY(-2px)" }}
                  px={8}
                  py={6}
                  borderRadius="full"
                  fontWeight="bold"
                  boxShadow="0 4px 15px rgba(255, 140, 0, 0.3)"
                >
                  BRIEFING STRATEGICZNY
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  borderColor="rgba(233, 241, 247, 0.3)"
                  color="brand.aliceBlue"
                  bg="rgba(233, 241, 247, 0.1)"
                  backdropFilter="blur(10px)"
                  _hover={{ bg: "rgba(233, 241, 247, 0.2)", borderColor: "brand.aliceBlue" }}
                  px={8}
                  py={6}
                  borderRadius="full"
                  fontWeight="bold"
                >
                  ŁĄCZNOŚĆ Z DOWÓDCĄ
                </Button>
              </HStack>
              
              <VStack spacing={2} color="brand.aliceBlue" opacity={0.8}>
                <Text>Kwatera główna - centrum Warszawy</Text>
                <Text>beniamin@wysokinski.fit</Text>
                <Text>+48 123 456 789 | Linia dowodzenia</Text>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Sliding Instagram Panel */}
     

        {/* Instagram Panel Trigger - Vertical Text */}
        <Box
          position="fixed"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1000}
          display={isPanelOpen ? "none" : "block"}
        >
          <VStack
            bg="rgba(26, 26, 26, 0.9)"
            backdropFilter="blur(20px)"
            color="brand.sgbusGreen"
            border="1px solid rgba(155, 229, 100, 0.3)"
            borderRadius="xl"
            p={3}
            onClick={() => setIsPanelOpen(true)}
            _hover={{
              bg: "rgba(155, 229, 100, 0.1)",
              transform: "translateX(-5px)",
              cursor: "pointer"
            }}
            transition="all 0.3s"
            spacing={1}
          >
            <FaInstagram size="16px" />
            {["I", "N", "S", "T", "A", "G", "R", "A", "M"].map((letter, index) => (
              <Text
                key={index}
                fontSize="xs"
                fontWeight="bold"
                lineHeight="1"
                letterSpacing="1px"
              >
                {letter}
              </Text>
            ))}
          </VStack>
        </Box>

        {/* Fixed Bottom Right CTA Button */}
        <Box
          position="fixed"
          bottom={6}
          right={6}
          zIndex={1000}
        >
          <Button
            bg="brand.ctaPrimary"
            color="white"
            _hover={{ 
              bg: "brand.ctaHover", 
              transform: "scale(1.05)",
              boxShadow: "0 15px 40px rgba(255, 140, 0, 0.4)" 
            }}
            borderRadius="full"
            px={8}
            py={6}
            fontWeight="black"
            fontSize="lg"
            textTransform="uppercase"
            boxShadow="0 10px 30px rgba(255, 140, 0, 0.3)"
            transition="all 0.3s"
            rightIcon={<FaTrophy />}
            minW="auto"
          >
            DOŁĄCZ DO ELITY
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
