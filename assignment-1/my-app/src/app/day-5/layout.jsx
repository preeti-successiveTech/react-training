"use client";

import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "next/link";

const drawerWidth = 260;

const questions = [
  { label: "Ques-1", path: "/day-5/FetchApi" },
  { label: "Ques-2", path: "/day-5/FetchDataWithMsg" },
  { label: "Ques-3", path: "/day-5/FetchDataSpinner" },
  { label: "Ques-4", path: "/day-5/PaginatedData" },
  { label: "Ques-5", path: "/day-5/AxiosUserPage" },
  { label: "Ques-6", path: "/day-5/RetryAxiosHandle" },
  { label: "Ques-7", path: "/day-5/PostPage" },
  { label: "Ques-13", path: "/day-5/ModelPage" },
  { label: "Ques-14", path: "/day-5/Login" },
    { label: "Ques-15", path: "/day-5/UseLogger" },
      { label: "Ques-16", path: "/day-5/Users" },

];

export default function Day4Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Assignment 5 Navigation
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {questions.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} href={item.path}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
