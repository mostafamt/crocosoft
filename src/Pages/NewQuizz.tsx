import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import QuizzForm from "../containers/QuizzForm";

const NewQuizz = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
        Create New Quizz
      </Typography>
      <hr style={{ marginBottom: "3rem" }} />
      <QuizzForm />
    </Container>
  );
};

export default NewQuizz;
