import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import style from "./Hotel/SearchSection.module.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
export const AllSearch = () => {
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);
  const [openFormModal, setOpenFormModal] = useState(false);

  const handleCloseModal = () => {
    setOpenFormModal(false);
  };

  const handleOpenModal = () => {
    setOpenFormModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Paper style={{ width: "100%",background:"#f4f6f8"}}>
      <form style={{margin:"auto" ,width:"75vw"}}>
        

        <Box
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <TextField
            label="Check-in"
            type="date"
            defaultValue={new Date()}
            className={style.date}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Check-out"
            type="date"
            defaultValue={new Date()}
            className={style.date}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            onClick={handleOpenModal}
            style={{ border: "1px solid #333" }}
          >
            {" "}
            {adults > 1
              ? `${adults} Adults`
              : adults === 1
              ? `, ${adults} Adult`
              : ""}
            {children > 1
              ? `, ${children} Children`
              : children === 1
              ? `, ${children} Child`
              : ""}
            {rooms > 1
              ? `, ${rooms} Rooms`
              : rooms === 1
              ? `, ${rooms} Room`
              : ""}
          </Button>
          <Modal
            open={openFormModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box>
              <Paper>
                <Typography>Rooms</Typography>
                <Button onClick={() => setRooms((prev) => prev - 1)}>-</Button>
                {rooms}
                <Button onClick={() => setRooms((prev) => prev + 1)}>+</Button>
              </Paper>
              <Paper>
                <Typography>Adults</Typography>
                <Button onClick={() => setAdults((prev) => prev - 1)}>-</Button>
                {adults}
                <Button onClick={() => setAdults((prev) => prev + 1)}>+</Button>
              </Paper>
              <Paper>
                <Typography>Children</Typography>
                <Button onClick={() => setChildren((prev) => prev - 1)}>
                  -
                </Button>
                {children}
                <Button onClick={() => setChildren((prev) => prev + 1)}>
                  +
                </Button>
              </Paper>
              <Paper>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  color="primary"
                >
                  Done
                </Button>
              </Paper>
            </Box>
          </Modal>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#0068EF", padding: "10px 30px" }}
          >
           <Link to="/Hotels" style={{color:"white",textDecoration:"none"}}>FIND YOUR HOTEL</Link>
          </Button>
        </Box>
      </form>
    </Paper>
  );
};
