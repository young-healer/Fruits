import React from "react";
import { Card, CardContent } from "@mui/material";
import "./index.css";

export const Fruit = ({ fruit, handleOpenInput }) => {
  const { id, description } = fruit;

  return (
    <Card
      onClick={() => handleOpenInput(fruit)}
      key={id}
      className="card-styles"
    >
      <CardContent>
        <p className="card-text">{description}</p>
      </CardContent>
    </Card>
  );
};
