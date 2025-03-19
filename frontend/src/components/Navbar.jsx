import { Box, Button, Container, Flex, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { CiSquarePlus } from "react-icons/ci";
import { LuSun, LuMoon } from "react-icons/lu";
import { FaLeaf, FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import DialogCard from "./DialogCard";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // 动态切换背景颜色
  const buttonBg = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Container maxW="1920px" px={4}>
      <Flex
        justify="space-between"
        align="center"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box>
          <HStack spacing={4} color="green.500">
            <Icon as={FaLeaf} boxSize={8} />
            <Icon as={FaStar} boxSize={8} />
            <Icon as={FaCircle} boxSize={8} />
          </HStack>
        </Box>
        <HStack gap={4} bgColor="transparent" p={2} borderRadius={10}>
        <DialogCard />
          <Link to="/">
          <Button
              variant="outline"
              size="sm"
              bg={buttonBg}
              color={iconColor}
              _hover={{
                bg: "green.500",
                transform: "scale(1.2)",
              }}
              transition="transform 0.3s ease-in-out"
              _active={{
                filter: "brightness(0.5)",
              }}
            >
              <FaHome />
            </Button>
            
          </Link>
          <Link to="/create">
            <Button
              variant="outline"
              size="sm"
              bg={buttonBg}
              color={iconColor}
              _hover={{
                bg: "green.500",
                transform: "scale(1.2)",
              }}
              transition="transform 0.3s ease-in-out"
              _active={{
                filter: "brightness(0.5)",
              }}
            >
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
              bg: "green.500",
              transform: "scale(1.2)",
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
