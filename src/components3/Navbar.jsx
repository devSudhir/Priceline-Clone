import { Toolbar, Typography, Button ,Box} from "@material-ui/core"

import {  makeStyles } from '@material-ui/core/styles';
import styled from "styled-components"
import { Link } from "react-router-dom";
import {Login} from "../Component/Login/Login"
const A = styled.div`

.iconpriceline{
    color:#1664a8;
    font-size: 20px;
    font-weight: bolder;
    height:40px;
}
.selctoption{
border:none;
font-size:15px;
margin-left: 2px;
    color:#1664a8;
}
.colorwhite{
color:#202020;
  border:none;
  text-decoration: none;
}
.headeric{
  color:#0068ef;
  font-weight: 700;
}

`

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
     menuButton: {
         height: "3rem",
       background: "white",  
    color:"grey"
     },
     Button: {
         marginLeft: 5,
       color: "#1664a8",
       borderBottom: "none"

         
     },
  title: {
    flexGrow: 1,
   },
   buutonstyle: {
    textTransform:"none",
   },
   bordernone: {
     border: 0,
   },
   navarbox: {
     height: "50px"
   }



 
    }));
    
export  function Navbar(){
   
    const classes = useStyles();
    return (<A>
        
     <Box >
        <Toolbar className={classes.navarbox}>
              
            <button className="iconpriceline"style={{backgroundColor:"white",border:"none"}} onClick={() => {
             
    }}> <Link className="colorwhite headeric" to="/">priceline</Link></button>
                <Button className={classes.buutonstyle}><Link className="colorwhite" to="/Hotels">Hotels </Link></Button>
                <Button  className={classes.buutonstyle}>Cars</Button>
                <Button  className={classes.buutonstyle}>Flights</Button>
                <Button  className={classes.buutonstyle}>Bundle + Save</Button>
                <Button  className={classes.buutonstyle}> Cruises</Button>
                 <Typography variant="h4" className={classes.title}>
        
    </Typography>
               
                
                <Box>
                    <Button color="inherit" className={classes.Button} > Join VIP</Button>
                  
      <Button color="inherit" className={classes.Button} > <Login/></Button>
     
      
                    
            <select  className="selctoption">
              <option>Find my trip</option>
            </select>
            <select className="selctoption">
              <option >Help</option>
            </select>

        </Box>
  </Toolbar>
</Box>
    </A>)
}
// Sign in
  