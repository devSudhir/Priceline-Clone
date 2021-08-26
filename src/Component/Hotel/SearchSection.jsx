import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import style from "./SearchSection.module.css";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import MapIcon from "@material-ui/icons/Map";
import DomainIcon from "@material-ui/icons/Domain";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PopularCities } from "./PopularCities";
import { CommonSearchBox } from "../CommonSearchBox";
export const SearchSection = () => {
  const [checkedCar, setCheckedCar] = useState(false);
  const [checkedFlight, setCheckedFlight] = useState(false);
  console.log(checkedCar, checkedFlight);

  const [searchModalPopup, setSearchModalPopup] = useState(false);
  const handleOpenSearchModal = () => {
    setSearchModalPopup(true);
  };
  const handleCloseSearchModal = () => {
    setSearchModalPopup(false);
  };
  const handleCheckedFlight = (event) => {
    setCheckedFlight(event.target.checked);
  };

  const handleCheckedCar = (event) => {
    setCheckedCar(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box>
      <Box className={style.relativePositioningBox}>
        <img
          className={style.backGroundImage}
          src="https://images.ctfassets.net/sdx4pteldsvw/60AIXAaPwFRDyxA27uAoi1/c6ce110af174ceec011857133664ca60/pcln-hp-hero-freedom.jpeg"
          alt="back_image"
        />
      </Box>

      {/* new section */}
      <Box
        className={style.absolutePositioningBox}
        style={{ top: "5%", left: "8%" }}
      >
        <Paper elevation={3}>
          <Typography variant="h4">Need a hotel or private rental?</Typography>
          <Typography variant="h5">
            Book a room with free cancellation for more flexibility
          </Typography>
          <hr />
          <ButtonGroup>
            <Button className={style.buttonBorderNone}>HOTELS</Button>
            <Button className={style.buttonBorderNone}>FLIGHTS</Button>
            <Button className={style.buttonBorderNone}>BUNDLE + SAVE</Button>
            <Button className={style.buttonBorderNone}>CARS</Button>
            <Button className={style.buttonBorderNone}>CRUISES</Button>
          </ButtonGroup>
        </Paper>
        <CommonSearchBox />
        <Paper>
          <Box>
            <Typography>
              <MonetizationOnIcon />
              Bundle + Save
            </Typography>
            <FormControlLabel
              control={<Checkbox onChange={handleCheckedCar} color="primary" />}
              label="Add a car"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleCheckedFlight} color="primary" />
              }
              label="Add a flight"
            />
          </Box>
          <Typography>
            Book a hotel with free cancellation for flexibility
          </Typography>
        </Paper>

        <Paper>
          <Link to="/trip">
            Planning a getaway? Save on nearby escapes
            <ChevronRightIcon />
          </Link>
        </Paper>
      </Box>

      {/* new section */}

      <Box className={style.relativePositioningBox}>
        <Paper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            textAlign: "center"
          }}
        >
          <MapIcon style={{ color: "#0068EF", backgroundColor: "#E8F2FF" }} />
          <Box>
            <Typography style={{ color: "#0068EF" }}>
              Looking for your trip details?
            </Typography>
            <Typography>
              Quickly find your flight, hotel, package or rental car reservation
            </Typography>
          </Box>

          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#0068EF", textTransform: "none" }}
          >
            Find your Trip
          </Button>
        </Paper>
      </Box>

      {/* new section */}
      <Typography style={{ textAlign: "left" }}>
        Your Recent Searches
      </Typography>
      <Box style={{ display: "flex" }}>
        <Paper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center"
          }}
        >
          <DomainIcon />
          <Box>
            <Typography>Pune,In</Typography>
            <Typography>Wed, Aug 25 - Thu, Aug 26</Typography>
          </Box>
          <Link to="/Hotel">Search again</Link>
        </Paper>
        <Paper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center"
          }}
        >
          <DomainIcon />
          <Box>
            <Typography>Mumbai,In</Typography>
            <Typography>Wed, Aug 25 - Thu, Aug 26</Typography>
          </Box>
          <Link to="/Hotel">Search again</Link>
        </Paper>
      </Box>

      {/* new section */}

      <Box style={{ display: "flex", padding: "30px", maxWidth: "100vw" }}>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          badgeContent="NEW"
          style={{ backgroundColor: "red", width: "60%" }}
        >
          <Paper style={{}}>
            <Box
              style={{
                display: "flex",
                padding: "15px",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box
                style={{
                  display: "flex"
                }}
              >
                <Typography variant="h4" style={{ marginRight: "10px" }}>
                  Introducing{" "}
                </Typography>
                <Typography variant="h4" style={{ color: "#0068EF" }}>
                  Pricebreakers
                </Typography>
              </Box>

              <Button
                onClick={handleOpenSearchModal}
                style={{
                  backgroundColor: "#EDF0F3",
                  color: "#0068EF",
                  padding: "10px 15px"
                }}
              >
                Search Pricebreakers
              </Button>
              <Modal
                open={searchModalPopup}
                onClose={handleCloseSearchModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <CommonSearchBox />
              </Modal>
            </Box>

            <Box style={{ display: "flex", padding: "15px", width: "90%" }}>
              <Box>
                <img
                  src="https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/One-635a492d0b64f53be39e1cab9c120f89.svg"
                  alt=""
                />
                <Typography>
                  See 3 popular hotels at a heavily discounted price.
                </Typography>
              </Box>
              <Box>
                <img
                  src="https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/Two-43f2bfbd4854c2d779530dca660b1708.svg"
                  alt=""
                />
                <Typography>
                  Click choose and we’ll pick one of the 3 hotels.
                </Typography>
              </Box>
              <Box>
                <img
                  src="https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/Three-a112201b65eb30d1dfecbdd118ebcc92.svg"
                  alt=""
                />
                <Typography>See which hotel right after you book!</Typography>
              </Box>
            </Box>
          </Paper>
        </Badge>
        <Paper
          style={{
            display: "flex",
            padding: "15px",
            alignItems: "center",
            justifyContent: "space-between",
            width: "60%"
          }}
        >
          <Box>
            <Typography variant="h4" style={{ color: "#0068EF" }}>
              END OF SUMMER SALE
            </Typography>

            <Typography>Save up to $50 on sitewide Express Deals.</Typography>
            <Typography>Travel anytime.</Typography>
          </Box>
          <img
            style={{ width: "50%" }}
            src="https://images.ctfassets.net/sdx4pteldsvw/5NorD2qReoA0wA3ZkuBQcs/7ab0781f770a23bef75e8ce36c4e6869/Right_promo_box.jpg?w=330&h=448&f=center&fit=fill"
            alt=""
          />
        </Paper>
      </Box>

      {/* new section */}

      <Box style={{ padding: "15px", backgroundColor: "#F4F6F8" }}>
        <Paper
          style={{
            display: "flex",
            backgroundColor: "#F4F6F8",
            padding: "30px auto"
          }}
        >
          <Box>
            <VerifiedUserIcon style={{ color: "#0068EF" }} />
            <Typography style={{ fontSize: "1rem", fontWeight: "600" }}>
              FLEXIBLE BOOKINGS
            </Typography>
            <Typography variant="button">
              Plans change. That’s why we offer free cancellation on most hotels
              & rental cars.
            </Typography>
          </Box>
          <Box>
            <MonetizationOnIcon style={{ color: "#0068EF" }} />
            <Typography style={{ fontSize: "1rem", fontWeight: "600" }}>
              INCREDIBLE DEALS
            </Typography>
            <Typography variant="button">
              Check out with confidence. Priceline members always get our best
              price.
            </Typography>
          </Box>
          <Box>
            <DirectionsCarIcon style={{ color: "#0068EF" }} />
            <Typography style={{ fontSize: "1rem", fontWeight: "600" }}>
              NO FLIGHT? NO PROBLEM
            </Typography>
            <Typography variant="button">
              Bundle hotel & rental car deals to build your perfect getaway. No
              airtime required.
            </Typography>
          </Box>
          <Box>
            <ContactSupportIcon style={{ color: "#0068EF" }} />
            <Typography style={{ fontSize: "1rem", fontWeight: "600" }}>
              HELP 24/7
            </Typography>
            <Typography variant="button">
              We’re always here for you – reach us 24 hours a day, 7 days a
              week.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* new section */}
      <Box style={{ textAlign: "left" }}>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px",
            backgroundColor: "#F4F6F8"
          }}
        >
          <Box style={{ width: "50%" }}>
            <Typography
              variant="button"
              display="block"
              style={{ color: "#4f6f9D", marginBottom: "10px" }}
            >
              SIGN UP & SAVE!
            </Typography>
            <Typography
              variant="h4"
              display="block"
              style={{ fontWeight: "500", marginBottom: "30px" }}
            >
              Save 10% On Your Next Trip!
            </Typography>
            <Typography style={{ fontSize: "1.4rem", color: "#4f6f9D" }}>
              Unlock exclusive coupons, early access to sales and more when you
              sign up for Priceline emails.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#0068EF" }}
            >
              Sign up
            </Button>
          </Box>
          <img
            style={{ width: "40%" }}
            src="https://images.ctfassets.net/sdx4pteldsvw/3MCmiZ7pAMjXK5eJcaGVx4/84c6956ee935728b5c7ffde820b8e42b/marketing-tout.jpeg?h=600&q=70"
            alt=""
          />
        </Paper>
      </Box>
      {/* new section */}

      <Box>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#F4F6F8"
          }}
        >
          <Box style={{ textAlign: "left" }}>
            <Typography
              variant="button"
              display="block"
              style={{ color: "#4f6f9D", marginBottom: "10px" }}
            >
              SAVINGS ON THE GO
            </Typography>
            <Typography
              variant="h4"
              display="block"
              style={{ fontWeight: "500", marginBottom: "30px" }}
            >
              Exclusive Tonight Only Deals. Only in the App.
            </Typography>
            <Typography style={{ fontSize: "1.4rem", color: "#4f6f9D" }}>
              Discover hotel, flight and rental car deals exclusively in the
              app. Download today to stay connected with important trip details
              — anytime, anywhere.
            </Typography>
            <Box>
              <Box
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center"
                }}
              >
                <SmartphoneIcon />
                <TextField
                  style={{ border: "none" }}
                  label="Enter your phone number"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#0068EF",
                    padding: "10px 40px",
                    marginLeft: "10px"
                  }}
                >
                  Send Link
                </Button>
              </Box>
            </Box>
          </Box>
          <img
            style={{ width: "30%" }}
            src="https://s1.pclncdn.com/design-assets/brand-assets/Priceline-App-devices.jpg"
            alt=""
          />
        </Paper>
      </Box>

      {/* new section */}
      <Box style={{ width: "100vw", padding: "15px", margin: "auto" }}>
        <Paper
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            textAlign: "center"
          }}
        >
          <Box style={{ marginRight: "20px", padding: "20px" }}>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Sign up for Exclusive Email-only Coupons
            </Typography>
            <Typography style={{ fontWeight: "500" }}>
              Exclusive access to coupons, special offers and promotions.
            </Typography>
          </Box>
          <Box>
            <TextField
              style={{ marginRight: "10px" }}
              label="example@address.com"
              variant="outlined"
            />
            <Button
              variant="outlined"
              color="primary"
              style={{
                padding: "13px",
                color: "#0068EF",
                border: " 2px solid #0068EF"
              }}
            >
              Send me deals
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* new section */}

      <Box>
        <Typography
          variant="h6"
          style={{ fontWeight: "400", textAlign: "left" }}
        >
          Discover deals in every city
        </Typography>

        <Box>
          <PopularCities />
        </Box>
      </Box>

      {/* new section */}

      <Box style={{ padding: "30px", margin: "20px auto" }}>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#F4F6F8"
          }}
        >
          <Box style={{ textAlign: "left" }}>
            <Typography
              variant="button"
              display="block"
              style={{ color: "#4f6f9D", marginBottom: "10px" }}
            >
              A VACATION YOU'LL REMEMBER FOREVER
            </Typography>
            <Typography
              variant="h4"
              display="block"
              style={{ fontWeight: "500", marginBottom: "30px" }}
            >
              Walt Disney World Vacations
            </Typography>
            <Typography style={{ fontSize: "1.4rem", color: "#4f6f9D" }}>
              Book your Walt Disney World tickets here! Plus, complete your
              vacation and book your hotel.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#0068EF",
                padding: "10px 20px",
                marginTop: "20px"
              }}
            >
              More Info
            </Button>
          </Box>
          <Box>
            <img
              style={{ width: "80%" }}
              src="https://images.ctfassets.net/sdx4pteldsvw/4l4ZVmeFp6ivXQH6MuZXHI/45ea23e34bb96b16bb35331d3bf6b23d/StarWarsGalaxyEdge.jpg?h=600&q=70"
              alt=""
            />
          </Box>
        </Paper>
      </Box>

      {/* new section */}

      <Box>
        <Typography variant="h5" style={{ fontWeight: "500" }}>
          Maximize your savings with applying for the Priceline Rewards™ Visa®
          Card!
        </Typography>
        <ul>
          <Typography
            variant="h6"
            style={{ fontWeight: "400", color: "#4f6f9D" }}
          >
            <li>
              Looking to fast-track your VIP status? Automatically become VIP
              Gold once approved.
            </li>
          </Typography>

          <Typography
            variant="h6"
            style={{ fontWeight: "400", color: "#4f6f9D" }}
          >
            <li>
              Earn 5X Points on eligible hotel, flight, package, rental car and
              cruise purchases using your card.*
            </li>
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "400", color: "#4f6f9D" }}
          >
            <li>Plus, get special cardmember coupons, discounts & perks!</li>
          </Typography>
        </ul>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#0068EF",
            padding: "10px 40px",
            marginBottom: "30px"
          }}
        >
          Learn More
        </Button>
        <Box>
          <img
            src="https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/card-46f5bcb5ad798f1803a957189347cd33.jpg"
            alt=""
          />
        </Box>
        <Typography>
          *See <Link to="/terms">Terms and Conditions</Link> for details.
        </Typography>
      </Box>
      {/* end of home box */}
    </Box>
  );
};
