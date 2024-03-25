import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Form from "./components/Form/Form";

const containerStyle = {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
};

export default function App() {
  return (
    <Container sx={containerStyle}
    >
      <Box>
          <Form />
      </Box>
    </Container>
  );
}
