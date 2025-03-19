import {
    IconButton,
    HStack,
    Box,
    Image,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { useColorModeValue } from "../components/ui/color-mode";
  import { MdDeleteForever } from "react-icons/md";
  import { FaEdit } from "react-icons/fa";
  import { useProductStore } from "@/store/product";
  import { toaster } from "@/components/ui/toaster";
  import DialogCard from "./DialogCard";
  const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    const bgColor = useColorModeValue("white", "gray.700");
    const { deleteProduct } = useProductStore();
    const handleDelete = async (product) => {
      const { success, error } = await deleteProduct(product._id);
      if (success) {
        toaster.create({
          description: success,
          type: "success",
        });
      } else {
        toaster.create({
          description: error,
          type: "error",
        });
      }
    };
    return (
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        bg={bgColor}
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.01)", // 悬停时放大
          shadow: "2xl", // 增强阴影
          filter: "brightness(1.1)", // 让颜色更亮
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="200px"
          objectFit="cover"
          transition="transform 0.3s ease-in-out"
        />
  
        <Box p={4} bg={bgColor}>
  
          <HStack mt={2}>
            {/* <IconButton
              colorScheme="blue"
              variant="ghost"
              _hover={{
                bg: "yellow.500",
                transform: "scale(1.2)",
              }}
            >
              <FaEdit />
            </IconButton> */}
            <DialogCard product={product} />
  
            <IconButton
              colorScheme="red"
              variant="ghost"
              onClick={() => handleDelete(product)}
              _hover={{
                bg: "yellow.500",
                transform: "scale(1.2)",
              }}
            >
              <MdDeleteForever />
            </IconButton>
          </HStack>
        </Box>
      </Box>
    );
  };
  
  export default ProductCard;
  