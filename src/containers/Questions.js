import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomizedAccordions from "./Accordion";

const Questions = () => {
  const [quizzTitle, setQuizzTitle] = React.useState("");
  const [quizzDescription, setQuizzDescription] = React.useState("");
  const [quizzScore, setQuizzScore] = React.useState("");
  const [quizzURL, setQuizzURL] = React.useState("");
  const params = useParams();
  const _quizzes = useSelector((state) => {
    return state.reducer.quizzes;
  });

  React.useEffect(() => {
    if (params.id) {
      const _quizz = _quizzes.filter((quizz) => {
        return quizz.key == params.id;
      })[0];
      setQuizzTitle(_quizz.title);
      setQuizzDescription(_quizz.description);
      setQuizzScore(_quizz.score);
      setQuizzURL(_quizz.url);
    }
  }, [params.id]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <Typography width="20%">Title: </Typography>
        <Typography>{quizzTitle}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <Typography width="20%">Description: </Typography>
        <Typography>{quizzDescription}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <Typography width="20%">Score: </Typography>
        <Typography>{quizzScore}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <Typography width="20%">URL: </Typography>
        <Typography>{quizzURL}</Typography>
      </Box>
      <hr />
      <CustomizedAccordions />
    </Container>
  );
};

export default Questions;
