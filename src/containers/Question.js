import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const Question = () => {
  const [choicesNumber, setChoicesNumber] = React.useState(2);
  const [maxChoices, setMaxChoices] = React.useState(false);

  const addChoiceHandler = () => {
    setChoicesNumber(choicesNumber + 1);
    if (choicesNumber + 1 >= 4) {
      setMaxChoices(true);
    }
  };

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Question 3</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <TextField
            multiline
            minRows={3}
            label="Question"
            placeholder="question..."
            sx={{ width: "100%" }}
            // onChange={(e) => setDesciption(e.target.value)}
          ></TextField>
        </Box>
        <Box>
          <Grid container spacing={2} my={2}>
            {Array(choicesNumber)
              .fill(true)
              .map((c, idx) => (
                <Grid item xs={6} key={idx + 1}>
                  <TextField
                    label={`Choice #${idx + 1}`}
                    placeholder="answer..."
                    sx={{ width: "100%" }}
                  ></TextField>
                </Grid>
              ))}
            {!maxChoices && (
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={addChoiceHandler}
                  sx={{ width: "100%", p: 1.9 }}
                >
                  Add New Choice
                </Button>
              </Grid>
            )}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" sx={{ my: 2 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
