"use client";
import EditTemplate from "@/components/templates/products/EditTemplate";
import { env } from "@/config/env";
import axios from "axios";
import React from "react";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  const productId = Number(params.slug)
  
  return <EditTemplate productId = {productId}/>
};

export default ProductEdit;
