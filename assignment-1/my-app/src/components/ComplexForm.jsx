"use client";
import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "@/validationSchema";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

export default function ComplexForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      alert("Form submitted successfully:\n" + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Real-Time Validation Form
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          fullWidth
          margin="normal"
          id="phone"
          name="phone"
          label="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!(formik.isValid && formik.dirty)}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
