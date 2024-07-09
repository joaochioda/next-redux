import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function Container({ children }: { children: React.ReactNode }) {
  const isSmallScreen = useMediaQuery("(max-width: 468px)");
  const style = {
    position: "absolute" as "absolute",
    top: isSmallScreen ? "0" : "50%",
    left: isSmallScreen ? "0" : "50%",
    transform: isSmallScreen ? "translate(0, 0)" : "translate(-50%, -50%)",
    width: isSmallScreen ? "100%" : "480px",
    height: isSmallScreen ? "100%" : "fit-content",
    bgcolor: "background.paper",
  };

  return <Box sx={style}>{children}</Box>;
}
