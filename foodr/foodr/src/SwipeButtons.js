import React from 'react';
import './SwipeButtons.css';
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {

  

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons;
