import React, { useState } from "react";
import { TextField, Card, CardContent, Button } from "@mui/material";
import { CHECK } from "../../helpers/constants";
import "./index.css";

export const DefaultInput = ({ handleOpenModal }) => {
  const [inputValue, setInputvalue] = useState("");
  const handleChangeInput = (e) => {
    if (e.keyCode == 13) {
      handleOpenModal(inputValue);
    } else {
      setInputvalue(e.target.value);
    }
  };

  return (
    <Card className="input-style">
      <CardContent className="input-btn-card">
        <TextField
          style={{ color: "#31849F" }}
          onChange={(e) => handleChangeInput(e)}
          onKeyDown={(e) => handleChangeInput(e)}
          value={inputValue}
          id="standard-basic"
          label="Type here..."
          variant="standard"
        />
        <Button
          style={{ backgroundColor: "#31849F" }}
          onClick={() => handleOpenModal(inputValue)}
          variant="contained"
        >
          {CHECK}
        </Button>
      </CardContent>
    </Card>
  );
};
