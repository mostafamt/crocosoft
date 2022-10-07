import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { NavigateFunction, useNavigate } from "react-router-dom";

const QuizzesList = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const addNewQuizz = (): void => {
    navigate("/new-quizz");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button
        variant="outlined"
        color="success"
        sx={{ mb: 4 }}
        startIcon={<AddIcon />}
        onClick={addNewQuizz}
      >
        Add New Quizz
      </Button>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="outlined" sx={{ flexGrow: 1 }}>
          Quizz 1
        </Button>
        <Button variant="outlined" color="success">
          <EditIcon />
        </Button>
        <Button variant="outlined" color="error">
          <DeleteIcon />
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="outlined" sx={{ flexGrow: 1 }}>
          Quizz 2
        </Button>
        <Button variant="outlined" color="success">
          <EditIcon />
        </Button>
        <Button variant="outlined" color="error">
          <DeleteIcon />
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="outlined" sx={{ flexGrow: 1 }}>
          Quizz 3
        </Button>
        <Button variant="outlined" color="success">
          <EditIcon />
        </Button>
        <Button variant="outlined" color="error">
          <DeleteIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default QuizzesList;
