import React from "react";
import { useColorMode, Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const DarkModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Icon
      onClick={toggleColorMode}
      as={colorMode === "light" ? MoonIcon : SunIcon}
      color="white" fontSize={"xl"}
      mx={2}
    />
  );
};

export default DarkModeToggle;
