import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { CiSquarePlus } from "react-icons/ci";
import { LuSun, LuMoon } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // 动态切换背景颜色
  const buttonBg = useColorModeValue("gray.400", "gray.700");
  const iconColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Container maxW="1920px" px={4}>
      <Flex
        justify="space-between"
        align="center"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box
          bgGradient="to-r"
          gradientFrom="red.200"
          gradientTo="blue.200"
          bgClip="text"
        >
          <Link to={"/"}>
            <Text fontSize="3xl" fontWeight="extrabold" color="blue.500" _hover={{
              color: "blue.700",
              transform: "scale(1.1)",
            }}
            transition="all 0.3s ease-in-out"
            _active={{
              filter: "brightness(0.5)",
            }}
            >
              Product Store
            </Text>
          </Link>
        </Box>
        <HStack gap={4} bgColor="transparent" p={2} borderRadius={10}>
          <Link to="/create">
            <Button variant="outline" size="sm" bg={buttonBg} color={iconColor} _hover={{
              bg: "gray.500", 
              transform: "scale(1.2)" 
            }}
            transition="transform 0.3s ease-in-out"
            _active={{
              filter: "brightness(0.5)",
            }}>
              <CiSquarePlus />
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            variant="outline"
            size="sm"
            bg={buttonBg}
            color={iconColor}
            _hover={{
              bg: "gray.500", 
              transform: "scale(1.2)" 
            }}
            _active={{
              filter: "brightness(0.5)",
            }}
            transition="transform 0.3s ease-in-out"
          >
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
