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
    <Box className={style.homeBox}>
      <Box className={style.relativePositioningBox}>
        <img
          className={style.backGroundImage}
          src="https://images.ctfassets.net/sdx4pteldsvw/60AIXAaPwFRDyxA27uAoi1/c6ce110af174ceec011857133664ca60/pcln-hp-hero-freedom.jpeg"
          alt="back_image"
        />
      </Box>

      {/* new section */}
      <Box className={style.absolutePositioningBox}>
        <Paper elevation={3} className={style.homeBannerSearchBox}>
          <Typography variant="h4" className={style.homeBannerSearchBoxHeading}>
            Need a hotel or private rental?
          </Typography>
          <Typography
            variant="h5"
            className={style.homeBannerSearchBoxSubHeading}
          >
            Book a room with free cancellation for more flexibility
          </Typography>
          <hr />
          <ButtonGroup className={style.homeBannerSearchBoxButtonGroup}>
            <Button className={style.buttonBorderNone}>HOTELS</Button>
            <Button className={style.buttonBorderNone}>FLIGHTS</Button>
            <Button className={style.buttonBorderNone}>BUNDLE + SAVE</Button>
            <Button className={style.buttonBorderNone}>CARS</Button>
            <Button className={style.buttonBorderNone}>CRUISES</Button>
          </ButtonGroup>
        </Paper>
        <CommonSearchBox />
        <Paper className={style.homeBannerSearchBoxBundleLayout}>
          <Box className={style.homeBannerSearchBoxBundleOffer}>
            <MonetizationOnIcon className={style.colorGreen} />
            <Typography className={style.colorGreen}>Bundle + Save</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCheckedCar}
                  color="primary"
                  size="small"
                />
              }
              label="Add a car"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCheckedFlight}
                  color="primary"
                  size="small"
                />
              }
              label="Add a flight"
            />
          </Box>
          <Typography className={style.homeBannerSearchBoxSmallText}>
            Book a hotel with free cancellation for flexibility
          </Typography>
        </Paper>

        <Paper className={style.homeBannerSearchBoxLastSection}>
          <Link to="/trip" className={style.themeColor}>
            Planning a getaway? Save on nearby escapes
          </Link>
          <ChevronRightIcon className={style.themeColor} />
        </Paper>
      </Box>

      {/* new section */}

      <Box className={style.mapTripBox}>
        <Paper className={style.mapTripBoxFlexItem}>
          <MapIcon className={style.mapTripBoxMapIcon} />
          <Box>
            <Typography className={style.themeColor}>
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
      <Typography className={style.recentSearchesText}>
        Your Recent Searches
      </Typography>
      <Box className={style.recentSearchesBox}>
        <Paper className={style.recentSearchesBoxFlexItem}>
          <DomainIcon />
          <Box className={style.textAlignLeft}>
            <Typography className={style.recentSearchesBoxfontWeight500}>
              Pune,In
            </Typography>
            <Typography className={style.recentSearchesBoxfontSize}>
              Wed, Aug 25 - Thu, Aug 26
            </Typography>
          </Box>
          <Link to="/Hotel" className={style.recentSearchesBoxfontSize}>
            Search again
          </Link>
        </Paper>
        <Paper className={style.recentSearchesBoxFlexItem}>
          <DomainIcon />
          <Box className={style.textAlignLeft}>
            <Typography className={style.recentSearchesBoxfontWeight500}>
              Mumbai,In
            </Typography>
            <Typography className={style.recentSearchesBoxfontSize}>
              Wed, Aug 25 - Thu, Aug 26
            </Typography>
          </Box>
          <Link to="/Hotel" className={style.recentSearchesBoxfontSize}>
            Search again
          </Link>
        </Paper>
      </Box>

      {/* new section */}

      <Box className={style.priceBreakerBox}>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent="NEW"
          className={style.BadgeBox}
        >
          <Paper>
            <Box className={style.priceBreakerBoxHeading}>
              <Box className={style.displayFlex}>
                <Typography variant="h4" className={style.marginRight10px}>
                  Introducing{" "}
                </Typography>
                <Typography variant="h4" className={style.themeColor}>
                  Pricebreakers
                </Typography>
              </Box>

              <Button
                onClick={handleOpenSearchModal}
                style={{
                  backgroundColor: "#EDF0F3",
                  color: "#0068EF",
                  padding: "10px 15px",
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

            <Box className={style.priceBreakerSpecBox}>
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
        <Paper className={style.priceBreakerImageBox}>
          <Box className={style.textAlignLeft}>
            <Typography variant="h4" className={style.themeColor}>
              END OF SUMMER SALE
            </Typography>

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

      <Box className={style.supportBox}>
        <Paper className={style.supportBoxContainer}>
          <Box className={style.supportBoxContainerItems}>
            <VerifiedUserIcon className={style.themeColor} />
            <Typography className={style.supportBoxContainerText}>
              FLEXIBLE BOOKINGS
            </Typography>
            <Typography variant="button">
              Plans change. That’s why we offer free cancellation on most hotels
              & rental cars.
            </Typography>
          </Box>
          <Box className={style.supportBoxContainerItems}>
            <MonetizationOnIcon className={style.themeColor} />
            <Typography className={style.supportBoxContainer}>
              INCREDIBLE DEALS
            </Typography>
            <Typography variant="button">
              Check out with confidence. Priceline members always get our best
              price.
            </Typography>
          </Box>
          <Box className={style.supportBoxContainerItems}>
            <DirectionsCarIcon className={style.themeColor} />
            <Typography className={style.supportBoxContainerText}>
              NO FLIGHT? NO PROBLEM
            </Typography>
            <Typography variant="button">
              Bundle hotel & rental car deals to build your perfect getaway. No
              airtime required.
            </Typography>
          </Box>
          <Box className={style.supportBoxContainerItems}>
            <ContactSupportIcon className={style.themeColor} />
            <Typography className={style.supportBoxContainerText}>
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
      <Box className={style.textAlignLeft}>
        <Paper className={style.discountBox}>
          <Box className={style.discountTextBoxSize}>
            <Typography
              variant="button"
              display="block"
              className={style.discountBoxthemeHeading}
            >
              SIGN UP & SAVE!
            </Typography>
            <Typography
              variant="h4"
              display="block"
              className={style.discountBoxHeading}
            >
              Save 10% On Your Next Trip!
            </Typography>
            <Typography className={style.discountBoxSubHeading}>
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
            className={style.imageWidth40}
            src="https://images.ctfassets.net/sdx4pteldsvw/3MCmiZ7pAMjXK5eJcaGVx4/84c6956ee935728b5c7ffde820b8e42b/marketing-tout.jpeg?h=600&q=70"
            alt=""
          />
        </Paper>
      </Box>
      {/* new section */}

      <Box>
        <Paper className={style.discountBox}>
          <Box className={style.textAlignLeft}>
            <Typography
              variant="button"
              display="block"
              className={style.discountBoxthemeHeading}
            >
              SAVINGS ON THE GO
            </Typography>
            <Typography
              variant="h4"
              display="block"
              className={style.discountBoxHeading}
            >
              Exclusive Tonight Only Deals. Only in the App.
            </Typography>
            <Typography className={style.discountBoxSubHeading}>
              Discover hotel, flight and rental car deals exclusively in the
              app. Download today to stay connected with important trip details
              — anytime, anywhere.
            </Typography>
            <Box>
              <Box className={style.smartPhoneBox}>
                <SmartphoneIcon />
                <TextField
                  className={style.buttonBorderNone}
                  label="Enter your phone number"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#0068EF",
                    padding: "10px 40px",
                    marginLeft: "10px",
                  }}
                >
                  Send Link
                </Button>
              </Box>
            </Box>
          </Box>
          <img
            className={style.imageWidth30}
            src="https://s1.pclncdn.com/design-assets/brand-assets/Priceline-App-devices.jpg"
            alt=""
          />
        </Paper>
      </Box>

      {/* new section */}
      <Box className={style.sendmailBox}>
        <Paper className={style.mailPaper}>
          <Box className={style.mailTextBoxmarginPadding}>
            <Typography variant="h6" className={style.fontWeight600}>
              Sign up for Exclusive Email-only Coupons
            </Typography>
            <Typography className={style.fontWeight500}>
              Exclusive access to coupons, special offers and promotions.
            </Typography>
          </Box>
          <Box>
            <TextField
              className={style.marginRight10}
              label="example@address.com"
              variant="outlined"
            />
            <Button
              variant="outlined"
              color="primary"
              style={{
                padding: "13px",
                color: "#0068EF",
                border: " 2px solid #0068EF",
              }}
            >
              Send me deals
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* new section */}

      <Box>
        <Typography variant="h6" className={style.specialCitiesHeading}>
          Discover deals in every city
        </Typography>

        <Box>
          <PopularCities />
        </Box>
      </Box>

      {/* new section */}

      <Box className={style.vacationBox}>
        <Paper className={style.discountBox}>
          <Box className={style.textAlignLeft}>
            <Typography
              variant="button"
              display="block"
              className={style.discountBoxthemeHeading}
            >
              A VACATION YOU'LL REMEMBER FOREVER
            </Typography>
            <Typography
              variant="h4"
              display="block"
              className={style.discountBoxHeading}
            >
              Walt Disney World Vacations
            </Typography>
            <Typography className={style.discountBoxSubHeading}>
              Book your Walt Disney World tickets here! Plus, complete your
              vacation and book your hotel.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#0068EF",
                padding: "10px 20px",
                marginTop: "20px",
              }}
            >
              More Info
            </Button>
          </Box>
          <Box>
            <img
              className={style.imageWidth80}
              src="https://images.ctfassets.net/sdx4pteldsvw/4l4ZVmeFp6ivXQH6MuZXHI/45ea23e34bb96b16bb35331d3bf6b23d/StarWarsGalaxyEdge.jpg?h=600&q=70"
              alt=""
            />
          </Box>
        </Paper>
      </Box>

      {/* new section */}

      <Box className={style.cardBox}>
        <Typography variant="h5" className={style.fontWeight500}>
          Maximize your savings with applying for the Priceline Rewards™ Visa®
          Card!
        </Typography>
        <ul>
          <Typography variant="h6" className={style.bottomLayoutThemeText}>
            <li>
              Looking to fast-track your VIP status? Automatically become VIP
              Gold once approved.
            </li>
          </Typography>

          <Typography variant="h6" className={style.bottomLayoutThemeText}>
            <li>
              Earn 5X Points on eligible hotel, flight, package, rental car and
              cruise purchases using your card.*
            </li>
          </Typography>
          <Typography variant="h6" className={style.bottomLayoutThemeText}>
            <li>Plus, get special cardmember coupons, discounts & perks!</li>
          </Typography>
        </ul>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#0068EF",
            padding: "10px 40px",
            marginBottom: "30px",
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
