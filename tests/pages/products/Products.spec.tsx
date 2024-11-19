import Products from "@/app/products/page";
import { env } from "@/config/env";
import { render, screen } from "@testing-library/react";
import { http } from "msw";
import { setupServer } from "msw/node";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.get(`${env.apiBaseUrl}/produto`, () => {
    return Response.json({
      produto: [
        {
          id: 1,
          descricao: "Bolacha",
          marca: "Mondelez",
          valor: 6.59,
          peso_gramas: 100,
          sabor: "Chocolate",
        },
      ],
    });
  })
);

describe("Products List Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/products");
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("Should render product list", async () => {
    render(<Products />);

    screen.getByTestId("productList")
    
    const productName = await screen.getByText(/mondelez/i);

    console.log(productName);
    screen.logTestingPlaygroundURL();
  });
});
