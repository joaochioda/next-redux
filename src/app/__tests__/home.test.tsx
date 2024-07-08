import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home, { ChildComo } from "../page";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

const createTestStore = (initialState: any) => {
  return configureStore({
    reducer: { auth: () => initialState.auth, theme: () => initialState.theme },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

describe("Home", () => {
  it("renders a hello message", () => {
    render(<Home />);

    const heading = screen.getByText("You are now Logged Out");

    expect(heading).toBeInTheDocument();
  });

  it("click button and show logged in", async () => {
    render(<Home />);

    const button = screen.queryByTestId("login-button");
    button?.click();

    await waitFor(() => screen.getByText("You are now Logged In"));

    const heading = screen.getByText("You are now Logged In");

    expect(heading).toBeInTheDocument();
  });

  it("load home with custom initial state", () => {
    const initialState = {
      auth: { authState: true, authName: "Dom Ruan" },
      theme: { colorBackGroundState: "blue" },
    };

    const store = createTestStore(initialState);
    const { getByText } = render(
      <IntlProvider messages={{}} locale={"en"} defaultLocale="en">
        <Provider store={store}>
          <ChildComo />
        </Provider>
      </IntlProvider>
    );
    expect(getByText("Dom Ruan")).toBeInTheDocument();
  });
});
