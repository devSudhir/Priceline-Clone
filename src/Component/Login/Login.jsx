import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import style from "./Login.module.css";
import { useState } from "react";
export const Login = () => {
  const [signinPage, setSigninPage] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpen = () => {
    setOpenLoginModal(true);
  };
  const handleClose = () => {
    setOpenLoginModal(false);
  };
  const body = (
    <Paper className={style.mainBox}>
      <Box className={style.leftContainer}>
        <Box className={style.leftContainerCloseButtonBox}>
          {signinPage ? (
            <Typography className={style.leftContainerTypeText}>
              Create Your Account
            </Typography>
          ) : (
            <Typography className={style.leftContainerTypeText}>
              Sign in
            </Typography>
          )}

          <Button onClick={handleClose}>Close</Button>
        </Box>
        {signinPage ? (
          <Typography className={style.margnBottom10px}>
            Unlock huge savings, travel perks, and more when you become a VIP
            member.
          </Typography>
        ) : (
          ""
        )}
        <Box className={style.authContainer}>
          <Button variant="contained" className={style.googleAuthContainer}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt="google"
              className={style.googleIconWidth}
            />
            <Typography className={style.authContainerTextPadding}>
              Sign in with Google
            </Typography>
          </Button>
          <Button variant="contained" className={style.facebookAuthContainer}>
            <FacebookIcon />
            <Typography className={style.authContainerTextPadding}>
              Sign in with Facebook
            </Typography>
          </Button>

          <Button variant="contained" className={style.appleAuthContainer}>
            <AppleIcon />
            <Typography className={style.authContainerTextPadding}>
              Sign in with Apple
            </Typography>
          </Button>
        </Box>
        <Box className={style.throughWhichTextContainer}>
          <hr className={style.hrline} />
          <Typography>
            {signinPage ? "or register with email" : "or sign in with email"}
          </Typography>
          <hr className={style.hrline} />
        </Box>
        <Box>
          <form className={style.inputForm}>
            {signinPage ? (
              <>
                <TextField label="Enter First Name" variant="outlined" />
                <TextField label="Last Name" variant="outlined" />
              </>
            ) : (
              ""
            )}
            <TextField type="email" label="Email Address" variant="outlined" />
            <TextField type="password" label="Password" variant="outlined" />
            {signinPage ? (
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
              />
            ) : (
              ""
            )}
            {signinPage ? (
              ""
            ) : (
              <Typography className={style.themeColor}>
                Forgot your password?
              </Typography>
            )}
            <Button variant="contained">
              {signinPage ? "Create Account" : "Sign in"}
            </Button>
          </form>
          <FormControlLabel
            control={<Checkbox checked={true} color="primary" />}
            label="Remember my email address"
          />
        </Box>
        <Box className={style.dontHaveAccount}>
          <Typography>Don't have an account?</Typography>

          <Typography
            className={style.switchState}
            onClick={() => setSigninPage(!signinPage)}
          >
            {signinPage ? "Sign in" : "Create Account"}
          </Typography>
        </Box>
      </Box>
      <Box>
        <img
          className={style.height100}
          src="https://www.priceline.com/global-web-components/public/images/SignIn.svg"
          alt=""
        />
      </Box>
    </Paper>
  );
  return (
    <Box>
      <button style={{color:"#1664a8",border:"none",background:"white",fontSize:"16px"}} type="button" onClick={handleOpen}>
        Sign In
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
