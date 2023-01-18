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
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import { useEffect } from "react";

import { EmailIcon, ViewIcon, ViewOffIcon, LockIcon } from "@chakra-ui/icons";

const Register = () => {
  const [gen, setGen] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, setCShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const toast = useToast();
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleCShowClick = () => setCShowPassword(!cshowPassword);

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
                <NumberInput
                  allowMouseWheel
                  placeholder="Age"
                  defaultValue={"Age"}
                  min={12}
                  max={100}
                  mb={"2"}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <RadioGroup onChange={setGen} value={gen}>
                  <Stack direction="row">
                    <Radio value="1">Male</Radio>
                    <Radio value="2">Female</Radio>
                    <Radio value="3">Others</Radio>
                  </Stack>
                </RadioGroup>
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
                    onChange={(e) => setCPass(e.target.value)}
                    type={cshowPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                  />
                  <InputRightElement width="3.5rem">
                    <IconButton
                      h="1.75rem"
                      size="sm"
                      aria-label="ViewMode Changer"
                      icon={cshowPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={handleCShowClick}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?{" "}
        <Link color="teal.500" href="/">
          Sign in
        </Link>
      </Box>
    </Flex>
  );
};

export default Register;
