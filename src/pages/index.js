import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  IconButton,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import { useEffect } from "react";

import { EmailIcon, ViewIcon, ViewOffIcon, LockIcon } from "@chakra-ui/icons";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const toast = useToast();
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        pt={"10"}
        bgColor={"whiteAlpha.900"}
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              px="1rem"
              py={"2rem"}
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // eslint-disable-next-line react/no-children-prop
                    children={<EmailIcon color="gray.500" />}
                  />
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email address"
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    // eslint-disable-next-line react/no-children-prop
                    children={<LockIcon color="gray.500" />}
                  />
                  <Input
                    onChange={(e) => setPass(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <InputRightElement width="3.5rem">
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      aria-label="ViewMode Changer"
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={handleShowClick}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Register here?{" "}
        <Link color="teal.500" href="/register">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Home;
