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
        <Paper>
          <MapIcon />
          <Typography>Looking for your trip details?</Typography>
          <Typography>
            Quickly find your flight, hotel, package or rental car reservation
          </Typography>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Find your Trip
          </Button>
        </Paper>
      </Box>

      {/* new section */}

      <Box>
        <Typography>Your Recent Searches</Typography>
        <Paper>
          <DomainIcon />
          <Box>
            <Typography>Pune,In</Typography>
            <Typography>Wed, Aug 25 - Thu, Aug 26</Typography>
          </Box>
          <Link to="/Hotel">Search again</Link>
        </Paper>
        <Paper>
          <DomainIcon />
          <Box>
            <Typography>Mumbai,In</Typography>
            <Typography>Wed, Aug 25 - Thu, Aug 26</Typography>
          </Box>
          <Link to="/Hotel">Search again</Link>
        </Paper>
      </Box>

      {/* new section */}

      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        badgeContent="NEW"
      >
        <Paper>
          <Typography>Introducing Pricebreakers</Typography>
          <Button onClick={handleOpenSearchModal}>Search Pricebreakers</Button>
          <Modal
            open={searchModalPopup}
            onClose={handleCloseSearchModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <CommonSearchBox />
          </Modal>
          <Box>
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

      {/* new section */}

      <Box>
        <Paper>
          <Box>
            <Typography>END OF SUMMER SALE</Typography>

            <Typography>Save up to $50 on sitewide Express Deals.</Typography>
            <Typography>Travel anytime.</Typography>
          </Box>
          <img
            src="https://images.ctfassets.net/sdx4pteldsvw/5NorD2qReoA0wA3ZkuBQcs/7ab0781f770a23bef75e8ce36c4e6869/Right_promo_box.jpg?w=330&h=448&f=center&fit=fill"
            alt=""
          />
        </Paper>
      </Box>

      {/* new section */}

      <Box>
        <Paper>
          <Box>
            <VerifiedUserIcon />
            <Typography>FLEXIBLE BOOKINGS</Typography>
            <Typography>
              Plans change. That’s why we offer free cancellation on most hotels
              & rental cars.
            </Typography>
          </Box>
          <Box>
            <MonetizationOnIcon />
            <Typography>INCREDIBLE DEALS</Typography>
            <Typography>
              Check out with confidence. Priceline members always get our best
              price.
            </Typography>
          </Box>
          <Box>
            <DirectionsCarIcon />
            <Typography>NO FLIGHT? NO PROBLEM</Typography>
            <Typography>
              Bundle hotel & rental car deals to build your perfect getaway. No
              airtime required.
            </Typography>
          </Box>
          <Box>
            <ContactSupportIcon />
            <Typography>HELP 24/7</Typography>
            <Typography>
              We’re always here for you – reach us 24 hours a day, 7 days a
              week.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* new section */}
      <Box>
        <Paper>
          <Box>
            <Typography>SIGN UP & SAVE!</Typography>
            <Typography>Save 10% On Your Next Trip!</Typography>
            <Typography>
              Unlock exclusive coupons, early access to sales and more when you
              sign up for Priceline emails.
            </Typography>

            <Button variant="contained" color="primary">
              Sign up
            </Button>
          </Box>
          <img
            src="https://images.ctfassets.net/sdx4pteldsvw/3MCmiZ7pAMjXK5eJcaGVx4/84c6956ee935728b5c7ffde820b8e42b/marketing-tout.jpeg?h=600&q=70"
            alt=""
          />
        </Paper>
      </Box>
      {/* new section */}

      <Box>
        <Paper>
          <Box>
            <Typography>SAVINGS ON THE GO</Typography>
            <Typography>
              Exclusive Tonight Only Deals. Only in the App.
            </Typography>
            <Typography>
              Discover hotel, flight and rental car deals exclusively in the
              app. Download today to stay connected with important trip details
              — anytime, anywhere.
            </Typography>
            <Box>
              <Box>
                <SmartphoneIcon />
                <TextField label="Enter your phone number" variant="outlined" />
              </Box>
              <Button variant="contained" color="primary">
                Send Link
              </Button>
            </Box>
          </Box>
          <img
            src="https://s1.pclncdn.com/design-assets/brand-assets/Priceline-App-devices.jpg"
            alt=""
          />
        </Paper>
      </Box>

      {/* new section */}
      <Box>
        <Paper>
          <Box>
            <Typography>Sign up for Exclusive Email-only Coupons</Typography>
            <Typography>
              Exclusive access to coupons, special offers and promotions.
            </Typography>
          </Box>
          <TextField label="example@address.com" variant="outlined" />
          <Button variant="outlined" color="primary">
            Send me deals
          </Button>
        </Paper>
      </Box>

      {/* new section */}

      <Box>
        <Typography variant="h6" style={{ fontWeight: "400" }}>
          Discover deals in every city
        </Typography>

        <Box>
          <PopularCities />
        </Box>
      </Box>

      {/* new section */}

      <Box>
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px"
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

            <Button variant="contained" color="primary">
              More Info
            </Button>
          </Box>
          <Box>
            <img
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
      </Box>
      {/* end of home box */}
    </Box>
  );
};
