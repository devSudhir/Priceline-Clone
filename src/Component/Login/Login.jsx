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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [verifiedUser, setVerifiedUser] = useState("");
  const handleOpen = () => {
    setOpenLoginModal(true);
  };
  const handleClose = () => {
    setOpenLoginModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    let users = JSON.parse(localStorage.getItem("userDetailsPriceline"));

    if (users === null) {
      users = [];
    }
    console.log(users);
    if (signinPage) {
      console.log("create");
      if (password !== cpassword) {
        alert("Please Enter Password Correctly!");
        return;
      }
      const payload = {
        firstName,
        lastName,
        email,
        password,
        cpassword
      };

      users.push(payload);
      localStorage.setItem("userDetailsPriceline", JSON.stringify(users));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setcPassword("");
    } else {
      console.log("signin");
      const payload = {
        email,
        password
      };

      console.log(payload);
      let found = false;
      for (let i = 0; i < users.length; i++) {
        if (
          users[i].email === payload.email &&
          users[i].password === payload.password
        ) {
          console.log("found");
          setVerifiedUser(users[i].firstName);
          found = true;
          break;
        }
      }
      if (found) {
        console.log("verified user");

        setOpenLoginModal(false);
      } else {
        console.log("Invalid credentials");
      }
      setEmail("");
      setPassword("");
    }
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
          <form className={style.inputForm} onSubmit={handleSubmit}>
            {signinPage ? (
              <>
                <TextField
                  label="Enter First Name"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            ) : (
              ""
            )}
            <TextField
              type="email"
              label="Email Address"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            {signinPage ? (
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                onChange={(e) => setcPassword(e.target.value)}
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
            <Button variant="contained" type="submit">
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
      <button type="button" onClick={handleOpen}>
        {verifiedUser ? `Hi,${verifiedUser}` : "SignIn"}
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
