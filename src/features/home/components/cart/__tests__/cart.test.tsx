import "@testing-library/jest-dom";
import { getAllByText, render } from "@testing-library/react";
import Cart from "..";
import { IntlProvider } from "react-intl";

const mockOrder = [
  {
    id: 1625701,
    name: "Hard Core",
    price: 33,
    modifiersName: "",
    modifiersPrice: 0,
  },
  {
    id: 1625701,
    name: "Hard Core",
    price: 33,
    modifiersName: "",
    modifiersPrice: 0,
  },
  {
    id: 1625702,
    name: "Smash Brooks",
    price: 0,
    modifiersName: "2 meats",
    modifiersPrice: 35,
  },
];

describe("Cart", () => {
  it("should format the price correctly", () => {
    const { getByText, getAllByText } = render(
      <IntlProvider messages={{}} locale={"pt-BR"} defaultLocale="en">
        <Cart locale={"pt-BR"} order={mockOrder} />
      </IntlProvider>
    );

    expect(getByText("Carrinho")).toBeInTheDocument();
    expect(getByText("Hard Core")).toBeInTheDocument();
    expect(getByText("Smash Brooks")).toBeInTheDocument();
    expect(getByText("2 meats")).toBeInTheDocument();
    expect(getAllByText("R$ 101,00")).toHaveLength(2);
  });
});
