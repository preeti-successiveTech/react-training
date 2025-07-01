import React from "react";
import { Container, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";

function App() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Data Table
      </Typography>
      <DataTable />
    </Container>
  );
}

export default App;
