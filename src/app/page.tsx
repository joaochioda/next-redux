"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import styles from "./page.module.scss";
import ReduxProvider from "@/redux/redux-provider";
import { setAuthState } from "@/redux/reducers/auth/authSlice";

export function ChildComo() {
  const authState = useAppSelector((state) => state.auth.authState);
  const themeState = useAppSelector(
    (state) => state.theme.colorBackGroundState
  );
  const authName = useAppSelector((state) => state.auth.authName);
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex gap border border-1 border-black p-20"
      style={{
        backgroundColor: themeState,
      }}
    >
      You are now {authState ? "Logged In" : "Logged Out"}
      <p>{authName}</p>
      <button onClick={() => dispatch(setAuthState(true))}>Click me</button>
    </div>
  );
}

export default function Home() {
  return (
    <ReduxProvider>
      <ChildComo />
      <p className={styles.p}>hello</p>
    </ReduxProvider>
  );
}
