import { Modal } from "@mui/material";
import { JSXElementConstructor, ReactElement } from "react";

export default function Root({
  children,
  open,
}: {
  open: boolean;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  return <Modal open={open}>{children}</Modal>;
}
