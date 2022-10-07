import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Alert, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveQuizz } from "../store/actions";

const QuizzesList = () => {
  const dispatch = useDispatch();
  const _quizzes = useSelector((state) => {
    return state.reducer.quizzes;
  });
  const _removeQuizz = (quizzes) => dispatch(RemoveQuizz(quizzes));

  const [quizzes, setQuizzes] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    setQuizzes(_quizzes);
  }, [_quizzes]);

  const addNewQuizz = () => {
    navigate("/new-quizz");
  };

  const editQuizzHandler = (e, key) => {
    navigate(`/quizz/${key}`);
  };

  const deleteQuizzHandler = (e, key) => {
    const newQuizzes = quizzes.filter((q) => q.key !== key);
    _removeQuizz(newQuizzes);
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
      {quizzes.length ? (
        quizzes.map((quizz) => (
          <Box key={quizz.key} sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Button
              variant="outlined"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate(`/quizz/${quizz.key}/questions`)}
            >
              {quizz.title}
            </Button>
            <Button variant="outlined" color="success">
              <PlayArrowIcon />
            </Button>
            <Button
              variant="outlined"
              color="info"
              onClick={(e) => editQuizzHandler(e, quizz.key)}
            >
              <EditIcon />
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={(e) => deleteQuizzHandler(e, quizz.key)}
            >
              <DeleteIcon />
            </Button>
          </Box>
        ))
      ) : (
        <Alert severity="info">There are no quizzes have created yet!</Alert>
      )}
    </Container>
  );
};

export default QuizzesList;
