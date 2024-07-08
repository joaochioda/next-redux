"use client";
import ReduxProvider from "@/redux/redux-provider";
import IntlWrapper from "./intlWrapper";

export default function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <IntlWrapper>{children}</IntlWrapper>
    </ReduxProvider>
  );
}
