"use client"
import Layout from "@/components/UI/organisms/Layout";
import { useAuth } from "@/context/AuthContext";
import { Box } from "@mui/material";

const Home = () => {
  const {bearerToken} = useAuth();
  return (
    <Layout>
      <Box>Bem vindo</Box>
      <Box>{bearerToken}</Box>
    </Layout>
  );
};

export default Home;
