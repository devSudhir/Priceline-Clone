import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Slider ,Paper,TextField, Checkbox,Radio,makeStyles} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SecurityIcon from '@material-ui/icons/Security';
import styled from "styled-components"
import HotelIcon from '@material-ui/icons/Hotel';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WifiIcon from '@material-ui/icons/Wifi';
import { PaymentCard } from './PaymentCard';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from "axios"
import { Ordersucessfuly } from "./OrderSuccesful"
import { useState } from 'react';

const A3 = styled.div`
.box{
margin-left: 6%;
}
.orange{
    color:orange;
}
.blue{
    color:#3b8bf3;

}
.marginleft{
    margin-left: 10px;
}
.star{
    margin-left: 5px;
    padding-left: 5px;
    height:25px;
    border-left: 1px solid black;
}
.secyion2{
    width:80%;
    margin:auto;
}
.block{
    display: grid;
    grid-template-columns: 1fr;
}
.numerdetails{
      padding: 3px;
        width: 80%;
        margin: auto;
}
.m_auto{
   
    width:90%;
    margin: auto;
    padding: 0px 20px;
     margin-top:10px ;

}
.padding2{
    padding:0.1px 0px;
}

.box4{
    width:20px;
    padding:5px;
    color:white;
    background-color: orange;
    margin-right: 10px;
}
.marginAuto{
    margin: auto;
    text-align: center;
    background-color: #f4f6f8;
    padding: 0.5px;
}
.bgcolor{
        margin: 20px;
         background-color: #f4f6f8;
   
}
.headingcolor{
    color:#521833
}
.lightgrey{
    color: #7a738f;
}
.fontsmall{
    font-size:small;
}
.gap{
    line-height: 10px;
    padding: 0;
    margin-left: 8%;

 
}
.green{
    color:green;
}
.flex{
    display: flex;
}
.lineHeight{
    line-height: 10px;
}
.btnclass{
        width: 100%;
        padding:10px 5px;
        margin: auto;
        background: #00aa00;
        color:white;

        text-align: center;
    }
    .gap1{
        margin-left: 30px;
    }
    .padding1{
        padding:20px 5px;
    }
    .upistyle{
        padding: 5px;
        color:blue
    }
    .iconupi{
        font-size: 15px;
    }
    .bg{
        background-color:whitesmoke;
    }
`

