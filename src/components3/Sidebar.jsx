import { InputBase,Button,Box,Switch,Checkbox,ButtonGroup,Slider} from "@material-ui/core"
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import styled from "styled-components";
import StarIcon from '@material-ui/icons/Star';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PoolIcon from '@material-ui/icons/Pool';

import PetsIcon from '@material-ui/icons/Pets';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import WifiTwoToneIcon from '@material-ui/icons/WifiTwoTone';
import SpaTwoToneIcon from '@material-ui/icons/SpaTwoTone';
const A = styled.div`
width:25%;
position: relative;

h4{
  color:#001833;
  border-bottom: 1px solid #c8c9c8;
  margin: 5px;
}
.Ratedesign{
  float: right;

}
.section{
  width:75%
}

`
const useStyles = makeStyles((theme) => ({
 
    float: {
        float: "left"
    },

 
   buutonstyle: {
       textTransform: "none",
       color: "#307abb",
       padding: "4px",
       margin: "20px 5px"
    },
    container: {
       textAlign:"left",
      display: "grid",
       paddingLeft: "3rem"
    
  },
  marginIcon: {
    marginLeft: "6%",
    height: "20px"
    }
  ,
    toogle: {
        marginTop:"5px"
  },
  themdesign: {
     maxWidth:"100%",
    display: "grid",

    gridTemplateColumns:"50% 50%"
      
  },
  Rateflow: {
    display: "flex",
    lineHeight:"1px"
  },
  box: {
    maxWidth: "100%",
    marginBottom: "10px",
  },
  Search: {
    background: "blue",
    color: "white",
    height: "40px"
    
  },
  iconset: {
    padding: "5px",
    justifyContent:"center"
   
  },
    btn:{
      margin: "5px",
      lineHeight: "15px",
      color: "#004499",
      fontWeight:"bold"
  },
  bordernone: {
    margin:"0 8px" ,
    border: "none",
    padding: "4px 8px",
      
  },
  blueborder: {
    border:"1px solid blue"
  },

    box2: {
        maxWidth: "100%",
        marginBottom: "10px",
     border: "1px solid blue",
    lineHeight: "15px",
    paddingLeft:"1rem"
  },
  flex:{
      display: "flex"
  },
  iconic: {
    padding: "4px",
    fontSize:"20px"
  }


}));
export function Sidebar() {
    
  const classes = useStyles();
 const [value,setvalue]=useState([20, 37])

 

  const handleChange2 = (event,newValue) => {
    setvalue(newValue);
  }

    return <A>
         <div >
            <Box className={classes.box} >
                <h4>Saving Mode</h4>
               <div className="text_align_Box"><p className="text_align">Turn this on to instantly reveal the best deals that match each hotel.</p>
                  <Switch className={classes.toogle}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
            />  </div>
          
        </Box>
      {/* them provide r section */}
      
        <Box className={classes.box}>
            <h4 className="heading"style={{}}>Theme Provider</h4>
            <Box className={classes.themdesign}>
              
          <Button className={classes.btn} variant="outlined">Business<StarIcon className={classes.marginIcon}></StarIcon></Button>
            <Button className={classes.btn} variant="outlined">Comfort<MonetizationOnIcon className={classes.marginIcon}/></Button>
          <Button className={classes.btn} variant="outlined">Business frendly<CardTravelIcon className={classes.marginIcon}/></Button>
          <Button className={classes.btn} variant="outlined">spa and business<SpaTwoToneIcon className={classes.marginIcon}/></Button>
          </Box>
        </Box>
        
        {/* Rate Options */}
        <Box  className={classes.box}>
          <h4>Rate Options</h4>
          <Box className={classes.Rateflow}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /><p className="section">Pay Later<span className="Ratedesign">(170)</span></p>
          </Box>
        </Box>
        {/* guest rating */}
        <Box className={classes.box}>
          <h4>Guest Rating</h4>
          <Box className={classes.blueborder}>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                         <Button className={classes.bordernone}>4 +</Button>
            <Button className={classes.bordernone}>5 +</Button>
                <Button className={classes.bordernone}>6+</Button>
              <Button className={classes.bordernone}>7+</Button>
              <Button className={classes.bordernone}>8+</Button>
              <Button className={classes.bordernone}>9+</Button>
</ButtonGroup>  </Box>
        </Box>
        {/* Set Your Budget */}
        <Box className={classes.box} >
          <h4>Set Your Budget</h4>
          <Box>
             <Slider
  value={value}
  onChange={handleChange2}
  valueLabelDisplay="auto"
  aria-labelledby="range-slider"
  getAriaValueText={valuetext}
/>
          </Box>
        </Box>

        {/* Number Of Beds */}
        <Box  className={classes.box}>
          <h4>Number Of Beds</h4>
          <Box className={classes.Rateflow} >
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /><p className="section">1 Bed <span className="Ratedesign">(170)</span></p>
          </Box>
          <Box className={classes.Rateflow}>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /><p className="section">2 Beds <span className="Ratedesign">(170)</span></p>
          </Box>
          <Box className={classes.Rateflow}>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /><p className="section">3+ Beds <span className="Ratedesign">(170)</span></p>
          </Box>
        </Box>
        {/* Search Hotels */}
        <Box className={classes.box}>
          <h4>Search Hotels</h4>
          <Box style={{display:"flex"}}>
            <InputBase
              style={{border:"1px solid grey"}}
              placeholder="Enter Hotel Name"

              inputProps={{ 'aria-label': 'search' }}
             />  
         <Button variant="outlined" color="primary" className={classes.Search}>
          Search
        </Button>
          </Box>
        </Box>
        {/* Brands */}
        <Box className={classes.box}>
          <h4>Brands</h4>
            <Box className={classes.Rateflow}>
          <Checkbox style={{padding:"0px"}}></Checkbox><p className="section">Court Yard By Maariot<span className="Ratedesign">(5)</span></p>
          </Box>
        </Box>
        {/* Hotel Star Level */}
         <Box className={classes.box}>
          <h4>Hotel Star Level</h4>
          <Box className={classes.blueborder}>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                         <Button className={classes.bordernone}>4 +</Button>
            <Button className={classes.bordernone}>5 +</Button>
                <Button className={classes.bordernone}>6+</Button>
              <Button className={classes.bordernone}>7+</Button>
              <Button className={classes.bordernone}>8+</Button>
              <Button className={classes.bordernone}>9+</Button>
</ButtonGroup>  </Box>
        </Box>
        {/* Amenities */}
        <Box className={classes.box}>
          <h4>Amenities</h4>
       
        <Box className={classes.Rateflow}>
            <Checkbox style={{ padding: "0px" }}></Checkbox><WifiTwoToneIcon className={classes.iconic}></WifiTwoToneIcon><p className="section">Free Internet Acees<span className="Ratedesign">(5)</span></p>
        </Box>
         <Box className={classes.Rateflow}>
          <Checkbox style={{padding:"0px"}}></Checkbox><FreeBreakfastIcon className={classes.iconic}/><p className="section">Free Break Fast<span className="Ratedesign">(5)</span></p>
        </Box>
         <Box className={classes.Rateflow}>
          <Checkbox style={{padding:"0px"}}></Checkbox><LocalParkingIcon className={classes.iconic}/><p className="section">Free Parking<span className="Ratedesign">(5)</span></p>
        </Box>
         <Box className={classes.Rateflow}>
          <Checkbox style={{padding:"0px"}}></Checkbox><PetsIcon className={classes.iconic}/><p className="section">Pets Allowed<span className="Ratedesign">(5)</span></p>
        </Box>
         <Box className={classes.Rateflow}>
          <Checkbox style={{padding:"0px"}}></Checkbox><PoolIcon/><p className="section">Swimming Pool<span className="Ratedesign">(5)</span></p>
          </Box>
           </Box>

        {/* show more */}
        <Box className={classes.box}>
          <h4>Prperty Types</h4>
             <Box  className={classes.Rateflow}>
        <Checkbox style={{padding:"0px"}}></Checkbox><p className="section">Hostel<span className="Ratedesign">(5)</span></p>
        </Box>
         <Box  className={classes.Rateflow} >
          <Checkbox style={{padding:"0px"}}></Checkbox><p className="section">Apatments<span  className="Ratedesign">(5)</span></p>
        </Box>
         <Box  className={classes.Rateflow}>
          <Checkbox style={{padding:"0px"}}></Checkbox><p className="section">Beds & BreakFast<span className="Ratedesign">(5)</span></p>
          </Box>
        </Box>
        {/* card */}
        <Box className={classes.box2}>
          <h5 style={{lineHeight:"5px"}}>Best Price GUARANTEED.</h5>
         <p style={{lineHeight:"15px"}}>xclusively for Priceline members</p>
         <p>Book now and we'll refund the difference if you find a lower price</p>
          </Box>
          </div>
        
        </A>
}
function valuetext(value) {
  return `${value}°C`;
}