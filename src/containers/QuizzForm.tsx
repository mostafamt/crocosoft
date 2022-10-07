import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuizzForm = () => {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDesciption] = React.useState<string>("");
  const [score, setScore] = React.useState<string>("");
  const [url, setURL] = React.useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log({ title, description, score, url });
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
