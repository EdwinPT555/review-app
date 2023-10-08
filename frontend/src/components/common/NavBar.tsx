import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DarkModeToggle from "./DarkModeToggle";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    //
  };

  return (
    <Box as="nav" bg="twitter.800" p={4} color="white">
      <Flex alignItems="center" px={8}>
        <Box>
          <HStack spacing={2}>
            <Image src="https://cdn-icons-png.flaticon.com/512/2065/2065224.png" alt="Logo" boxSize="40px" />
            <Box fontSize="xl" fontWeight="bold" px={4}>
              Review Now
            </Box>

          </HStack>
        </Box>
        <Spacer />
        <Box mx={4}>
          <Menu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onOpen={() => setIsMenuOpen(true)}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              fontSize="md"
              fontWeight="medium"
              leftIcon={<FaUserCircle />}
              onMouseEnter={() => setIsMenuOpen(true)}
            >

              {"Edwin"}
            </MenuButton>
            <MenuList
              color="blackAlpha.800"
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <DarkModeToggle />
        </Box>
      </Flex >
    </Box >
  );
};

export default Navbar;
