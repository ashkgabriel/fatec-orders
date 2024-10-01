"use client";
import Layout from "@/components/UI/organisms/Layout";
import { IOrder } from "@/interfaces/IOrder";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const EditTemplate: React.FC = () => {
  const formik = useFormik<IOrder>({
    initialValues: {
      id: 0,
      date: "",
      client_id: 0,
      payment_method: "",
      quantity: 0,
      total: 0,
    },
    validationSchema: OrderEditValidator,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        
      <Box component="form" onSubmit={handleSubmit} className="flex-1 gap-2">
        
        <TextField
          onChange={handleChange}
          error={!!errors.date}
          helperText={errors.date}
          value={values.date}
          name="date"
          type="date"
          label="Data"
          fullWidth
        />
        <TextField
          onChange={handleChange}
          error={!!errors.client_id}
          helperText={errors.client_id}
          value={values.client_id}
          name="client_id"
          label="ID do cliente"
          fullWidth
        />
        <TextField
          onChange={handleChange}
          error={!!errors.payment_method}
          helperText={errors.payment_method}
          value={values.payment_method}
          name="payment_method"
          label="Método de pagamento"
          fullWidth
        />
        
        <TextField
          onChange={handleChange}
          error={!!errors.quantity}
          helperText={errors.quantity}
          value={values.quantity}
          name="quantity"
          label="Quantidade"
          fullWidth
        />
        
        <TextField
          onChange={handleChange}
          error={!!errors.total}
          helperText={errors.total}
          value={values.total}
          name="total"
          label="Total"
          fullWidth
        />

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
