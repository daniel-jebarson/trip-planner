import React from "react";
import {
  Box,
  Container,
  Input,
  Avatar,
  InputGroup,
  InputRightElement,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box
      p={"5"}
      //   bgColor={"red"}
      justifyContent={"space-around"}
      display={"flex"}
      flexDirection={"row"}
      gap={"30"}
      m={"0"}
    >
      <InputGroup maxW={"40%"}>
        <Input type="text" placeholder="Search Here" color="black" />
        <InputRightElement>
          <IconButton
            size="md"
            colorScheme="blackAlpha"
            aria-label="Get request"
            icon={<Search2Icon />}
          />
        </InputRightElement>
      </InputGroup>
      <Avatar
        position={"absolute"}
        right={"14"}
        top={"4"}
        // color={"green"}
        src="https://bit.ly/dan-abramov"
      />
    </Box>
  );
};

export default Navbar;
