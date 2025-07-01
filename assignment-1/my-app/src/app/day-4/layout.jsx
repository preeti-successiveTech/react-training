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

const drawerWidth = 240;

const questions = [
  { label: "Ques-1", path: "/day-4/ControlledComponent" },
  { label: "Ques-2", path: "/day-4/ControlledForm" },
  { label: "Ques-3", path: "/day-4/ShowMessage" },
  { label: "Ques-4", path: "/day-4/RegistrationForm" },
  { label: "Ques-5", path: "/day-4/DropDownMenu" },
  { label: "Ques-6", path: "/day-4/TodoList" },
  { label: "Ques-7", path: "/day-4/SearchFilter" },
  { label: "Ques-8", path: "/day-4/TemperatureConvertor" },
  { label: "Ques-9", path: "/day-4/LayoutPage" },
  { label: "Ques-10", path: "/day-4/ValidateForm" },
  { label: "Ques-11", path: "/day-4/InfoDialog" },
  { label: "Ques-12", path: "/day-4/DataTable" },
  { label: "Ques-13", path: "/day-4/FormPage" },
  { label: "Ques-14", path: "/day-4/ValidateFormik" },
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
            Assignment 4 Navigation
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
