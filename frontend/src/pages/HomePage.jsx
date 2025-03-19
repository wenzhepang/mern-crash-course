import React, { useEffect } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  Container,
  SimpleGrid,
  VStack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { toaster, Toaster } from "@/components/ui/toaster";
import ImgCard from "../components/ImgCard";
const HomePage = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW={"container.sm"} py={12}>
      <Toaster />
      {products.length === 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <VStack align="center">
            <Text fontSize="2xl" fontWeight="bold" color="gray.600" cursor="default">
              No products found
            </Text>
            <Link to="/create">
              <Button colorScheme="blue" size="md" variant="solid" 
                _hover={{ 
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                  filter: "brightness(0.8)"
                }}
                _active={{
                  transform: "scale(0.8)",
                  transition: "all 0.3s ease",
                  bg: "gray.600"
                }}
              >
                + Create Product
              </Button>
            </Link>
          </VStack>
        </Box>
      ) : (
        <VStack spacing={8}>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            w={"full"}
            spacing={10}
            gap={10}
            px={20}
          >
            {products.map((product) => (
              <ImgCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        </VStack>
      )}
    </Container>
  );
};

export default HomePage;
