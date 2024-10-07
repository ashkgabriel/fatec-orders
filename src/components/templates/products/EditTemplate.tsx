"use client";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { IProduct } from "@/interfaces/IProduct";
import { ProductEditValidator } from "@/validators/ProductEditValidator";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const EditTemplate: React.FC<{ productId: number }> = ({ productId }) => {
  const [loading, setLoading] = useState(true);
  const [initialValues, setInitialValues] = useState<IProduct>({
    description: "",
    brand: "",
    value: 0,
    weight: 0,
    flavor: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${env.apiBaseUrl}/produto`);
        console.log("Dados da API:", response.data);

        // Acessa o array dentro da chave 'produtos'
        const products = response.data.produtos;

        // Filtra o produto pelo ID
        const product = products.find((p: any) => p.id === productId);
        if (product) {
          setInitialValues({
            description: product.descricao,
            brand: product.marca,
            value: product.valor,
            weight: product.peso_gramas,
            flavor: product.sabor || "",
          });
        } else {
          console.error("Produto não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  const formik = useFormik<IProduct>({
    initialValues: initialValues,
    enableReinitialize: true, // Permite que Formik re-renderize quando initialValues mudar
    validationSchema: ProductEditValidator,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          value={values.description}
          name="description"
          label="Descrição"
          fullWidth
        />
        <TextField
          onChange={handleChange}
          error={!!errors.brand}
          helperText={errors.brand}
          value={values.brand}
          name="brand"
          label="Marca"
          fullWidth
        />
        <TextField
          onChange={handleChange}
          error={!!errors.value}
          helperText={errors.value}
          value={values.value}
          name="value"
          label="Valor"
          fullWidth
        />
        <TextField
          onChange={handleChange}
          error={!!errors.weight}
          helperText={errors.weight}
          value={values.weight}
          name="weight"
          label="Peso (gramas)"
          fullWidth
        />
        <Select
          name="flavor"
          label="Sabor"
          fullWidth
          value={values.flavor}
          onChange={(e) => setFieldValue("flavor", e.target.value)}
        >
          <MenuItem value=""> --Não Informado-- </MenuItem>
          <MenuItem value="morango">Morango</MenuItem>
          <MenuItem value="chocolate">Chocolate</MenuItem>
          <MenuItem value="abacaxi">Abacaxi</MenuItem>
        </Select>

        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditTemplate;
