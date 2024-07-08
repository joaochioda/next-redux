"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IntlProvider } from "react-intl";
import { messagesInUs } from "@/locales/en-us";
import { messagesInBrazil } from "@/locales/pt-br";
import useSWR from "swr";
import { setLayout } from "@/redux/reducers/layout";
import { Venue } from "@/pages/api/venue";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function IntlWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useSWR("api/venue", fetcher, {
    revalidateOnFocus: false,
  }) as { data: Venue; error: any; isLoading: boolean };

  if (isLoading) return <div>Loading...</div>;

  const locale = data.locale;

  dispatch(setLayout(data.webSettings));

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
