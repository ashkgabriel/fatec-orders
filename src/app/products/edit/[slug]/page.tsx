"use client";
import EditTemplate from "@/components/templates/products/EditTemplate";
import { env } from "@/config/env";
import { IProduct } from "@/interfaces/IProduct";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  const [product, setProduct] = useState<IProduct>()
  
  // Feito em aula
  useEffect(() => {
    const fetchData = async () => {
      if(!params.slug) return;
      const response = await axios.get(`${env.apiBaseUrl}/produto/${params.slug}`)

      const { id, descricao, marca, peso_gramas, sabor } = response.data.produto
      
      setProduct({
        brand,
        description,
        flavor,
        value,
        
      })

      console.log(response.data.produto);
    }
    fetchData()
  }, [params.slug] )

  return <EditTemplate/>
};

export default ProductEdit;
