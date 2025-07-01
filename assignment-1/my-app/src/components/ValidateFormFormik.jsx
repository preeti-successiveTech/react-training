"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/validationSchema";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
  List,
  ListItem,
} from "@mui/material";

export default function ValidatedFormFormik() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    criteriaMode: "all", // get all errors per field (not just first)
  });

  const [submitErrors, setSubmitErrors] = useState([]);

  const onSubmit = (data) => {
    // Clear previous errors
    setSubmitErrors([]);

    // Do something with valid data
    alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
    reset();
  };

  const onInvalid = () => {
    // Gather all error messages in a list for summary display
    const allErrors = Object.values(errors).flatMap((error) =>
      error.types ? Object.values(error.types) : [error.message]
    );
    setSubmitErrors(allErrors);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        sx={{ mt: 4 }}
        noValidate
      >
        <Typography variant="h5" gutterBottom>
          Validated Form with Error Summary
        </Typography>

        {submitErrors.length > 0 && (
          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              Please fix the following errors:
            </Typography>
            <List dense>
              {submitErrors.map((err, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  - {err}
                </ListItem>
              ))}
            </List>
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
