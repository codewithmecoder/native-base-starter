import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Icon,
  IconButton,
  useColorModeValue,
  Pressable,
  Hidden,
  Center,
  StatusBar,
  Box,
  Stack,
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import IconGoogle from "./components/IconGoogle";
import IconFacebook from "./components/IconFacebook";
import FloatingLabelInput from "./components/FloatingLabelInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function SignUpForm({ props }: any) {
  // add next router here
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{ bg: "white" }}
        _dark={{ bg: "coolGray.800" }}
        justifyContent="space-between"
        space="3"
        borderTopRightRadius={{ base: "2xl", md: "xl" }}
        borderBottomRightRadius={{ base: "0", md: "xl" }}
        borderTopLeftRadius={{ base: "2xl", md: "0" }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign up to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="8">
              <VStack space={{ base: "7", md: "4" }}>
                <FloatingLabelInput
                  isRequired
                  label="Email"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue("#fff", "#1f2937")}
                  borderRadius="4"
                  defaultValue={text}
                  onChangeText={(txt: any) => setText(txt)}
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  _dark={{
                    borderColor: "coolGray.700",
                  }}
                  _light={{
                    borderColor: "coolGray.300",
                  }}
                />
                <FloatingLabelInput
                  isRequired
                  type={showPass ? "" : "password"}
                  label="Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue("#fff", "#1f2937")}
                  defaultValue={pass}
                  onChangeText={(txt: any) => setPass(txt)}
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showPass ? "eye-with-line" : "eye"}
                        />
                      }
                      onPress={() => {
                        setShowPass(!showPass);
                      }}
                    />
                  }
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  _dark={{
                    borderColor: "coolGray.700",
                  }}
                  _light={{
                    borderColor: "coolGray.300",
                  }}
                />

                <FloatingLabelInput
                  isRequired
                  type={showConfirmPass ? "" : "password"}
                  label="Confirm Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue("#fff", "#1f2937")}
                  defaultValue={confirm_pass}
                  onChangeText={(txt: any) => setConfirmPass(txt)}
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showConfirmPass ? "eye-with-line" : "eye"}
                        />
                      }
                      onPress={() => {
                        setShowConfirmPass(!showConfirmPass);
                      }}
                    />
                  }
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  _dark={{
                    borderColor: "coolGray.700",
                  }}
                  _light={{
                    borderColor: "coolGray.300",
                  }}
                />
              </VStack>
              <Checkbox
                alignItems="flex-start"
                defaultIsChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <HStack alignItems="center">
                  <Text fontSize="sm" color="coolGray.400" pl="2">
                    I accept the{" "}
                  </Text>
                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                    }}
                    _light={{
                      _text: {
                        color: "primary.900",
                      },
                    }}
                    _dark={{
                      _text: {
                        color: "primary.500",
                      },
                    }}
                  >
                    Terms of Use
                  </Link>
                  <Text fontSize="sm"> & </Text>

                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                    }}
                    _light={{
                      _text: {
                        color: "primary.900",
                      },
                    }}
                    _dark={{
                      _text: {
                        color: "primary.500",
                      },
                    }}
                  >
                    Privacy Policy
                  </Link>
                </HStack>
              </Checkbox>
              {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
              <Button
                size="md"
                borderRadius="4"
                _text={{
                  fontSize: "sm",
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.900",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => {
                  props.navigation.navigate("OTP");
                }}
              >
                SIGN UP
              </Button>
              {/* Closing Link Tag */}
              <HStack
                space="2"
                mb={{ base: "6", md: "7" }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{ bg: "coolGray.200" }}
                  _dark={{ bg: "coolGray.700" }}
                ></Divider>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _light={{ color: "coolGray.300" }}
                  _dark={{ color: "coolGray.500" }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{ bg: "coolGray.200" }}
                  _dark={{ bg: "coolGray.700" }}
                ></Divider>
              </HStack>
            </VStack>
            <Center>
              <HStack space="4">
                <Pressable>
                  <IconFacebook />
                </Pressable>
                <Pressable>
                  <IconGoogle />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          alignItems="center"
          justifyContent="center"
          mt={{ base: "auto", md: "8" }}
        >
          <Text
            fontSize="sm"
            _light={{ color: "coolGray.800" }}
            _dark={{ color: "coolGray.400" }}
          >
            Already have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignIn" */}
          <Link
            _text={{
              fontSize: "sm",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            _light={{
              _text: {
                color: "primary.900",
              },
            }}
            _dark={{
              _text: {
                color: "primary.500",
              },
            }}
            onPress={() => {
              props.navigation.navigate("SignIn");
            }}
          >
            Sign in
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
}

export default function SignUp(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: "primary.900" }}
        _dark={{ bg: "coolGray.900" }}
      />
      <Center
        my="auto"
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "primary.900" }}
        flex="1"
      >
        <Stack
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          maxW={{ md: "1016px" }}
          flex={{ base: "1", md: "none" }}
        >
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <HStack space="2" alignItems="center">
                <IconButton
                  pl="0"
                  variant="unstyled"
                  onPress={() => {}}
                  icon={
                    <Icon
                      size="6"
                      as={AntDesign}
                      name="arrowleft"
                      color="coolGray.50"
                    />
                  }
                />
                <Text color="coolGray.50" fontSize="lg">
                  Sign Up
                </Text>
              </HStack>
              <VStack space="2">
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                  Welcome
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: "coolGray.400",
                  }}
                  _light={{
                    color: "primary.300",
                  }}
                >
                  Sign up to continue
                </Text>
              </VStack>
            </VStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              bg="primary.700"
              borderTopLeftRadius={{ base: "0", md: "xl" }}
              borderBottomLeftRadius={{ base: "0", md: "xl" }}
            >
              <Image
                h="24"
                size="80"
                alt="NativeBase Startup+ "
                resizeMode={"contain"}
                source={require("./components/logo.png")}
              />
            </Center>
          </Hidden>
          <SignUpForm props={props} />
        </Stack>
      </Center>
    </>
  );
}
