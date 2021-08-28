import styles from "./bottom.module.css";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  sel: {
    background: "rgb(237,240,243)",
    color: "rgb(0,104,239)",
    textTransform: "none",
    height: "50%",
  },
}));
export const BottomPart=()=> {
  const classes = useStyles();
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.amen_res}>
          <h2>Amenities</h2>
          <div className={styles.amen_flex}>
            <div className={styles.amen_flex_p}>
              <div className={styles.amen_flex_pp}>
                <h3>Health Services</h3>
                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Process in place to check health of guests</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>First aid kit available</p>
                </div>
              </div>

              <div className={styles.amen_flex_pp}>
                <h3>Services and Conveniences</h3>
                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Guests can opt-out of daily cleaning service</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Shops on site</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Cashless payment available</p>
                </div>
              </div>
            </div>

            <div className={styles.amen_flex_p}>
              <div className={styles.amen_flex_pp}>
                <h3>Sanitation Procedures</h3>
                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>
                    Linens, towels and laundry washed in accordance with local
                    authority guidelines
                  </p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>
                    Protective screen or physical barriers in appropriate areas
                  </p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Hand sanitizer in guest accommodation and key areas</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Physical/social distancing guidelines</p>
                </div>
              </div>
            </div>

            <div className={styles.amen_flex_p}>
              <div className={styles.amen_flex_pp}>
                <h3>Services and Conveniences</h3>
                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Guests can opt-out of daily cleaning service</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Shops on site</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Cashless payment available</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Designated smoking area</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Laundry services</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Concierge services</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Massage services</p>
                </div>
              </div>
            </div>

            <div className={styles.amen_flex_p}>
              <div className={styles.amen_flex_pp}>
                <h3>Media & Technology</h3>
                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Fax/photocopying</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Free Wi-Fi</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Business center</p>
                </div>
              </div>

              <div className={styles.amen_flex_pp}>
                <h3>Room Amenities</h3>
                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Ironing amenities</p>
                </div>

                <div className={styles.amen_elem}>
                  <span>
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "14px",
                        color: "rgb(0, 170, 0)",
                      }}
                    />{" "}
                  </span>
                  <p>Fire extinguishers</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              className={classes.sel}
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
            >
              Select dates for prices
            </Button>
          </div>
        </div>
        <hr className={styles.line} />
      </div>

      <div className={styles.wrap1}>
        <div className={styles.amen_res1}>
          <h2>About the Hotel</h2>
          <div className={styles.para_cont}>
            <div className={styles.hotel_det}>
              <div className={styles.hotel_all}>
                <h3>Hotel Features</h3>
                <div className={styles.para_txt}>
                  Taj Santacruz is located in Santa Cruz at a 2-minute walk from
                  the Chhatrapati Shivaji Domestic Airport and 2.5 mi from
                  International terminal. The property is located 5 mi from the
                  Andheri commercial hub, 5.6 mi from Bombay Exhibition Center
                  (Goregaon) and 3.1 mi from the financial hub of Bandra Kurla
                  complex. Powai Central Business District is 6.8 mi while Worli
                  Business District is 7.5 mi away. The hotel has a year-round
                  outdoor pool and views of the pool, and guests can enjoy a
                  drink at the bar. Free WiFi and parking is offered. Rooms come
                  with a flat-screen TV with satellite channels and DVD player.
                  Some rooms have a seating area to relax in after a busy day.
                  Extras include bath robes and free toiletries. A TV is
                  available. You will find a 24-hour front desk, spa and sauna
                  at the property. Guests can enjoy a meal at China Inc or
                  Rivea, the hotel's Chinese and Italian restaurants. Tiqri is
                  the multi cuisine all day dining restaurant.
                </div>
              </div>

              <hr className={styles.line} />

              <div className={styles.ho_tim}>
                <h3>Guest Policies</h3>

                <div className={styles.tim_data}>
                  <table className={styles.tb}>
                    <tbody className={styles.tbdy}>
                      <tr className={styles.one}>
                        <td className={styles.td_left}>
                          <div>Check-in</div>
                        </td>
                        <td className={styles.td_right}>
                          <div>
                            <ScheduleIcon
                              style={{ marginTop: "10px", marginLeft: "20px" }}
                            />
                            <p className={styles.tb_check}>After 3:00 PM</p>
                          </div>
                        </td>
                      </tr>

                      <tr className={styles.two}>
                        <td className={styles.td_left}>
                          <div>Check-out</div>
                        </td>
                        <td className={styles.td_right}>
                          <div>
                            <ScheduleIcon
                              style={{ marginTop: "10px", marginLeft: "20px" }}
                            />
                            <p className={styles.tb_check}>Before 11:00 PM</p>
                          </div>
                        </td>
                      </tr>

                      <tr className={styles.one}>
                        <td className={styles.td_left}>
                          <div>Parking</div>
                        </td>
                        <td className={styles.td_right}>
                          <div>
                            <p className={styles.tb_txt}>
                              Free private parking is available at a location
                              nearby (reservation is not needed).
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr className={styles.two}>
                        <td className={styles.td_left}>
                          <div>Internet</div>
                        </td>
                        <td className={styles.td_right}>
                          <div>
                            <p className={styles.tb_txt}>
                              WiFi is available in all areas and is free of
                              charge.
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr className={styles.one}>
                        <td className={styles.td_left}>
                          <div>Pets</div>
                        </td>
                        <td className={styles.td_right}>
                          <div>
                            <p className={styles.tb_txt}>
                              Pets are not allowed.
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr className={styles.two}>
                        <td className={styles.td_left}>
                          <div>Room Rates</div>
                        </td>
                        <td className={styles.td_right}>
                          <div>
                            <p className={styles.tb_txt}>
                              All rates displayed are for double occupancy
                              unless otherwise noted.
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.infr}>
                  <h3>Important Info</h3>
                  <div className={styles.imp_info}>
                    Spa and gym facilities at this property are unavailable due
                    to the coronavirus (COVID-19). Due to the coronavirus
                    (COVID-19), this property is taking steps to protect the
                    safety of guests and staff. Certain services and amenities
                    may be reduced or unavailable as a result. In response to
                    the coronavirus (COVID-19), additional safety and sanitation
                    measures are in effect at this property. Food and beverage
                    services at this property may be limited or unavailable due
                    to the coronavirus (COVID-19). In accordance with government
                    guidelines to minimize transmission of the coronavirus
                    (COVID-19), this property may request additional
                    documentation from guests to validate identity, travel
                    itinerary, and other relevant info on dates where such
                    guidelines exist. Please inform Taj Santacruz of your
                    expected arrival time in advance. You can use the Special
                    Requests box when booking, or contact the property directly
                    using the contact details in your confirmation. Guests are
                    required to show a photo ID and credit card upon check-in.
                    Please note that all Special Requests are subject to
                    availability and additional charges may apply. In accordance
                    with government guidelines to minimize transmission of the
                    coronavirus (COVID-19), this property currently isn't
                    accepting guests from certain countries on dates where such
                    guidelines exist. Please note that for security purpose all
                    Indian guests are required to present a valid photo ID proof
                    (Voter's ID, driver's license, Aadhar Card, any other ID
                    with address approved by the Government of India. A Pan Card
                    is not acceptable). All international guests are required to
                    present a valid passport and visa. For Indian guests, cash
                    settlements of INR 25000 and above will require a pan card
                    copy during check out.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.people}>
              <div className={styles.pe_rev}>
                <div className={styles.rev_top}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <div className={styles.bttnn}>8.8</div>
                    <span className={styles.rev_name}>
                        Pleasant</span></div>
                    <div>
                      <p className={styles.rev_dat}>Aug 9, 2021</p>
                    </div>
                   
                  </div>
                </div>
                 <p className={styles.pe_loc}>Vidya</p>
                <div className={styles.r_t}>
                  <div>
                    <p>What did you like most?</p>
                    <div>Good staff hospitality cleanliness</div>
                  </div>
                </div>

                  <div className={styles.r_t}>
                  <div>
                    <p>What did you like most?</p>
                    <div>Good staff hospitality cleanliness</div>
                  </div>
                </div>
               
                
              </div>



                   <div className={styles.pe_rev}>
                <div className={styles.rev_top}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <div className={styles.bttnn}>9</div>
                    <span className={styles.rev_name}>
                        Very Good</span></div>
                    <div>
                      <p className={styles.rev_dat}>Sep 20, 2020</p>
                    </div>
                   
                  </div>
                </div>
                <p className={styles.pe_loc}>Pooran</p>
                <div className={styles.r_t}>
                  <div>
                    <p>Was there anything you didn't like?</p>
                    <div>Nothing that I can think of</div>
                  </div>
                </div>

                  <div className={styles.r_t}>
                  <div>
                    <p>What did you like most?</p>
                    <div>Good staff hospitality cleanliness</div>
                  </div>
                </div>
                <div>

                  
                   <div style={{marginTop:"20px"}}>
                         <Button className={classes.sel} variant="contained">Show Guest Review</Button>
                </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <div className={styles.map_res}>
          <hr className={styles.line} />
          <h2>Location</h2>
          <div className={styles.loc_det}>
            <div className={styles.loc_left}>
              <div className={styles.loc_logo}>
                <img
                  src="https://www.priceline.com/relax/public/assets/images/bed-icon-marker.svg"
                  alt=""
                />
              </div>
              <div className={styles.loc_p}>
                <div>Db City, Arera Hills, Bhopal, India</div>
                <div>Bhopal</div>
              </div>
            </div>

            <div className={styles.loc_right}>
              <Button
                style={{ width: "20px", marginRight: "5px" }}
                variant="contained"
                color="primary"
              >
                9
              </Button>

              <div className={styles.loc_p}>
                <div>Exceptional</div>
                <div>Location Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.img_map_loc}>
        <img
          src="https://cdn.thomascook.com/mapimages/42978-720x450.jpg"
          alt=""
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "16px" }}>
        {" "}
        <Button
          style={{
            textTransform: "none",
            background: "rgb(0,104,239)",
            fontWeight: "700",
          }}
          variant="contained"
          color="primary"
        >
          Back To All Hotels
        </Button>
      </div>

      <div className={styles.last}>
      
        <div style={{ display: "flex" }}>
          <span>from</span>
          <div className={styles.suplog}>
            <sup>₹</sup>
            6205
          </div>
          <Button
            style={{
              textTransform: "none",
              background: "rgb(0,170,0)",
              fontWeight: "700",
            }}
            variant="contained"
            color="primary"
          >
           Choose Your Room
          </Button>
          </div>
         
      </div>
    </div>
  );
}
