import { Box, Container, Flex, Heading, Text, Button, VStack, Link } from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" py={4}>
        <Flex justifyContent="space-between" alignItems="center" px={8}>
          <Heading as="h1" size="lg" color="white">Software 3.0</Heading>
          <Flex as="nav">
            <Link px={3} py={2} color="white" href="#details">Event Details</Link>
            <Link px={3} py={2} color="white" href="#register">Register</Link>
            <Link px={3} py={2} color="white" href="#contact">Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} py={10} px={8} align="stretch">
        <Box id="details" p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Event Details</Heading>
          <Flex align="center" mt={2}>
            <FaCalendarAlt />
            <Text ml={2}>October 10, 2023</Text>
          </Flex>
          <Flex align="center" mt={2}>
            <FaMapMarkerAlt />
            <Text ml={2}>Silicon Valley, CA</Text>
          </Flex>
        </Box>
        <Box id="register" p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Registration</Heading>
          <Text mt={2}>Join us to explore the future of software innovations!</Text>
          <Button mt={4} colorScheme="blue">Register Now</Button>
        </Box>
        <Box id="contact" p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Contact Us</Heading>
          <Flex align="center" mt={2}>
            <FaEnvelope />
            <Text ml={2}>info@futureofsoftware.com</Text>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;