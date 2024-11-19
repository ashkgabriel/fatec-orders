"use client";
import { withDataFetching } from "@/components/HOC/withDataFetching";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { IProduct } from "@/interfaces/IProduct";
import { ProductEditValidator } from "@/validators/ProductEditValidator";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";

interface EditTemplateProps {
  product?: IProduct;
}

const EditTemplate: React.FC<EditTemplateProps> = ({ product }) => {
  const formik = useFormik<IProduct>({
    initialValues: {
      description: "",
      brand: "",
      value: 0,
      weight: 0,
      flavor: "",
    },
    validationSchema: ProductEditValidator,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors, setValues } = formik;

  useEffect(() => {
    if(!product) return;
    
    const {id, ...prod} = product
    setValues(prod)
  },[product, setValues])

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
          <MenuItem value="Morango">Morango</MenuItem>
          <MenuItem value="Chocolate">Chocolate</MenuItem>
          <MenuItem value="Abacaxi">Abacaxi</MenuItem>
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
