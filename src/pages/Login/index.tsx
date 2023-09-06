import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);

  const navigate = useNavigate();

  const isError = email === "";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signInWithEmailAndPassword(email, password);
    if (result?.user) {
      console.log("logado", result.user);
      navigate("/");
    } else {
      console.log(error);
    }
  };

  const handleClick = () => setShow(!show);

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <Center mb={8} mt={24}>
        Logar
      </Center>
      <form onSubmit={handleSignIn}>
        <FormControl isInvalid={isError}>
          <Input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Digite aqui seu email"
          />
          {isError && (
            <FormHelperText>
              {" "}
              Digite aqui seu e-mail para fazer login.
            </FormHelperText>
          )}
          <InputGroup size="md" mt={8}>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Digite aqui sua senha."
              value={password}
              onChange={handlePassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Box mt={8}>
            Não tem cadastro? <Link to="/register">click aqui</Link>
          </Box>
          <Button colorScheme="blue" type="submit" mt={8} isLoading={loading}>
            Login
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default Login;
