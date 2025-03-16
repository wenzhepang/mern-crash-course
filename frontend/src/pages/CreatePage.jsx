import { Box, Container, VStack } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../components/ui/color-mode'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { useProductStore } from '../store/product'
import { Toaster, toaster } from "@/components/ui/toaster"
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })
  const { createProduct } = useProductStore()
  
  const handleSubmit = async () => {
    
    const {success, message, error} = await createProduct(newProduct)
    if (success) {
      toaster.create({
        description: success,
        type: "success"
    })
    }else{
      toaster.create({
        description: error,
        type: "error"
    })
    }
    setNewProduct({
      name: '',
      price: '',
      image: '',
    })
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as="h1" fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} mb={8}>Create Product</Heading>
        <Box
          w="600px"
          p={6}
          bg={useColorModeValue("white", "gray.800")}
          rounded={"lg"}
          boxShadow={"md"}
          borderWidth={1}
          borderRadius={"md"}
          borderColor={"black"}
        >
          <VStack spacing={4} >
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              borderColor={useColorModeValue("gray.300", "gray.700")}
            />
            <Input
              placeholder="Product Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              borderColor={useColorModeValue("gray.300", "gray.700")}
            />
            <Input
              placeholder="Product Image"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              borderColor={useColorModeValue("gray.300", "gray.700")}
            />
            <Button type="submit" colorScheme="blue"  onClick={handleSubmit}>Create Product</Button>
          </VStack>
        </Box>

      </VStack>
      <Toaster />
      </Container >
      
  )
}

export default CreatePage