const useStyles = makeStyles((theme) => ({
 
    icons: {
        fontSize: "15px ",
        marginRight:"10px"
    },
    section: {
        width: "80%",
        margin: "auto",
        paddingLeft: "20px",
    },
    grrencolor: {
        color:"green"
    },
    gaptext: {
        marginRight:"20px"
    },
    creditdetails: {
        padding: "3px",
        width: "80%",
        margin: "auto"
      
    },
    numertext: {
        width: "73%",
        margin: "auto"
    },
    upistyle: {
        padding: "15px 5px",
        
    }
  
    
   

 
 


}));
export function Booking() {
    const classes = useStyles()
    const a = useParams();
  
    var d = new Date();
 
    var checkindate = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
    var checkout=d.getDate()+1+ "/" + d.getMonth() + "/" + d.getFullYear()

   
    const [hotels, setHotels] = useState({});
    useEffect(() => {
        axios.get(`https://sudhir-app-test.herokuapp.com/rooms?id=${a.id}`).then(result => {
           
             axios.get(`https://sudhir-app-test.herokuapp.com/hotels?location=${result.data[0].location}`).then(res => {
            setHotels(res.data[0])
        })
            
        })
       
       
    }, [])
   

    return <A3>
        <div className="marginAuto">
            <p><VerifiedUserIcon className={ classes.icons}/>SECURE TRANSACTIONS
<span className="marginleft"><AccessTimeIcon className={ classes.icons}/>24-HOUR SERVICE</span>
<span className="marginleft"><SecurityIcon className={ classes.icons}/>TRUSTED PAYMENTS </span></p>
        </div>
        <div><Slider
         defaultValue={2}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
     
        min={1}
            max={3}></Slider></div>
        <div className="box">
        <div className="secyion2">
            <p><span>Almost done!</span> Enter your details and complete your booking now.</p>
        </div>
        <div style={{ display: "flex",paddingRight:"10%"}}>
            <div style={{width:"80%"}}>
                    {hotels ? <Paper elevation={3} className={classes.section}>
                        <div className="flex">
                            <div><img style={{width:"300px",height:"200px"}} src={hotels.img} alt="" /></div>
                            <div className="gap1"><h2 className="headingcolor">
                                {hotels.title} {hotels.location}</h2>
                                <p className="lightgrey">{hotels.location}</p>
                                <div style={{ marginTop: "30px", display: "flex" }}>
                                    <div className="orange box4">{hotels.review}</div>
                                    <div className="blue">{hotels.total_review}</div>
                                    <div className="star"> {hotels.star}</div>
                                </div>
                            </div>
                        </div>
                        {/* section3 */}
                        <div style={{ display: "flex" }} className="bgcolor">
                            <div className="lightgrey gap" >Check in
                                <h3 className="headingcolor" >{checkindate}</h3>
                            </div>
                            <div className="lightgrey gap">
                                Check out
                                <h3 className="headingcolor">{checkout}</h3>
                            </div >
                            <div className="lightgrey gap">Night
                                <h3 className="headingcolor">1</h3>
                            </div>
                            <div className="lightgrey gap">
                                Rooms
                                <h3 className="headingcolor">1</h3>
                            </div>
                        </div>
                        {/* section 4 */}
                        <div>
                            <h4 className="headingcolor">Deluxe Twin, Deluxe Guest room, 2 Twin/Single Bed(s)</h4>
                            <p ><HotelIcon className={classes.icons} />1 Queen Bed</p>
                            <p className="green"><LocalParkingIcon className={classes.icons} />Free Parking</p>
                            <p className="green"><WifiIcon className={classes.icons} />Free Wifi</p>
                          
                        </div>
                    </Paper> :""}
          <Paper className={classes.section} elevation={3}>

        <div className="bg padding2 "><p>The guest checking into each hotel room must be 21 or older, present a valid Photo ID and credit card.</p></div>
        <div>
            <h3>Guest Name</h3>
            <h4>Room 1</h4>
            <div>
                <TextField className={classes.gaptext} variant="outlined"  placeholder="First Name *" />
                <TextField variant="outlined" className={classes.gaptext} placeholder="Last Name*"  />
            </div>
            <div className="flex">
                <Checkbox/><p>Guest name and name on card are the same</p>
            </div>
        </div>
        </Paper>

        <Paper className={classes.section} elevation={3}>
            <div>
            <h3>Payment Method</h3>
               <Paper><Radio  className={classes.upistyle} /><button className="upistyle">Upi/<GTranslateIcon className="iconupi"/></button></Paper> 
            </div>
            <Paper elevation={3}>
            <div className="flex"><Radio /><div>
            <h3>Credit Card or Debit</h3>
                <h5>Visa, Mastercard</h5></div>
            </div>
            <div className="block bgcolor padding1">
                <TextField className={classes.creditdetails}  variant="outlined" placeholder=" Name on Card"/>
                <TextField className={classes.creditdetails} variant="outlined" placeholder="Card Number **"/>
                <TextField className={classes.creditdetails}
          required
          label="MM/YYYY"
                    defaultValue="MM/YYYY"
                    placeholder="MM/YYYY"
          variant="filled"
                />
                
                 <TextField className={classes.creditdetails}  variant="outlined" placeholder="CVV"/>
                </div>
                </Paper>
        </Paper>
        {/* billing */}
        <Paper className={classes.section} elevation={3}>
            <h3>Billing</h3>
           <div className="block padding1"> <TextField className={classes.creditdetails}  variant="outlined" placeholder="Street Address *" />
               <TextField className={classes.creditdetails} 
          required
          label=""
                    defaultValue="Country*"
                    placeholder="India"
          variant="outlined"
            />
            <TextField className={classes.creditdetails}  variant="outlined" placeholder="Zip Code*" />
            <TextField className={classes.creditdetails}  variant="outlined" placeholder="City *" />
            <TextField className={classes.creditdetails}  variant="outlined" placeholder="Email Address*" />
            <div className="flex numerdetails">
                <TextField  variant="outlined" placeholder="+91"></TextField>
                <TextField className={classes.numertext}  variant="outlined" placeholder="Mobile No*" />
                </div>
                </div>
        </Paper>
        {/* bootm last on */}
        <Paper className={classes.section} elevation={3}>
            <div style={{padding:"10px"}}>
            <h3 className="lineHeight">Important Information</h3>
            <p className="lineHeight fontsmall">Cancellation and change fees apply as stated in the Booking Conditions (this link opens in a modal dialog).</p>
                <p className="lineHeight fontsmall">This special rate isnon-refundable.</p>
                </div>
        </Paper>
        <Paper className={classes.section} elevation={3}>
            <div style={{borderBottom:"1px solid grey",padding:"15px 5px"}}>By selecting Complete Booking you agree to the<span className="blue"> Booking Conditions  Terms and Conditions </span>, and <span className="blue">Privacy Policy.</span></div>
            <div className="m_auto"><button className="btnclass"><Ordersucessfuly/></button></div>
            </Paper>
            </div>
                <PaymentCard/>
            </div>
            </div>

    </A3>
    
}
