"use client";

import { useContext, useRef } from "react";
import { PageContext } from "@/app/context/page";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Canvas from "@/app/features/ecg/canvas";

export default function Page() {
  const contextData = useContext(PageContext) as [];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#002735" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#39c4d8" }}
          >
            Idoven.ai Coding Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          padding: "0 0 0 0",
        }}
      >
        <Card
          sx={{
            background: "#3e3e3e",
            width: "100%",
            height: "100%",
            borderRadius: 0,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#67696a", marginLeft: "50px" }}
          >
            Ecg Signal
          </Typography>
          <Canvas data={contextData} />
        </Card>
      </Box>
    </Box>
  );
}
