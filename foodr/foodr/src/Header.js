import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ForumIcon from '@mui/icons-material/Forum';
// import { useHistory } from 'react-router-dom';

function Header() {
  // const history = useHistory();

  // const moveToRecipes = () => {
  //   history.push("/Recipes")
  // }

  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
      </IconButton>
      <LocalDiningIcon className="logo"/>
      <IconButton 
      // onClick={moveToRecipes()}
      >
        <ForumIcon fontSize="large" className="header_icon"/>
      </IconButton>
    </div>
  )

}

export default Header;
