import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from '@chakra-ui/react';
import { InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import bgImage from 'assets/images/new-bg.jpeg';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSignIn } from './queryHooks';
import { useState } from 'react';
import styled from 'styled-components';

const schema = yup
  .object()
  .shape({
    accountId: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const SignIn = () => {
  const { mutate, isLoading } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    mutate({ data });
  };
  return (
    <StyledBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage={bgImage}
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        opacity="0.1"
        bgGradient="linear(to-r, #0a192f, #0d0d65)"
      />

      <Box
        p={{ base: '4', md: '8' }}
        maxWidth={['100%', '90%', '60vw', '40vw']}
        width="90%"
        position="relative"
        zIndex="1"
      >
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          mb="6"
          color="white"
        >
          Login into your account
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="email">
            <Input
              placeholder="Player ID"
              size="lg"
              mb="4"
              bgColor="transparent"
              borderRadius="none"
              {...register('accountId')}
            />
            {errors?.accountId && (
              <FormErrorMessage>Enter a valid player ID</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="password">
            <InputGroup>
              <Input
                pr="4.5rem" // To accommodate the eye icon button
                type={showPassword ? 'text' : 'password'}
                placeholder="*****"
                size="lg"
                mb="6"
                borderRadius="none"
                focusBorderColor="purple.400"
                {...register('password')}
              />
              <InputRightElement
                width="4.5rem"
                top="30%"
                transform="translateY(-50%)"
              >
                <IconButton
                  h="1.75rem"
                  size="sm"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
            </InputGroup>
            {errors?.password && (
              <FormErrorMessage>Password is required</FormErrorMessage>
            )}
          </FormControl>
          <Button variant="primary" type="submit" width="100%">
            Log in
          </Button>
        </form>
      </Box>
    </StyledBox>
  );
};

export default SignIn;

const StyledBox = styled(Box)`
  height: 100vh;
  height: 100dvh;
  height: 100svh;
`;
