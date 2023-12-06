"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import Canvas from "@/app/features/ecg/canvas";
import { drawWave } from "@/app/features/ecg/drawCanvas";

export default function Page() {
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
          <AddCircleIcon sx={{ color: "#056285", marginLeft: "50px"}} />
          <DoDisturbOnIcon sx={{ color: "#056285", marginLeft: "10px"}} />
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
          sx={{ background: "#3e3e3e", width: "100%", borderRadius: 0, borderTop: 20, borderBottom: 20, borderColor: "#aeb6b8" }}
          variant="elevation"
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#67696a", marginLeft: "50px"}}
          >
            Ecg Recording
          </Typography>
          <Canvas drawWave={drawWave} />
        </Card>
      </Box>
    </Box>
  );
}
