import styles from "./roomPage.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FiShare } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { GrTrophy } from "react-icons/gr";
import WifiIcon from "@material-ui/icons/Wifi";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SpaIcon from "@material-ui/icons/Spa";
import ErrorIcon from "@material-ui/icons/Error";
import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import CaurosalsPage from "../Caurosals/CourasalsPage";
import Bottom, { BottomPart } from "../Bottom/Bottom";
import { Footer } from "../../Footer/Footer";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginBottom: "3px solid rgb(0, 104, 239)",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "12px",
    padding: "16px",
    margin: "1px 1px 0px 1px",
    textTransform: "none",
  },
  btn1: {
    textTransform: "none",
    borderRadius: "1px",
    background: "rgb(0,104,239)",
  },
  sel: {
    background: "rgb(0,170,0)",
    color: "#FFF",
    textTransform: "none",
    height: "50%",
    fontWeight:"700",
   
     
  }

}));
export function RoomPage() {
  // const [color,setColor] = useState(false)

  // const changeColor = (){
  //     setColor(true)
  // }
  const [room, setRoom] = useState([]);
  const [card, setCard] = useState({})
  const a=useParams()
  useEffect(() => {
    axios.get("https://sudhir-app-test.herokuapp.com/rooms").then(res => {
       setRoom(res.data)
    })
    axios.get(`https://sudhir-app-test.herokuapp.com/hotels?id=${a.id}`).then((res) => {
        setCard(res.data[0])
      })
      
      .catch((e) => {
      alert("data not loades")
      })
    
  }, [])
  console.log(room)
  const classes = useStyles();
  return (
    <div>

      <div className={styles.courosal}>
        <CaurosalsPage/>
      </div>
      <div className={styles.nav}>
        <div className={styles.nav_cont}>
          <div className={styles.btn_cont}>
            <Button className={classes.btn} color="primary">
              Overview & Photos
              <div
                style={{
                  width: "100%",
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  background: "rgb(0, 104, 239)",
                }}
              ></div>
            </Button>

            <Button className={classes.btn} color="primary">
              Rooms
            </Button>

            <Button className={classes.btn} color="primary">
              Amenities
            </Button>

            <Button className={classes.btn} color="primary">
              Map
            </Button>

            <Button className={classes.btn} color="primary">
              Reviews
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.hotel_info}>
        <div className={styles.hotel_detail}>
          <div className={styles.hotel_contt}>
            <div className={styles.hotel_text}>
              <h1>{card.title}</h1>
              <div className={styles.hotel_star}>
                <span>{card.star}-STAR HOTEL</span>
              </div>
              <div className={styles.hotel_loc}>
               {card.location}
              </div>
              <p className={styles.per}>1 person is looking at this hotel</p>
              <div className={styles.info_logo}>
                <div>
                  <button>
                    <span>
                      <FiShare />
                    </span>
                    <span>Share</span>
                  </button>
                  <button>
                    <GrFavorite />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.hotel_pri}>
              <div>
                <span>
                  <sup>₹</sup>{card.price}
                </span>
                <div className={styles.per}>price per night</div>
              </div>
              <Button
                className={classes.btn1}
                variant="contained"
                color="primary"
              >
                Select Dates
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ho_feature}>
        <div className={styles.feature_cont}>
          <div className={styles.features}>
            <div className={styles.feat_part}>
              <div className={styles.reason}>
                <h2>Top Reasons to Book</h2>
              </div>
              <div className={styles.gest}>
                <div className={styles.in}>
                  <div className={styles.in_logo}>
                    <svg>
                      <path d="M11 17.5c.1 0 .1 0 .2-.1L9 22l-1.5-2-2.5.2 2.1-4.4h.1c.2.2.4.4.6.7.4.5.8 1 1.4 1.2.2.1.4.1.5.1.5 0 .9-.1 1.3-.3zm5.8-1.7c-.2.2-.4.4-.6.7-.4.5-.8 1-1.4 1.2-.6.2-1.2 0-1.8-.2-.1 0-.1 0-.2-.1L15 22l1.5-2 2.5.2-2.2-4.4zM20 9.4c0 .3-.3.7-.6 1.1-.2.3-.5.7-.6 1-.1.4-.1.8-.1 1.2 0 .5 0 .9-.2 1.2s-.6.4-1.1.6c-.4.1-.8.3-1.2.5-.3.2-.6.6-.8.9-.3.4-.6.7-.9.8-.3.1-.7 0-1.2-.2-.4-.1-.8-.2-1.3-.2-.4 0-.9.1-1.3.2-.5.1-.9.3-1.2.2-.3-.1-.6-.5-.9-.8-.3-.3-.5-.7-.8-.9s-.8-.4-1.2-.5c-.5-.2-.9-.3-1.1-.6s-.2-.7-.2-1.2c0-.4 0-.8-.1-1.2s-.4-.7-.6-1c-.3-.4-.6-.7-.6-1.1s.3-.7.6-1.1c.2-.3.4-.6.6-1 .1-.4.1-.9.1-1.3 0-.5 0-.9.2-1.2.2-.3.6-.4 1.1-.6.4 0 .8-.2 1.2-.4.3-.2.6-.6.8-.9.3-.4.6-.8.9-.9h.2c.3 0 .6.1.9.2.4.1.8.2 1.3.2.4 0 .9-.1 1.3-.2.5-.1.9-.3 1.2-.2s.6.5.9.8c.3.3.5.7.8.9.5.3.9.5 1.3.6.5.2.9.3 1.1.6.2.3.2.7.2 1.2 0 .4 0 .8.1 1.2.1.4.4.7.6 1 .3.4.6.8.6 1.1zm-3.5-1.8l-.9-.9-4.9 4.9-2.3-2.3-.9.9 3.2 3.2 5.8-5.8z"></path>
                    </svg>
                  </div>
                  <div className={styles.in_txt}>
                    <div className={styles.in_title}>GUESTS LOVE IT</div>
                    <div className={styles.in_p}>
                      Guests give this property an excellent rating of 8.8/10{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gest}>
                <div className={styles.in}>
                  <div className={styles.in_logo}>
                    <GrTrophy />
                  </div>
                  <div className={styles.in_txt}>
                    <div className={styles.in_title}>VERY CLEAN</div>
                    <div className={styles.in_p}>
                      Guests rate the cleanliness 9.3/10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.feat_part2}>
              <div className={styles.reason}>
                <div className={styles.rev}>
                  <div className={styles.bttn}>{card.review}</div>
                  <h2>Guest Rating</h2>
                </div>
              </div>
              <div className={styles.gest}>
                <div className={styles.in}>
                  <div className={styles.in_txt}>
                    <div className={styles.prog}>
                      <div className={styles.in_title}>CLEANLINESS</div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.log}>
                          <GrTrophy />
                          <GrTrophy />
                        </div>
                        <div className={styles.re}>9.3</div>
                      </div>
                    </div>

                    <div className={styles.in_p}>
                      <div style={{ display: "flex", height: "5px" }}>
                        <div
                          style={{
                            height: "100%",
                            width: "300px",
                            background: "rgb(246, 128, 19)",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "100%",
                            width: "30px",
                            background: "rgb(192,202,213)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gest}>
                <div className={styles.in}>
                  <div className={styles.in_txt}>
                    <div className={styles.prog}>
                      <div className={styles.in_title}>STAFF</div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.re}>9.0</div>
                      </div>
                    </div>

                    <div className={styles.in_p}>
                      <div style={{ display: "flex", height: "5px" }}>
                        <div
                          style={{
                            height: "100%",
                            width: "300px",
                            background: "rgb(246, 128, 19)",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "100%",
                            width: "30px",
                            background: "rgb(192,202,213)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gest}>
                <div className={styles.in}>
                  <div className={styles.in_txt}>
                    <div className={styles.prog}>
                      <div className={styles.in_title}>LOCATION</div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.re}>9.1</div>
                      </div>
                    </div>

                    <div className={styles.in_p}>
                      <div style={{ display: "flex", height: "5px" }}>
                        <div
                          style={{
                            height: "100%",
                            width: "300px",
                            background: "rgb(246, 128, 19)",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "100%",
                            width: "30px",
                            background: "rgb(192,202,213)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gest1}>
                  <p>Verified reviews from 1478 guests</p>
                </div>
              </div>
            </div>

            <div className={styles.feat_part3}>
              <div className={styles.reason}>
                <h2>Top Amenities</h2>
              </div>
              <div>
                <div className={styles.f3}>
                  <div className={styles.f3_content}>
                    <div className={styles.f3_p1}>
                      <div className={styles.p1}>
                        <div className={styles.p1_log}>
                          <img
                            src="https://q-xx.bstatic.com/xdata/images/hotel/max500/125011658.jpg?k=06790aee6167eb59636d03f1c6d6b00daab6ec980b6a4ea6c3e06c020566888a&o="
                            alt=""
                          />
                        </div>
                        <div className={styles.p1_txt}>Swimming Pool</div>
                      </div>

                      <div className={styles.p1}>
                        <div className={styles.p1_log1}>
                          <WifiIcon />
                        </div>
                        <div className={styles.p1_txt1}>Free Wifi</div>
                      </div>

                      <div className={styles.p1}>
                        <div className={styles.p1_log1}>
                          <AirportShuttleIcon />
                        </div>
                        <div className={styles.p1_txt1}>Airport Shuttle</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.f3_content}>
                    <div className={styles.f3_p1}>
                      <div className={styles.p1}>
                        <div className={styles.p1_log1}>
                          <SpaIcon />
                        </div>
                        <div className={styles.p1_txt1}>Spa</div>
                      </div>

                      <div className={styles.p1}>
                        <div className={styles.p1_log1}>
                          <LocalParkingIcon />
                        </div>
                        <div className={styles.p1_txt1}>Parking</div>
                      </div>

                      <div className={styles.p1}>
                        <div className={styles.p1_log1}>
                          <BusinessCenterIcon />
                        </div>
                        <div className={styles.p1_txt1}>Business Center</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.gest1}>
                <p>Show All Amenities</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.covid}>
          <div className={styles.cov}>
            <span style={{ marginLeft: "20%" }}>
              <ErrorIcon />
            </span>
            <strong>COVID-19</strong>
            <span>
              restrictions may impact leisure travel. Please review this hotel's
              important info.
            </span>
            <strong>
              {" "}
              <span style={{ color: "rgb(0, 104, 239)" }}>Read More</span>{" "}
            </strong>
          </div>
        </div>
      </div>


      
      <div className={styles.co_wraper}>
        <div className={styles.room_wrap}>
          <div className={styles.pr}>
            <h2>ROOM OPTIONS</h2>
            <div className={styles.grant}>
              <div>Best Price.GUARANTEED.</div>
              <div>Exclusively for Priceline members <span style={{ color: "rgb(0, 104, 239)",fontWeight: "600" }}> Details</span></div>
            </div>
          </div>
        </div>
        
        {/* Rooms cards */}
        
        {room.map((el) => {
         return  <div key={el.id} className={styles.r_cont}>
          <div className={styles.rooms}>
            <div className={styles.room_det}>
              <div className={styles.room_img}>
                <img src={el.img} alt="" />
              </div>
              <div className={styles.room_inf}>
                <div className={styles.room_i}>
                   <h3>{ el.title}</h3>
                   <p>{ el.area} Sft</p>
                   <div>{ el.description}</div>
                  <div className={styles.wif}>
                    <div><span><WifiIcon /></span><span style={{marginTop:"5px",marginLeft:"1px"}}>Free WIfi</span></div>
                  {/* </div>

                  <div className={styles.wif}> */}
                    <div><span><LocalParkingIcon /></span><span style={{marginTop:"5px",marginLeft:"1px"}}>Parking</span></div>
                  </div>
                  <div className={styles.room_p}>
                    <p>Room Details and Photos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.room_btn}>
               <div className={styles.room_btn_cont}>
                <div>Room Details</div>
                <div style={{display:"flex"}}>
                  <div className={styles.hotel_pri}>
                    <div style={{ display: "flex" }}>
                        <span style={{marginRight:"50px"}}>
                  <sup>₹</sup>{el.price}
                      </span>
                       <Button className={classes.sel} value={el.id} variant="contained"> <Link to={`/users/${el.id}`} style={{color:"white",textDecoration:"none"}}>Book Now</Link></Button>
                    </div>
                   
                   </div>
                 </div>
                
            </div>
            </div>
           
          </div>
        </div>

        })} 
        <BottomPart/>

               
      </div>
      <section style={{marginTop:"20px"}}> <Footer/></section>
      
    </div>
  );
}
