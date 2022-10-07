import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuizz, EditQuizz } from "../store/actions";

const QuizzForm = () => {
  const dispatch = useDispatch();
  const _addQuizz = (quizz) => dispatch(addQuizz(quizz));
  const _editQuizz = (quizzes, quizz) => dispatch(EditQuizz(quizzes, quizz));
  const navigate = useNavigate();
  const _quizzes = useSelector((state) => {
    return state.reducer.quizzes;
  });
  const params = useParams();

  const [title, setTitle] = React.useState("");
  const [description, setDesciption] = React.useState("");
  const [score, setScore] = React.useState("");
  const [url, setURL] = React.useState("");

  React.useEffect(() => {
    if (params.id) {
      const _quizz = _quizzes.filter((quizz) => {
        return quizz.key == params.id;
      })[0];
      setTitle(_quizz.title);
      setDesciption(_quizz.description);
      setScore(_quizz.score);
      setURL(_quizz.url);
    } else {
      setTitle("");
      setDesciption("");
      setScore("");
      setURL("");
    }
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      const quizzes = _quizzes.filter((quizz) => quizz.key != params.id);
      const quizz = { key: +params.id, title, description, score, url };
      _editQuizz(quizzes, quizz);
    } else {
      const quizz = { title, description, score, url };
      _addQuizz(quizz);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <label htmlFor="title" style={{ fontSize: "1.2rem", width: "15%" }}>
          Title
        </label>
        <TextField
          placeholder="title..."
          sx={{ width: "70%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <label
          htmlFor="description"
          style={{ fontSize: "1.2rem", width: "15%" }}
        >
          Description
        </label>
        <TextField
          multiline
          minRows={3}
          placeholder="description..."
          sx={{ width: "70%" }}
          value={description}
          onChange={(e) => setDesciption(e.target.value)}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <label htmlFor="score" style={{ fontSize: "1.2rem", width: "15%" }}>
          Score
        </label>
        <TextField
          placeholder="score..."
          sx={{ width: "70%" }}
          value={score}
          onChange={(e) => setScore(e.target.value)}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <label htmlFor="url" style={{ fontSize: "1.2rem", width: "15%" }}>
          URL
        </label>
        <TextField
          placeholder="url..."
          sx={{ width: "70%" }}
          value={url}
          onChange={(e) => setURL(e.target.value)}
        ></TextField>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default QuizzForm;
