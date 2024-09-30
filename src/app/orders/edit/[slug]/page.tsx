import { TextField } from "@mui/material";
import React from "react";
import Layout from "@/components/UI/organisms/Layout";
import EditTemplate from "@/components/templates/orders/EditTemplate";

interface PedidosEditProps {
  params: { slug: string };
}

const PedidosEdit: React.FC<PedidosEditProps> = ({ params }) => {
  return (
    <EditTemplate/>
  );
};

export default PedidosEdit;
