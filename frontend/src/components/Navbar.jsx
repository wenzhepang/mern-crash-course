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
          <Text fontSize="3xl" fontWeight="extrabold" color="transparent">
            Product Store
          </Text>
        </Box>
        <HStack gap={4} bgColor="transparent" p={2} borderRadius={10}>
          <Link to="/">
            <Button variant="outline" size="sm" bg={buttonBg} color={iconColor}>
              <CiSquarePlus />
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            variant="outline"
            size="sm"
            bg={buttonBg}
            color={iconColor}
          >
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
