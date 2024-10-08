"use client";
import { withDataFetching } from "@/components/HOC/withDataFetching";
import EditTemplate from "@/components/templates/products/EditTemplate";
import { env } from "@/config/env";
import { IProduct } from "@/interfaces/IProduct";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface ProductEditProps {
  params?: { slug: string };
  data: any;
}

const ProductEdit: React.FC<ProductEditProps> = ({ params, data }) => {
  const [product, setProduct] = useState<IProduct>();
  
  // Feito em aula
  useEffect(() => {
    const fetchData = async () => {
      if (!data) return

      const {
        id,
        descricao: description,
        marca: brand,
        valor: value,
        peso_gramas: weight,
        sabor: flavor,
      } = data.produto;

      setProduct({
        id,
        brand,
        description,
        flavor,
        value,
        weight,
      });

    };
    fetchData();
  }, [data]);

  return <EditTemplate product={product}/>;
};

export default withDataFetching(`${env.apiBaseUrl}/produto`)(
  ProductEdit
);
