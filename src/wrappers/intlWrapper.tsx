"use client";

import { useAppSelector } from "@/redux/store";
import { IntlProvider } from "react-intl";
import { messagesInUs } from "@/locales/en-us";
import { messagesInBrazil } from "@/locales/pt-br";

export default function IntlWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useAppSelector((state) => state.intl.locale);
  // onClick={() => dispatch(setAuthState(true))}
  //
  return (
    <IntlProvider
      messages={locale === "en" ? messagesInUs : messagesInBrazil}
      locale={locale}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
}
