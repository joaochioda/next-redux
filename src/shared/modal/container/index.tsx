import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function Container({
  children,
  width,
}: {
  children: React.ReactNode;
  width: string;
}) {
  const isSmallScreen = useMediaQuery(`(max-width: ${width}px)`);
  const style = {
    position: "absolute" as "absolute",
    top: isSmallScreen ? "0" : "50%",
    left: isSmallScreen ? "0" : "50%",
    transform: isSmallScreen ? "translate(0, 0)" : "translate(-50%, -50%)",
    width: isSmallScreen ? "100%" : "480px",
    height: isSmallScreen ? "100%" : "fit-content",
    bgcolor: "background.paper",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  };

  return <Box sx={style}>{children}</Box>;
}
