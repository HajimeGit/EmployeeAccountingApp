import Box from "@mui/material/Box";
import { Button, Stack, TextField, Theme, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// type FormProps = {
//   addEmployee: (employee: Employee) => void;
// };

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "350px",
  borderRadius: ".25rem",
}));

const BoxStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: theme.palette.primary.light,
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "0.5rem",
  backgroundColor: theme.palette.primary.main,
});

const ButtonStyle = {
  color: "#fff",
  borderColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#3d5a80",
    borderColor: "#3d5a80",
  },
};

const Form = () => {
  return (
    <Box sx={BoxStyle}>
      <Typography
        sx={(theme) => ({
          fontSize: "1.75rem",
          fontWeight: "bold",
          color: theme.palette.primary.light,
        })}
        variant={"h3"}
      >
        Add a new employee
      </Typography>
      <form>
        <Stack direction="row" spacing={2}>
          <StyledTextField
            hiddenLabel
            placeholder="What's the employee's name?"
            id="employee-name"
            variant="outlined"
            size="small"
          />
          <StyledTextField
            hiddenLabel
            placeholder="Salary in $"
            id="employee-salary"
            variant="outlined"
            size="small"
          />
          <Button sx={ButtonStyle} variant="outlined">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
