import React from "react";
import { Modal, Box, CircularProgress } from "@mui/material";
import {
  FAMILY,
  GENUS,
  NUTRITIONS,
  CALORIES,
  CARBOHYDRATES,
  FAT,
  PROTEIN,
  SUGAR,
} from "../../helpers/constants";

export const DefaultModal = ({
  guessed,
  fruit,
  open,
  handleClose,
  setIsImageLoading,
  isImageLoading,
}) => {
  const { name, family, genus, nutritions } = fruit;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      outline={1}
    >
      <Box sx={style}>
        <span className="close-icon" onClick={handleClose}>
          {"\u2715"}
        </span>
        <h1>
          {guessed} {name}
        </h1>
        <div className="modal-container">
          <div className="image-wrapper">
            {isImageLoading && (
              <CircularProgress style={{ position: "absolute" }} />
            )}
            <img
              style={{ width: "30vh" }}
              src={`../../images/${name?.toLowerCase()}.png`}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
          <div className="text-wrapper">
            <div>
              <span className="bold-text">{FAMILY}:</span> {family}
            </div>
            <div>
              <span className="bold-text">{GENUS}:</span> {genus}
            </div>
            <div>
              <h3>{NUTRITIONS}:</h3>
              <div>
                <span className="bold-text">{CALORIES}:</span>
                {nutritions?.calories}
              </div>
              <div>
                <span className="bold-text">{CARBOHYDRATES}:</span>
                {nutritions?.carbohydrates}
              </div>
              <div>
                <span className="bold-text">{FAT}:</span> {nutritions?.fat}
              </div>
              <div>
                <span className="bold-text">{PROTEIN}:</span>
                {nutritions?.protein}
              </div>
              <div className="padding-bottom">
                <span className="bold-text">{SUGAR}:</span>
                {nutritions?.sugar}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
