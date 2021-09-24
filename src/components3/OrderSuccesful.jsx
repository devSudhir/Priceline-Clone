import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import style from "../Component/Login/Login.module.css";
import { useState } from "react";
import {useHistory } from "react-router-dom";
export const Ordersucessfuly = () => {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpen = () => {
    setOpenLoginModal(true);
  };
  const handleClose = () => {
    setOpenLoginModal(false);
    history.push("/")
  };
  const history = useHistory();
  const body = (
    <Paper  className={style.mainBox} style={{backgroundImage:`URL("https://cdn.dribbble.com/users/13543/screenshots/1523277/success.gif")`,height:"600px"}}>
      <Box className={style.leftContainer}>
        <Box className={style.leftContainerCloseButtonBox}>
                  <Button onClick={handleClose}> Close </Button>
              </Box>
              <div >
          
               <h1>Your Bookin</h1>
        </div>
     
        </Box>
       
        
      
    </Paper>
  );
  return (
    <Box>
      <button style={{color:"white",border:"none",background:"#00aa00",fontSize:"16px"}} type="button" onClick={handleOpen}>
        Continue Booking
      </button>
      <Modal
        open={openLoginModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={style.modalStyle}
      >
        {body}
      </Modal>
    </Box>
  );
};
