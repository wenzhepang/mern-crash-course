import React, { useEffect } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  Container,
  SimpleGrid,
  VStack,
  Text,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { toaster, Toaster } from "@/components/ui/toaster";
const HomePage = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  
  return (
    <Container maxW={"container.sm"} py={12}>
      <VStack spacing={8}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Home Page
        </Text>
        <SimpleGrid 
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          w={"full"}
          spacing={10}
          gap={10}
        >
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              _hover={{ color: "blue.500" }}
            >
              No products found
            </Text>
          )}
        </SimpleGrid>

        <Link to={"/create"}>
          <Text as={"span"} color={"blue.500"} _hover={{ color: "blue.700" }}>
            Create Product
          </Text>
        </Link>
      </VStack>
      <Toaster />
    </Container>
  );
};

export default HomePage;
