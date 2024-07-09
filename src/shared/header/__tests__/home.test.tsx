import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from "..";
import { useMediaQuery } from "@mui/material";

jest.mock("@mui/material/useMediaQuery");

describe("Header", () => {
  it("should render the menu with the correct text and props", () => {
    const { getByText, getByTestId } = render(
      <Header.Root>
        <Header.Menu backgroundColor="#fff">
          <Header.Link name="MENU" selected />
          <Header.Link name="ENTRAR" />
          <Header.Link name="CONTATO" />
        </Header.Menu>
        <Header.Banner img="img-test" />
      </Header.Root>
    );

    expect(getByText("MENU")).toBeInTheDocument();
    expect(getByText("ENTRAR")).toBeInTheDocument();
    expect(getByText("CONTATO")).toBeInTheDocument();

    expect(getByTestId("menu-background")).toHaveStyle(
      "background-color: #fff"
    );
  });

  it("should show an icon when is mobile", () => {
    (useMediaQuery as unknown as jest.Mock).mockReturnValue(true);
    const { getByText, getByAltText } = render(
      <Header.Root>
        <Header.Menu backgroundColor="#fff">
          <Header.Link name="FALE" selected />
          <Header.Link name="ENTRAR" />
          <Header.Link name="CONTATO" />
        </Header.Menu>
        <Header.Banner img="img-test" />
      </Header.Root>
    );

    expect(getByText("Menu")).toBeInTheDocument();

    expect(getByAltText("menu-icon")).toBeInTheDocument();
  });
});
