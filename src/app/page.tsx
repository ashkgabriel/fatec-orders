"use client";
import { useAuth } from "@/context/AuthContext";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();
  
  const [name, setName] = useState<string>("");

  const { bearerToken, login } = useAuth();

  // useEffect(() => {
  //   setName("Não definido")
  // }, [])

  // useEffect(() => {
  //   alert(`Nome foi alterado para: ${name}`)
  // }, [name])
  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <Typography variant="h5">Login</Typography>

        {bearerToken}

        {/* <Box>Nome:{name}</Box> */}

        <Box
          // component="form"
          sx={{ mt: 1 }}
          // onSubmit={() => {
          //   setName("Gabriel");
          // }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuário"
            name="user"
            autoFocus
            // value={}
            // onChange={}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label="Senha"
            name="password"
            // value={}
            // onChange={}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 2 }}
            onClick={() => {
              login("Yuhuu", "Teste123")
              router.push("/home")
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
