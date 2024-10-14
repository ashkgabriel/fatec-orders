"use client";
import { withDataFetching } from "@/components/HOC/withDataFetching";
import EditTemplate from "@/components/templates/orders/EditTemplate";
import { env } from "@/config/env";
import { IOrder } from "@/interfaces/IOrder";
import React, { useEffect, useState } from "react";

interface PedidosEditProps {
  params: { slug: string };
  data?: any;
}

const PedidosEdit: React.FC<PedidosEditProps> = ({ params, data }) => {
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    if (!data) {
      console.error("Dados da API não carregados.");
      return;
    }
    console.log("Dados recebidos:", data); // Verifique se os dados estão corretos

    const { pedido } = data;
    if (!pedido) {
      console.error("Pedido não encontrado nos dados recebidos.");
      return;
    }

    const {
      id,
      data: date,
      cpf: client_id,
      forma_pagamento: payment_method,
      quantidade_itens: quantity,
      valor_total: total,
    } = pedido;

    setOrder({
      id,
      date,
      client_id,
      payment_method,
      quantity,
      total,
    });
  }, [data]);

  return <EditTemplate order={order}/>;
};

export default withDataFetching(`${env.apiBaseUrl}/pedidos`)(PedidosEdit);
