import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { URL } from "../../helpers/constants";
import { DefaultModal } from "../DefaultModal";
import { DefaultInput } from "../DefaultInput";
import { Fruit } from "../Fruit";
import {
  descriptions,
  YES,
  NO,
  GUESSTHEFRUIT,
  RULES,
} from "../../helpers/constants";
import "./index.css";

export const FruitContaner = () => {
  const [fruits, setFruits] = useState([]);
  const [fruit, setFruit] = useState([]);
  const [open, setOpen] = useState(false);
  const [isClickedCard, setIsClickedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [guessed, setGuessed] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsImageLoading(true);
  };

  useEffect(() => {
    const fetchFruits = async () => {
      const response = await axios.get(URL);
      response.data.map((fruit) => {
        return (fruit.description = descriptions[fruit.name.toLowerCase()]);
      });
      setFruits(response.data);
      setIsLoading(false);
    };

    fetchFruits();
  }, []);

  const handleOpenModal = (inputValue) => {
    checkGuessed(inputValue);
    handleOpen();
  };

  const handleOpenInput = (fruit) => {
    setFruit(fruit);
    setIsClickedCard(fruit.id);
  };

  const checkGuessed = (inputValue) => {
    if (inputValue.toLowerCase() == fruit.name.toLowerCase()) {
      setGuessed(YES);
    } else {
      setGuessed(NO);
    }
  };

  return (
    <>
      <h1>{GUESSTHEFRUIT}</h1>
      <h2>{RULES}</h2>
      <div className="main">
        {isLoading ? (
          <CircularProgress />
        ) : (
          fruits &&
          fruits.map((fruit) => {
            return isClickedCard == fruit.id ? (
              <DefaultInput
                key={fruit.id}
                fruit={fruit}
                handleOpenModal={handleOpenModal}
              />
            ) : (
              <Fruit
                key={fruit.id}
                fruit={fruit}
                handleOpenInput={handleOpenInput}
              />
            );
          })
        )}
        <DefaultModal
          isImageLoading={isImageLoading}
          setIsImageLoading={setIsImageLoading}
          guessed={guessed}
          fruit={fruit}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </>
  );
};
