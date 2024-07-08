import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import Home from "@/app/page";

const createTestStore = (initialState: any) => {
  return configureStore({
    reducer: { theme: () => initialState.theme },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

describe("Home", () => {
  it("load home with custom initial state", () => {
    const initialState = {
      theme: { colorBackGroundState: "blue" },
    };

    const store = createTestStore(initialState);
    const { getByText } = render(
      <IntlProvider messages={{}} locale={"en"} defaultLocale="en">
        <Provider store={store}>
          <Home />
        </Provider>
      </IntlProvider>
    );
    expect(getByText("MENU")).toBeInTheDocument();
  });
});
